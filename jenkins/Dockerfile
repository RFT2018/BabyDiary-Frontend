FROM resin/raspberry-pi-node
MAINTAINER noway0032 <noway0032@gmail.com>
RUN npm install -y -g @angular/cli
RUN npm install --save-dev @angular/cli@latest
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install
EXPOSE 4200
VOLUME ["/app"]
CMD ["npm", "start"]
