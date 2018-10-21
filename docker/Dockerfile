FROM resin/raspberry-pi-node
MAINTAINER noway0032 <noway0032@gmail.com>
RUN npm install --save-dev @angular/cli@latest
RUN mkdir -p /app
WORKDIR /app
COPY package.json package.json
RUN npm install
EXPOSE 4200
VOLUME ["/app"]
CMD ["npm", "start"]
