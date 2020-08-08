# Base Alpine Linux based image with OpenJDK JRE only
FROM openjdk:8-jre-alpine

LABEL name="reeder_api" version="0.0.1"

ENV TAR_NAME=reeder.jar
COPY ./target/reeder-0.0.1-SNAPSHOT.jar ${TAR_NAME}

EXPOSE 8080

CMD exec /usr/bin/java -jar -Dspring.profiles.active=test ${TAR_NAME}
