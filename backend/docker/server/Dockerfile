# Base Alpine Linux based image with OpenJDK JRE only
FROM openjdk:8-jre-alpine

COPY entrypoint.sh /usr/local/bin
RUN chmod +x /usr/local/bin/entrypoint.sh

RUN adduser user --disabled-password
USER user

CMD ["entrypoint.sh"]
