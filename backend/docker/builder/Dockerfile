FROM openjdk:8-jdk-alpine

COPY entrypoint.sh /usr/local/bin
RUN chmod +x /usr/local/bin/entrypoint.sh

# ----
# Install Maven
RUN apk add --no-cache curl tar bash
ARG MAVEN_VERSION=3.6.3
RUN mkdir -p /maven && \
curl -fsSL http://apache.osuosl.org/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.tar.gz | tar -xzC /maven --strip-components=1 && \
ln -s /maven/bin/mvn /usr/bin/mvn
ENV M2_HOME /maven
# speed up Maven JVM a bit
ENV MAVEN_OPTS="-XX:+TieredCompilation -XX:TieredStopAtLevel=1"

RUN mkdir -p /app /lock
WORKDIR /app

RUN adduser user --disabled-password
USER user

ENTRYPOINT ["entrypoint.sh"]
