#!/bin/bash
set -e

echo "Buileando"
npm run build

echo "Contruyendo imagen"
docker build --platform linux/amd64 -t tobiasriccone/frontend-develio:latest .

echo "Pucheando imagen"
docker push tobiasriccone/frontend-develio:latest

echo "Proceso finalizado"