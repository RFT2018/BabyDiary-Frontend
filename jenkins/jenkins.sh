sudo docker rmi -f noway0032/babydiary-frontend:v2
sudo rm -rf /docker-babydiary-frontend-temp
sudo mkdir -p /docker-babydiary-frontend-temp
sudo docker build -f jenkins/Dockerfile -t noway0032/babydiary-frontend:v2 .
sudo cp -r * /docker-babydiary-frontend-temp
sudo rm -rf *
sudo docker rm -f BabyDiary-Frontend
sudo docker run -d --rm --name BabyDiary-Frontend -v /docker-babydiary-frontend-temp:/usr/src/app -p 80:4200 noway0032/babydiary-frontend:v2 npm start
sudo docker rmi -f noway0032/babydiary-frontend:v2
