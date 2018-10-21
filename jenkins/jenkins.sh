sudo docker rmi -f noway0032/babydiary-frontend:v2
sudo docker build -f jenkins/Dockerfile -t noway0032/babydiary-frontend:v2 .
sudo cp -r * /jenkins/babydiary-frontend-temp
sudo rm -rf *
sudo docker run -d --rm --name BabyDiary-Frontend -v /jenkins/babydiary-frontend-temp:/usr/src/app -p 80:4200 noway0032/babydiary-frontend:v2 npm start
sudo docker rmi -f noway0032/babydiary-frontend:v2
