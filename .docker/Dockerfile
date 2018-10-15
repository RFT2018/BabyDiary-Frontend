# Stage 1
FROM node:4.6.1-slim
MAINTAINER noway0032 <noway0032@gmail.com>
RUN apt-get install -y git
RUN mkdir -p /app
WORKDIR /app
CMD ["ng", "new", "BabyDiary-Frontend"]
CMD ["git", "clone", "https://github.com/RFT2018/BabyDiary-Frontend.git", "temp"]
COPY /temp/. /app/BabyDiary-Frontend
WORKDIR /app/BabyDiary-Frontend
EXPOSE 4200
CMD ["ng", "serve", "--open"]
