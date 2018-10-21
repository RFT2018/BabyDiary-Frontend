FROM resin/raspberry-pi-node
MAINTAINER noway0032 <noway0032@gmail.com>
WORKDIR /usr/src/app
EXPOSE 4200
VOLUME ["/app"]
COPY package.json package.json
RUN npm install --save-dev @angular/cli@latest && npm install
CMD ["npm", "start"]
