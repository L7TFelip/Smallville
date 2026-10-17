@echo off
title Smallville Fan Page - Servidor Local
echo ===================================================================
echo           SMALLVILLE FAN PAGE (ANOS 2000) - SERVIDOR LOCAL
echo ===================================================================
echo.
echo Iniciando o servidor e abrindo seu navegador em http://localhost:8000 ...
echo.
timeout /t 2 /nobreak >nul
start http://localhost:8000
python -m http.server 8000
pause
