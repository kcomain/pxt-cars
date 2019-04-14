$progID = 91451
#defining variables
$LOCA=$PWD
#realcode
Write-Host -BackgroundColor yellow -ForegroundColor green -Object "..........................................."
Write-Host -BackgroundColor yellow -ForegroundColor green -Object ".██..██...██████...██......██.......██████."
Write-Host -BackgroundColor yellow -ForegroundColor green -Object ".██..██...██.......██......██.......██..██."
Write-Host -BackgroundColor yellow -ForegroundColor green -Object ".██████...██████...██......██.......██..██."
Write-Host -BackgroundColor yellow -ForegroundColor green -Object ".██..██...██.......██......██.......██..██."
Write-Host -BackgroundColor yellow -ForegroundColor green -Object ".██..██...██████...█████...██████...██████."
Write-Host -BackgroundColor yellow -ForegroundColor green -Object "..........................................."

$randinit=Get-Random -Minimum 0 -Maximum 10
Write-Progress -Activity "Locating current working directory..." -Id $progID -PercentComplete 25 
Write-Progress -Activity "Get Directory, $LOCA" -Id $progID -PercentComplete $randinit 
$rand=Get-Random -Minimum ($randinit+1) -Maximum ($randinit+10)
Write-Progress -Activity "Staging files..." -Id $progID -PercentComplete 40 
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
Write-Progress -Activity "Staging files..." -Id $progID -PercentComplete 50 
git add *
$randtime=Get-Random -Minimum 100 -Maximum 500 -Completed
Start-Sleep -Milliseconds $randtime
Write-Progress -Activity "Committing..." -Id $progID -PercentComplete $rand -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Committing..." -Id $progID -PercentComplete $rand -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Committing..." -Id $progID -PercentComplete $rand -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$time=Get-Date -Format 'yyyyMMdd_hhmmss'
git commit -m "Automatic commit flow at $time"
Write-Progress -Activity "Committing..." -Id $progID -PercentComplete $rand -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Committing..." -Id $progID -PercentComplete $rand -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Committing..." -Id $progID -PercentComplete $rand -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Committing..." -Id $progID -PercentComplete $rand -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500 -erroraction 'silentlycontinue'
Start-Sleep -Milliseconds $randtime -erroraction 'silentlycontinue'
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10) -erroraction 'silentlycontinue'
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand  -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand  -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand  -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand  -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10) -erroraction 'silentlycontinue'
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand  -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand  -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand  -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand  -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10) -erroraction 'silentlycontinue'
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand  -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand  -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand  -erroraction 'silentlycontinue'
git push
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand  -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Progress -Activity "Pushing..." -Id $progID -PercentComplete $rand  -erroraction 'silentlycontinue'
$randtime=Get-Random -Minimum 100 -Maximum 500
Start-Sleep -Milliseconds $randtime
$rand=Get-Random -Minimum ($rand+1) -Maximum ($rand+10)
Write-Host -BackgroundColor black -ForegroundColor green -Object "....................................."
Write-Host -BackgroundColor black -ForegroundColor green -Object ".████.....██████...████..██...██████."
Write-Host -BackgroundColor black -ForegroundColor green -Object ".██..██...██..██...██.██.██...██....."
Write-Host -BackgroundColor black -ForegroundColor green -Object ".██..██...██..██...██..█.██...██████."
Write-Host -BackgroundColor black -ForegroundColor green -Object ".██..██...██..██...██...███...██....."
Write-Host -BackgroundColor black -ForegroundColor green -Object ".████.....██████...██....██...██████."
Write-Host -BackgroundColor black -ForegroundColor green -Object "....................................."
echo "All Done."
return 