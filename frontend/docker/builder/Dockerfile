FROM node:10.18.0-alpine3.11

LABEL name="builder" version="0.0.1"

# Install utils
RUN apk add --no-cache bash git chromium

# Create default user
# ARG USER_ID
# ARG GROUP_ID
# RUN addgroup docker
# RUN adduser -u ${USER_ID} -G docker user --disabled-password

# RUN apk add --no-cache curl gnupg libstdc++
# RUN apt-get update && apt-get install -y \
#     apt-utils \
#     curl \
#     git \
#     wget \
#     rsync \
#     && apt-get clean;

# Install yarn
# ENV YARN_VERSION=1.18.0
# RUN for server in ipv4.pool.sks-keyservers.net keyserver.pgp.com ha.pool.sks-keyservers.net; do \
#     gpg --keyserver $server --recv-keys \
#       6A010C5166006599AA17F08146C2130DFD2497F5 && break; \
#   done && \
# RUN curl -sfSL -O https://github.com/yarnpkg/yarn/releases/download/v${YARN_VERSION}/yarn-v${YARN_VERSION}.tar.gz \
#              -O https://github.com/yarnpkg/yarn/releases/download/v${YARN_VERSION}/yarn-v${YARN_VERSION}.tar.gz.asc && \
#   gpg --batch --verify yarn-v${YARN_VERSION}.tar.gz.asc yarn-v${YARN_VERSION}.tar.gz && \
#   mkdir /usr/local/share/yarn && \
#   tar -xf yarn-v${YARN_VERSION}.tar.gz -C /usr/local/share/yarn --strip 1 && \
#   ln -s /usr/local/share/yarn/bin/yarn /usr/local/bin/ && \
#   ln -s /usr/local/share/yarn/bin/yarnpkg /usr/local/bin/ && \
#   rm ${YARN_VERSION}.tar.gz*

# Install angular-cli
#ARG NG_CLI_VERSION=8.3.21
#RUN yarn global add --prefix /usr/local @angular/cli@${NG_CLI_VERSION}

ARG USER_NAME=node
USER ${USER_NAME}

# Add some bash aliases for comfort
COPY .bash_aliases /home/${USER_NAME}/
RUN echo 'source ~/.bash_aliases' >> ~/.bashrc && source ~/.bashrc

WORKDIR /app

ENTRYPOINT ["tail", "-f", "/dev/null"]
