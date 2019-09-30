@echo off

if not exist statscoinflip md statscoinflip
cd statscoinflip
if not exist kasa set kasa=100
:cladowanie
set/p kasa=<kasa
set/p ciloscgier=<ciloscgier
set/p ciloscwin=<ciloscwin
set/p ciloscwinkasy=<ciloscwinkasy
set/p cilosclose=<cilosclose
set/p cilosclosekasy=<cilosclosekasy
color C
if 100 GTR %kasa% set kasa=100
:coinflipmenu
title COINFLIP by Ludwik is crazy    $%kasa%
echo %kasa% > kasa
echo %ciloscgier% > ciloscgier
echo %ciloscwin% > ciloscwin
echo %ciloscwinkasy% > ciloscwinkasy
echo %cilosclose% > cilosclose
echo %cilosclosekasy% > cilosclosekasy
cls
echo  Coinflip.exe
echo.
echo  [Graj][1]
echo.
echo  [Stats][2]
echo.
echo  [Ustawienia][3]
echo.
echo  [Menu][4]
echo.
set/p "cho=>"
if %cho%==graj goto coinflip
if %cho%==stats goto coinflipstats
if %cho%==sett goto coinflipsett
if %cho%==menu goto cblad
if %cho%==1 goto coinflip
if %cho%==2 goto coinflipstats
if %cho%==3 goto coinflipsett
if %cho%==4 goto cblad
if not %cho%==graj goto coinflipmenu

:coinflip
title COINFLIP by Ludwik is crazy    $%kasa%
cls
echo 1. Dukat
echo 2. Platyna
set/p "cobstawienie=Co obstawiasz>"
cls
set/p "cbet=Wpisz wysokosc betu>"
if %cbet% GTR %kasa% echo Nie masz tyle pieniedzy! & pause>nul & goto coinflip
set /a kasa=%kasa%-%cbet%
:coinflipgra
set /a cwygrywajacy=%random% %%3
if %cwygrywajacy%==0 goto coinflipgra
set cwynik=2
if %cwygrywajacy%==%cobstawienie% set cwynik=1
if not %cwygrywajacy%==%cobstawienie% set cwynik=0
:coinflipend
cls
title COINFLIP by Ludwik is crazy    $%kasa%
set/a ciloscgier=%ciloscgier%+1
cls
if %cwynik%==1 set/a kasa=%kasa%+(%cbet%*2) & set/a cbetsee=%cbet% & set cwynik=Wygrana & set/a ciloscwin=%ciloscwin%+1 & set/a ciloscwinkasy=%ciloscwinkasy%+%cbet%
if %cwynik%==0 set/a cbetsee=%cbet%*(-1) & set cwynik=Przegrana & set/a cilosclosekasy=%cilosclosekasy%+%cbet% & set/a cilosclose=%cilosclose%+1
cls
echo     PODSUMOWANIE
echo =========================
echo     Wynik:         %cwynik%
echo     W tej rundzie: %cbetsee%
echo     Twoj bilans:   %kasa%
pause
goto coinflipmenu
:coinflipstats
cls
echo          STATYSTYKI
echo ==============================
echo Ilosc kasy=%kasa%
echo Ilosc gier=%ciloscgier%
echo.
echo Ilosc wygranych=%ciloscwin%
echo Ilosc wygranej kasy=%ciloscwinkasy%
echo.
echo Ilosc przegranych=%cilosclose%
echo Ilosc przegranej kasy=%cilosclosekasy%
echo.
pause
goto coinflipmenu

:coinflipsett
echo W budowie.
pause
goto coinflipmenu

:cblad
echo Wystapil cytrynowy blad!
pause 
exit