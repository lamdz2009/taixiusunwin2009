@echo off
title "Khoi dong Server va them BOT..."
echo "Khoi dong Server..."
start run.bat
timeout 50 /nobreak
echo "Dang them BOT"
start runbot.bat
timeout 20 /nobreak
echo "Dang them BOT CHAT"
start runchat.bat
echo "Hoan tat, an phim bat ky de thoat CMD"
echo "Tai khoan quan tri ADMIN: admin/123456'
echo "Web choi: localhost, admin: localhost/admin"
pause
exit