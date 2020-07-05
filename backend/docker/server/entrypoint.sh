#!/bin/sh
JAR_FILE=reeder-0.0.1-SNAPSHOT.jar
LOCK_FILE=/lock/.lock

# Wait for the builder container to create the lock
sleep 5

COUNTER=1
while [ -f "${LOCK_FILE}" ];
do
    sleep 3
    echo "Waiting for lock to be freed (${COUNTER})";
    COUNTER=$((COUNTER+1))
done

echo "Running ${JAR_FILE}";
/usr/bin/java -jar -Dspring.profiles.active=test "${JAR_FILE}"
