FROM resin/raspberrypi3-node
MAINTAINER noway0032 <noway0032@gmail.com>
ARG DEBIAN_FRONTEND=noninteractive
#RUN apt-get update -y --assume-yes \
#        && apt-get install -y --assume-yes apt-utils
RUN apt-get update -y \
	&& apt-get dist-upgrade -y \
	&& apt-get install -y --no-install-recommends paxctl \
	&& paxctl -mC `which node`
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
EXPOSE 4200
COPY . .
CMD ["npm", "start"]
