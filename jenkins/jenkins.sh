sudo docker rmi -f 'noway0032/babydiary-frontend:latest'
sudo rm -rf /docker-babydiary-frontend-temp
sudo mkdir -p /docker-babydiary-frontend-temp
sudo cd /docker-babydiary-frontend-temp
sudo docker build -f jenkins/Dockerfile -t 'noway0032/babydiary-frontend:latest' .
sudo cp -r * /docker-babydiary-frontend-temp
sudo rm -rf *
sudo docker rm -f 'babydiary-frontend'
sudo docker run -d --name babydiary-frontend -v /docker-babydiary-frontend-temp:/usr/src/app -p 80:4200 'noway0032/babydiary-frontend:latest'
