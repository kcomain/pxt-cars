@echo off
echo Welcome to this automatic github committer.
echo Written by Kenny Cheung (Update on 2019/04/15)
echo Proteched by CC BY-SA 4.0
echo.
echo getting current working directory...
ping localhost -n 2 > NUL
echo current directory is %CD%
echo.
echo verifying this is a git repo...
if EXIST .git (echo Git config file sits in %gitconfig%) ELSE (goto notgitrepo)
echo Using Default setting
echo Staging Files.......
git add *
echo Done Staging
echo Committing changes... You may need to enter a password for signing commits.
@echo off
For /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c%%a%%b)
For /f "tokens=1-2 delims=/:" %%a in ("%TIME%") do (set mytime=%%a:%%b)
echo Current Time is%mydate%_%mytime%
echo Ignore errors.
echo -----Setting message-----
echo Automatic git commit from local at %mydate%_%mytime%
echo -------Committing-------
git commit -m "Automatic git commit from local at %mydate%_%mytime%"
echo -----Done committing----
echo.
echo Pushing commits...
git push
echo git push done.
goto endS

REM Function Areas
:endS
echo Properly exiting batch script...
echo Done.
goto end
:notgitrepo
echo Sorry,but this is not a git repo.
pause
goto end


:end