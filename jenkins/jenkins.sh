#!/usr/bin/env bash
!/bin/bash

if [ "$1" != "" ]; then
        PROJECT_NAME="$1"
else
        PROJECT_NAME="pabydiary-frontend"
fi
if [ "$2" != "" ]; then
        PARAM="$2"
else
        PARAM=""
fi
sudo df -h

echo -e "---\t A projekt neve: $PROJECT_NAME \t---\n"

sudo docker rmi -f noway0032/$PROJECT_NAME:latest
sudo docker rm -f repo-$PROJECT_NAME
echo -e "---\t A korabbi '$PROJECT_NAME' project torolve! \t---\n"

#sudo rm -rf /docker-$PROJECT_NAME-temp
#sudo mkdir -p /docker-$PROJECT_NAME-temp
#echo -e "---\t A '/docker-$PROJECT_NAME-temp' konyvtar elkeszult \t---\n"

sudo docker build -f jenkins/Dockerfile -t noway0032/$PROJECT_NAME:latest .
echo -e "---\t A '/docker-$PROJECT_NAME-temp' konyvtar elkeszult \t---\n"

#sudo cp -r * /docker-$PROJECT_NAME-temp
sudo docker run -it --name repo-$PROJECT_NAME -v /docker-$PROJECT_NAME-temp:/usr/src/app -p 80:4200 noway0032/$PROJECT_NAME:latest $PARAM

#sudo docker rmi -f noway0032/$PROJECT_NAME:latest
sudo rm -rf *
sudo df -h
