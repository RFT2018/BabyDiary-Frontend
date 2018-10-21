sudo docker rmi -f 'noway0032/babydiary-frontend:latest'
echo -e "---\n\t'noway0032/babydiary-frontend:latest' torles \n---"
sudo rm -rf /docker-babydiary-frontend-temp
sudo mkdir -p /docker-babydiary-frontend-temp
echo -e "---\n\tkönyvtar letrehozasa \n---"
sudo cd /docker-babydiary-frontend-temp
sudo docker build -f jenkins/Dockerfile -t 'noway0032/babydiary-frontend:latest' .
echo -e "---\n\t'noway0032/babydiary-frontend:latest' build lesz \n---"
sudo cp -r * /docker-babydiary-frontend-temp
sudo rm -rf *
echo -e "---\n\tadatmozgatas \n---"
sudo docker rm -f 'babydiary-frontend'
echo -e "---\n\t'babydiary-frontend' rorolve \n---"
sudo docker run -d --name babydiary-frontend -v /docker-babydiary-frontend-temp:/usr/src/app -p 80:4200 'noway0032/babydiary-frontend:latest'
echo -e "---\n\t'babydiary-frontend' run \n---"
sudo docker rmi -f 'noway0032/babydiary-frontend:latest'
echo -e "---\n\t'noway0032/babydiary-frontend:latest' torles \n---"
