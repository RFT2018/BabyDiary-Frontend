FROM resin/raspberrypi3-node
MAINTAINER noway0032 <noway0032@gmail.com>
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update -y --assume-yes \
        && apt-get install -y --assume-yes apt-utils
#RUN npm install -y -g @angular/cli
#RUN npm install --save-dev @angular/cli@latest
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
EXPOSE 4200
VOLUME ["/usr/src/app"]
COPY . .
CMD ["npm", "start"]
