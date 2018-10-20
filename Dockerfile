FROM resin/raspberry-pi-node
MAINTAINER noway0032 <noway0032@gmail.com>
RUN mkdir -p /app
WORKDIR /app
EXPOSE 4200
CMD ["ng", "serve", "--host 0.0.0.0"]
