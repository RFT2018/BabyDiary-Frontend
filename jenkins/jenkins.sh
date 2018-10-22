#!/bin/bash

if [ "$1" != "" ]; then
        PROJECT_NAME="$1"
else
        PROJECT_NAME="pabydiary-frontend"
fi

sudo df -h
sudo mkdir -p /docker-temp
sudo mkdir -p /docker-temp/$PROJECT_NAME
echo -e "---\t A projekt neve: $PROJECT_NAME \t---\n"

sudo docker rmi -f noway0032/$PROJECT_NAME:latest
echo -e "---\t A korabbi '$PROJECT_NAME' image torolve! \t---\n"

sudo docker build -f jenkins/Dockerfile -t noway0032/$PROJECT_NAME:latest .
echo -e "---\t Az uj '$PROJECT_NAME' image elkiszitve \t---\n"

sudo docker rm -f $PROJECT_NAME
echo -e "---\t A korabbi '$PROJECT_NAME' repo torolve! \t---\n"

sudo docker run -d --restart always --live-restore --name $PROJECT_NAME -v /docker/$PROJECT_NAME:/usr/src/app/temp -p 80:4200 noway0032/$PROJECT_NAME:latest
echo -e "---\t A uj '$PROJECT_NAME' repo elinditva! \t---\n"

sudo rm -rf *
sudo df -h
