#!/usr/bin/env python3
"""
Servidor local — F5 Solution Landing Page
Uso: python3 serve-local.py
Acesso: http://localhost:3000
"""
import http.server, socketserver, os, sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Rotas limpas: /diretrizes-e-politicas/aviso-de-privacidade → arquivo index.html
        path = self.path.split("?")[0].rstrip("/")

        candidates = [
            path,
            path + "/index.html",
            path + ".html",
        ]

        for candidate in candidates:
            full = os.path.join(DIRECTORY, candidate.lstrip("/"))
            if os.path.isfile(full):
                self.path = candidate
                break

        return super().do_GET()

    def log_message(self, format, *args):
        print(f"  {args[0]} {args[1]}")

print(f"""
╔══════════════════════════════════════╗
║   F5 Solution — Servidor Local       ║
╠══════════════════════════════════════╣
║  URL:  http://localhost:{PORT}          ║
║  Dir:  {DIRECTORY[:30]}...
║  Ctrl+C para parar                   ║
╚══════════════════════════════════════╝
""")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n  Servidor encerrado.")
        sys.exit(0)
