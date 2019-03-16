@echo off
title Binario 101
color 0F
set /p bstatgry=<bstatgry
set /a bstatgry=%bstatgry%
set /p bstatdobrze=<bstatdobrze
set /a bstatdobrze=%bstatdobrze%
set /p bstatzle=<bstatzle
set /a bstatzle=%bstatzle%
if exist bstatgry goto binstart
if exist bstatdobrze goto binstart
if exist bstatzle goto binstart
set /a bstatgry=0
set /a bstatdobrze=0
set /a bstatzle=0
:binstart
echo %bstatgry% > bstatgry
echo %bstatdobrze% > bstatdobrze
echo %bstatzle% > bstatzle
cls
echo ==           BINARIO 101                           BINARIO 101               ==
echo ==                            BINARIO 101                                    ==
echo ===============================================================================
echo ===============================================================================
echo ==                                PELNY  TRYB                                ==
echo ==                                                                           ==
echo ==                                  [bfull]                                  ==
echo ==               JAK  GRAC?                                                  ==
echo ==                                                                           ==
echo ==                 [bhow]                                                    ==
echo ===============================================================================
echo ===============================================================================
echo ==                                STATYSTYKI                                 ==
echo ==                                                                           ==
echo ==                                 [bstat]                                   ==
echo ==                                                                           ==
echo ==                                                                           ==
echo ==                                                                           ==
echo ==                                                                           ==
echo ==                                                                           ==
echo ==                                                                           ==
echo ===============================================================================
echo ===============================================================================
echo ==                                                                           ==
set/p "cho=>"
if %cho%==bfull goto bfull
if %cho%==bhow goto bhow
if %cho%==bstat goto bstat
if %cho%==menu1 goto menu1
if %cho%==bsave goto bsave
if not %cho%==bfull goto binstart
:bfull
color 0F
cls
set /a binsuma=0
set /a binjeden=1
set /a bin1=%random% %%2
set /a bin2=%random% %%2
set /a bin4=%random% %%2
set /a bin8=%random% %%2
set /a bin16=%random% %%2
set /a bin32=%random% %%2
set /a bin64=%random% %%2
set /a bin128=%random% %%2
set /a bin256=%random% %%2
set /a bin512=%random% %%2
if %bin1%==%binjeden% set /a binsuma=%binsuma%+1
if %bin2%==%binjeden% set /a binsuma=%binsuma%+2
if %bin4%==%binjeden% set /a binsuma=%binsuma%+4
if %bin8%==%binjeden% set /a binsuma=%binsuma%+8
if %bin16%==%binjeden% set /a binsuma=%binsuma%+16
if %bin32%==%binjeden% set /a binsuma=%binsuma%+32
if %bin64%==%binjeden% set /a binsuma=%binsuma%+64
if %bin128%==%binjeden% set /a binsuma=%binsuma%+128
if %bin256%==%binjeden% set /a binsuma=%binsuma%+256
if %bin512%==%binjeden% set /a binsuma=%binsuma%+512
echo ==                                                                           ==
echo ==                                                                           ==
echo ===============================================================================
echo ===============================================================================
echo ==                              LICZBA BINARNA                               ==
echo ==                                                                           ==
echo ==                                                                           ==
echo ==                                %bin512%%bin256%%bin128%%bin64%%bin32%%bin16%%bin8%%bin4%%bin2%%bin1%                                 ==
echo ==                                                                           ==
echo ==                                                                           ==
echo ==                                                                           ==
echo ===============================================================================
echo ===============================================================================
echo ==                             LICZBA DECYMALNA                              ==
echo ==                                                                           ==
echo ==                                                                           ==
echo ==                                                                           ==
echo ==                                   ???                                     ==
echo ==                                                                           ==
echo ==                                   %binsuma%                                     ==
echo ==                                                                           ==
echo ===============================================================================
echo ===============================================================================
echo ==                                                                           ==
set/p binwyb=Wpisz liczbe:
if %binwyb%==bend goto binstart
if %binwyb%==binstart goto binstart
if %binwyb%==bnext goto bfull
if %binwyb%==%binsuma% goto binyes
if not %binwyb%==%binsuma% goto binno

:binyes
set /a bstatdobrze=%bstatdobrze%+1
set /a bstatgry=%bstatgry%+1
color A
echo Wpisales prawidlowa liczbe! Gratulacje!
pause>nul
goto bfull

:binno
set /a bstatgry=%bstatgry%+1
set /a bstatzle=%bstatzle%+1
color C
echo Wpisales zla liczbe! Buu!
pause>nul
goto bfull

:bhow
cls
echo ==           BINARIO 101                           BINARIO 101               ==
echo ==                            BINARIO 101                                    ==
echo ===============================================================================
echo ===============================================================================
echo == Celem gry jest prawdilowe przeliczanie liczb binarnych na decymalne       ==
echo == i na odwrot.W pelnym trybie gry mozesz trafic oba warianty.               ==
echo == Gdy trafisz przeliczanie na liczbe decymalna wpisujesz tylko twoj wynik   ==
echo == Gdy trafisz przeliczanie na liczbe binarna wpisujesz pojedynczo od prawej ==
echo == liczby 1 i 0,czyli jezeli bedziesz chcial wpisac liczbe 101100 najpierw   ==
echo == wpiszesz 0 i klikasz enter,0 i enter,1 i enter i tak dalej.               ==
echo ===============================================================================
echo ===============================================================================
echo == Jezeli podczas wpisania liczby binarnej zrobisz blad mozesz wpisac "br"   ==
echo == Zresetuje ona pole wpisywania wyniku i od nowa na tej samej liczbie       ==
echo == bedziesz mogl wpisac swoj wynik. Gdy wyswietli Ci sie zielony kolor       ==
echo == czcionki to oznacza ze wpisales prawdilowy wynik. Gdy pojawi sie czerwony ==
echo == oznacza ze wpisales zla liczbe. Maksymalna mozliwa liczba to 1023. Jezeli ==
echo == wpiszesz zly wynik losowana jest kolejna liczba. Podczas gry mozna wpisac ==
echo == komende "bnext" ktora wylosuje nam nowa liczbe. Podczas gry mozna         ==
echo == wpisac "bend" lub "binstart" komendy ktore powoduja przeniesienie do menu.==
echo == Aby zapisac statystyki wpisz "bsave" w menu!                 Powodzenia!    ==
echo ===============================================================================
echo ===============================================================================
echo ==                    Kliknij enter aby wrocic do menu                       ==
pause>nul
goto binstart

:bstat
cls
echo == 
echo ==  
echo == 
echo ==      
echo ==             ILOSC GIER    - %bstatgry%
echo ==             WYGRANE GRY   - %bstatdobrze% 
echo ==             PRZEGRANE GRY - %bstatzle%
echo == 
echo == 
echo == 
echo == 
echo == 
echo == 
echo == 
echo == 
echo == 
echo == 
echo == 
echo == 
echo == 
echo == 
echo == 
echo == 
echo == 
echo == 
pause>nul
goto binstart
