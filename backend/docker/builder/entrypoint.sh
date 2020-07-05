#!/bin/sh
LOCK_FILE=/lock/.lock
touch ${LOCK_FILE}

mvn clean package

rm ${LOCK_FILE}
