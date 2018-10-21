FROM resin/raspberry-pi-node
MAINTAINER noway0032 <noway0032@gmail.com>
RUN npm install -y -g @angular/cli
RUN npm install --save-dev @angular-devkit/build-angular
RUN mkdir -p /app
RUN mkdir -p /app-temp
WORKDIR /app
RUN ng new BabyDiary-Frontend --directory ./ --routing --style=sass
EXPOSE 4200
VOLUME ["/app", "/app-temp"]
CMD ["ng", "serve", "--host 0.0.0.0"]
