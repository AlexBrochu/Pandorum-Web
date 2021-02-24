FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

# Install python
RUN apk add --update \
  python \
  python-dev \
  py-pip \
  && rm -rf /var/cache/apk/*

RUN apk add --update build-base
# RUN apk add --update alpine-sdk && \
#   apk add libffi-dev openssl-dev && \
#   apk --no-cache --update add build-base
# RUN chmod -R a+rw /usr/local/lib/node_modules
# Globally node-sass from NPM
# RUN npm install --unsafe-perm -g node-sass
# RUN npm link node-sass
# RUN npm install -g sass

# RUN npm install
RUN npm ci --only=production

COPY . . 

CMD  [ "npm", "run", "start:prod" ]

EXPOSE 8080