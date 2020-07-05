#!/bin/sh
JAR_FILE=reeder-0.0.1-SNAPSHOT.jar

# Wait for the builder docker to clean the project
sleep 5

COUNTER=1
while [ ! -f "${JAR_FILE}" ];
do
    sleep 3
    echo "Checking file ${JAR_FILE} (${COUNTER})";
    COUNTER=$((COUNTER+1))
done

echo "Running ${JAR_FILE}";
/usr/bin/java -jar -Dspring.profiles.active=test "${JAR_FILE}"
