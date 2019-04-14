# Defining Variables...

LOCA=$PWD

timestamp() {

  date +"%T"

}

# Real Code HERE

echo "Locating..."

echo "I think the current location is $LOCA."

echo "Staging Files..."

git add *

echo "Committing Changes..."

git commit -m "Automatic commit flow at $(timestamp)"
echo "Pushing commits......"

git push

echo "DONE"

return 0
