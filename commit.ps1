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