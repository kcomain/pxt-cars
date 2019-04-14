$progID = 1235
function old(){
# Defining Variables...
$LOCA = $PWD
# Real Code HERE
echo "Locating..."
echo "I think the current location is $LOCA."
echo "Staging Files..."
git add *
echo "Committing Changes..."
$time = Get-Date –format 'yyyyMMdd_hhmmss’
git commit -m "Automatic commit flow at $time"
echo "Pushing commits......"
git push
echo "DONE"
return 0
}

#defining variables
$LOCA=$PWD
#realcode
$randinit=Get-Random -Minimum 0 -Maximum 10
Write-Progress -Activity "Locating current working directory..." -Id $progID -PercentComplete 25 -SecondsRemaining 100
Write-Progress -Activity "Get Directory, $LOCA" -Id $progID -PercentComplete $randinit -SecondsRemaining 100
$rand=Get-Random -Minimum ($randinit+1) -Maximum ($randinit+10)
Write-Progress -Activity "Staging files..." -Id $progID -PercentComplete 40 -SecondsRemaining 100
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
Write-Progress -Activity "Staging files..." -Id $progID -PercentComplete 50 -SecondsRemaining 100
git add *
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
Write-Progress -Activity "Committing..." -Id $progID -PercentComplete $rand -SecondsRemaining 100
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Committing..." -Id $progID -PercentComplete $rand -SecondsRemaining 100
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Committing..." -Id $progID -PercentComplete $rand -SecondsRemaining 100
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
$time=Get-Date -Format 'yyyyMMdd_hhmmss'
git commit -m "Automatic commit flow at $time"
Write-Progress -Activity "Committing..." -Id $progID -PercentComplete $rand -SecondsRemaining 100
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Committing..." -Id $progID -PercentComplete $rand -SecondsRemaining 100
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Committing..." -Id $progID -PercentComplete $rand -SecondsRemaining 100
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Committing..." -Id $progID -PercentComplete $rand -SecondsRemaining 100
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand -SecondsRemaining 100
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand -SecondsRemaining 100
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand -SecondsRemaining 100
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand -SecondsRemaining 100
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand -SecondsRemaining 100
$randtime=Get-Random -Minimum 100 -Maximum 1000
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
