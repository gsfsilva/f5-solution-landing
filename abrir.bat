@echo off
REM Abre a landing page localmente no browser padrao
cd /d "%~dp0"
python3 -c "import http.server,socketserver,threading,webbrowser,os; os.chdir('%~dp0'); PORT=3000; H=type('H',(http.server.SimpleHTTPRequestHandler,),{'log_message':lambda*a:None}); s=socketserver.TCPServer(('',PORT),H); threading.Timer(0.4,lambda:webbrowser.open(f'http://localhost:{PORT}')).start(); print(f'http://localhost:{PORT} -- Ctrl+C para parar'); s.serve_forever()" 2>nul || start "" "%~dp0index.html"
