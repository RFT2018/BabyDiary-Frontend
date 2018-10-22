#!/bin/bash
echo -e "###\n###\t Script elindult, kezdeti tarhely \n###"
sudo df -h

if [ "$1" != "" ]; then
        PROJECT_NAME="$1"
else
        PROJECT_NAME="pabydiary-frontend"
fi
echo -e "###\n###\t A projekt neve: $PROJECT_NAME \n###"

sudo mkdir -p /docker-temp
sudo mkdir -p /docker-temp/$PROJECT_NAME
echo -e "###\n###\t Lonyvtarak letrehozva \n###"

sudo docker rmi -f noway0032/$PROJECT_NAME:latest
echo -e "###\n###\t A korabbi '$PROJECT_NAME' image torolve \n###"

sudo docker build -f jenkins/Dockerfile -t noway0032/$PROJECT_NAME:latest .
echo -e "###\n###\t Az uj '$PROJECT_NAME' image elkeszitve \n###"

sudo docker rm -f $PROJECT_NAME
echo -e "###\n###\t A korabbi '$PROJECT_NAME' repo torolve \n###"

sudo docker run -d --restart always --name $PROJECT_NAME -v /docker/$PROJECT_NAME:/usr/src/app/temp -p 80:4200 noway0032/$PROJECT_NAME:latest
echo -e "###\n###\t A uj '$PROJECT_NAME' repo elinditva \n###"

sudo docker rmi -f noway0032/$PROJECT_NAME:latest
echo -e "###\n###\t Az aktualis '$PROJECT_NAME' image torolve \n###"

sudo rm -rf *
echo -e "###\n###\t GIT mappa torolve, zaro tarhely \n###"
sudo df -h
