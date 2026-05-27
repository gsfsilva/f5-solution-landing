(function () {
  'use strict';

  var COOKIE_CONSENT_VERSION = '2026-05-25';
  var COOKIE_CONSENT_KEY = 'f5_cookie_consent';
  var GA_MEASUREMENT_ID = '';
  var META_PIXEL_ID = '';
  var lastFocusedElement = null;
  var analyticsLoaded = false;
  var marketingLoaded = false;
  var memoryConsent = null;

  function defaultConsent() {
    return {
      version: COOKIE_CONSENT_VERSION,
      createdAt: null,
      updatedAt: null,
      source: 'cookie-banner',
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false
    };
  }

  function normalizeConsent(consent) {
    if (!consent || typeof consent !== 'object') return null;
    if (consent.version !== COOKIE_CONSENT_VERSION) return null;
    if (typeof consent.createdAt !== 'string' || typeof consent.updatedAt !== 'string') return null;
    return {
      version: COOKIE_CONSENT_VERSION,
      createdAt: consent.createdAt,
      updatedAt: consent.updatedAt,
      source: typeof consent.source === 'string' ? consent.source : 'cookie-banner',
      necessary: true,
      preferences: consent.preferences === true,
      analytics: consent.analytics === true,
      marketing: consent.marketing === true
    };
  }

  function getCookieConsent() {
    var raw = null;
    try {
      if (!window.localStorage) return memoryConsent ? normalizeConsent(memoryConsent) : null;
      raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      var normalized = normalizeConsent(parsed);
      if (!normalized) {
        window.localStorage.removeItem(COOKIE_CONSENT_KEY);
        return null;
      }
      return normalized;
    } catch (error) {
      try {
        if (window.localStorage) window.localStorage.removeItem(COOKIE_CONSENT_KEY);
      } catch (removeError) {}
      return memoryConsent ? normalizeConsent(memoryConsent) : null;
    }
  }

  function hasValidCookieConsent() {
    return getCookieConsent() !== null;
  }

  function saveCookieConsent(partialConsent) {
    var existing = getCookieConsent();
    var now = new Date().toISOString();
    var consent = Object.assign(defaultConsent(), existing || {}, partialConsent || {});
    consent.version = COOKIE_CONSENT_VERSION;
    consent.createdAt = existing && existing.createdAt ? existing.createdAt : now;
    consent.updatedAt = now;
    consent.source = consent.source || 'cookie-banner';
    consent.necessary = true;
    consent.preferences = consent.preferences === true;
    consent.analytics = consent.analytics === true;
    consent.marketing = consent.marketing === true;

    try {
      if (window.localStorage) window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
      else memoryConsent = consent;
    } catch (error) {
      memoryConsent = consent;
    }

    applyCookieConsent(consent);
    hideCookieBanner();
    closeCookiePreferences();
    return consent;
  }

  function acceptAllCookies() {
    return saveCookieConsent({
      source: 'cookie-banner',
      preferences: true,
      analytics: true,
      marketing: true
    });
  }

  function rejectOptionalCookies() {
    return saveCookieConsent({
      source: 'cookie-banner',
      preferences: false,
      analytics: false,
      marketing: false
    });
  }

  function loadScriptOnce(id, src, onload) {
    if (!id || !src) return null;
    var existing = document.getElementById(id);
    if (existing) {
      if (typeof onload === 'function') onload();
      return existing;
    }
    var script = document.createElement('script');
    script.id = id;
    script.async = true;
    script.src = src;
    script.onload = function () {
      if (typeof onload === 'function') onload();
    };
    script.onerror = function () {};
    document.head.appendChild(script);
    return script;
  }

  function loadPreferenceScripts() {
    document.documentElement.setAttribute('data-f5-preferences-consent', 'true');
  }

  function loadAnalyticsScripts() {
    if (!GA_MEASUREMENT_ID || analyticsLoaded) return;
    window['ga-disable-' + GA_MEASUREMENT_ID] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
    loadScriptOnce('f5-ga4-loader', 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID));
    analyticsLoaded = true;
  }

  function loadMarketingScripts() {
    if (!META_PIXEL_ID || marketingLoaded) return;
    if (!window.fbq) {
      var fbq = function () {
        fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
      };
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = '2.0';
      fbq.queue = [];
      window.fbq = fbq;
      window._fbq = fbq;
    }
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
    loadScriptOnce('f5-meta-pixel-loader', 'https://connect.facebook.net/en_US/fbevents.js');
    marketingLoaded = true;
  }

  function applyCookieConsent(consent) {
    var valid = normalizeConsent(consent);
    if (!valid) return;
    if (!valid.analytics && GA_MEASUREMENT_ID) {
      window['ga-disable-' + GA_MEASUREMENT_ID] = true;
    }
    if (valid.preferences) loadPreferenceScripts();
    if (valid.analytics) loadAnalyticsScripts();
    if (valid.marketing) loadMarketingScripts();
  }

  function showCookieBanner() {
    var banner = document.getElementById('f5CookieBanner');
    if (banner) banner.hidden = false;
  }

  function hideCookieBanner() {
    var banner = document.getElementById('f5CookieBanner');
    if (banner) banner.hidden = true;
  }

  function fillPreferenceToggles() {
    var consent = getCookieConsent() || defaultConsent();
    var necessary = document.getElementById('f5CookieNecessary');
    var preferences = document.getElementById('f5CookiePreferences');
    var analytics = document.getElementById('f5CookieAnalytics');
    var marketing = document.getElementById('f5CookieMarketing');
    if (necessary) necessary.checked = true;
    if (preferences) preferences.checked = consent.preferences === true;
    if (analytics) analytics.checked = consent.analytics === true;
    if (marketing) marketing.checked = consent.marketing === true;
  }

  function openCookiePreferences() {
    var modal = document.getElementById('f5CookieModal');
    if (!modal) return;
    lastFocusedElement = document.activeElement;
    fillPreferenceToggles();
    modal.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    var firstFocus = modal.querySelector('#f5CookieClose') || modal.querySelector('button, input, a');
    if (firstFocus) firstFocus.focus();
  }

  function closeCookiePreferences() {
    var modal = document.getElementById('f5CookieModal');
    if (!modal) return;
    modal.hidden = true;
    document.documentElement.style.overflow = '';
    if (!hasValidCookieConsent()) showCookieBanner();
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  function saveSelectedPreferences() {
    return saveCookieConsent({
      source: 'cookie-preferences',
      preferences: document.getElementById('f5CookiePreferences') && document.getElementById('f5CookiePreferences').checked,
      analytics: document.getElementById('f5CookieAnalytics') && document.getElementById('f5CookieAnalytics').checked,
      marketing: document.getElementById('f5CookieMarketing') && document.getElementById('f5CookieMarketing').checked
    });
  }

  function trackF5Event(eventName, eventData) {
    var consent = getCookieConsent();
    if (!consent || !eventName) return;
    var payload = eventData || {};
    try {
      if (consent.analytics && typeof window.gtag === 'function') {
        window.gtag('event', eventName, payload);
      }
      if (consent.marketing && typeof window.fbq === 'function') {
        window.fbq('trackCustom', eventName, payload);
      }
    } catch (error) {}
  }

  function bindCookieEvents() {
    var accept = document.getElementById('f5CookieAcceptAll');
    var reject = document.getElementById('f5CookieRejectAll');
    var manage = document.getElementById('f5CookieManage');
    var save = document.getElementById('f5CookieSave');
    var modalAccept = document.getElementById('f5CookieModalAcceptAll');
    var modalReject = document.getElementById('f5CookieModalRejectAll');
    var close = document.getElementById('f5CookieClose');
    var footer = document.getElementById('f5CookieFooterPreferences');
    var modal = document.getElementById('f5CookieModal');

    if (accept) accept.addEventListener('click', acceptAllCookies);
    if (reject) reject.addEventListener('click', rejectOptionalCookies);
    if (manage) manage.addEventListener('click', openCookiePreferences);
    if (save) save.addEventListener('click', saveSelectedPreferences);
    if (modalAccept) modalAccept.addEventListener('click', acceptAllCookies);
    if (modalReject) modalReject.addEventListener('click', rejectOptionalCookies);
    if (close) close.addEventListener('click', closeCookiePreferences);
    if (footer) footer.addEventListener('click', openCookiePreferences);

    if (modal) {
      modal.addEventListener('click', function (event) {
        if (event.target === modal) closeCookiePreferences();
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      var openModal = document.getElementById('f5CookieModal');
      if (openModal && !openModal.hidden) closeCookiePreferences();
    });
  }

  function bindTrackingEvents() {
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function (link) {
      link.addEventListener('click', function () {
        trackF5Event('whatsapp_click', {
          href: link.href,
          text: link.textContent.trim().slice(0, 80)
        });
      });
    });

    document.querySelectorAll('.btn-primary, .nav-cta').forEach(function (button) {
      button.addEventListener('click', function () {
        if (button.href && button.href.indexOf('https://wa.me/') === 0) return;
        trackF5Event('cta_click', {
          href: button.href || '',
          text: button.textContent.trim().slice(0, 80)
        });
      });
    });

    document.querySelectorAll('.faq-trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        window.setTimeout(function () {
          if (trigger.getAttribute('aria-expanded') === 'true') {
            trackF5Event('faq_open', {
              question: trigger.textContent.trim().slice(0, 120)
            });
          }
        }, 0);
      });
    });
  }

  function initCookieConsent() {
    bindCookieEvents();
    bindTrackingEvents();
    var consent = getCookieConsent();
    if (consent) {
      hideCookieBanner();
      applyCookieConsent(consent);
    } else {
      showCookieBanner();
    }
  }

  window.COOKIE_CONSENT_VERSION = COOKIE_CONSENT_VERSION;
  window.GA_MEASUREMENT_ID = GA_MEASUREMENT_ID;
  window.META_PIXEL_ID = META_PIXEL_ID;
  window.getCookieConsent = getCookieConsent;
  window.hasValidCookieConsent = hasValidCookieConsent;
  window.saveCookieConsent = saveCookieConsent;
  window.acceptAllCookies = acceptAllCookies;
  window.rejectOptionalCookies = rejectOptionalCookies;
  window.applyCookieConsent = applyCookieConsent;
  window.loadScriptOnce = loadScriptOnce;
  window.loadPreferenceScripts = loadPreferenceScripts;
  window.loadAnalyticsScripts = loadAnalyticsScripts;
  window.loadMarketingScripts = loadMarketingScripts;
  window.openCookiePreferences = openCookiePreferences;
  window.closeCookiePreferences = closeCookiePreferences;
  window.trackF5Event = trackF5Event;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieConsent);
  } else {
    initCookieConsent();
  }
})();
