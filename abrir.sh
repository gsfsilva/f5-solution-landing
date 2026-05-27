#!/bin/bash
# Abre a landing page localmente no browser padrão
DIR="$(cd "$(dirname "$0")" && pwd)"
if command -v python3 &>/dev/null; then
  cd "$DIR"
  python3 -c "
import http.server, socketserver, threading, webbrowser, os, time
PORT = 3000
os.chdir('$DIR')
class H(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
    def do_GET(self):
        p = self.path.split('?')[0].rstrip('/')
        for c in [p, p+'/index.html', p+'.html']:
            if os.path.isfile(c.lstrip('/')): self.path=c; break
        super().do_GET()
with socketserver.TCPServer(('',PORT),H) as s:
    t=threading.Timer(0.3,lambda:webbrowser.open(f'http://localhost:{PORT}'))
    t.start()
    print(f'Aberto em http://localhost:{PORT} — Ctrl+C para parar')
    try: s.serve_forever()
    except KeyboardInterrupt: print('Encerrado.')
"
else
  open "$DIR/index.html"
fi
