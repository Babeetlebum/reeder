# Base Alpine Linux based image with OpenJDK JRE only
FROM openjdk:8-jre-alpine

RUN mkdir -p /app
WORKDIR /app

RUN adduser user --disabled-password
USER user

# specify default command
# CMD ["/usr/bin/java", "-jar", "-Dspring.profiles.active=test", "/app/reeder-0.1.0.jar"]
