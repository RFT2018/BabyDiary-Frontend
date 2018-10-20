FROM resin/raspberry-pi-node
MAINTAINER noway0032 <noway0032@gmail.com>
RUN mkdir -p /app
WORKDIR /app
RUN npm install -g @angular/cli
RUN ng new BabyDiary-Frontend
WORKDIR /app/BabyDiary-Frontend
COPY . .
EXPOSE 4200
CMD ["ng", "serve", "--open"]
