# syntax=docker/dockerfile:1

# Utilisez l'image Node.js officielle comme base
FROM node:14

# Créez un répertoire pour l'application
WORKDIR /usr/src/app

# Copiez le fichier package.json et le fichier package-lock.json dans le répertoire de l'application
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez le code de l'application dans le répertoire de l'application
COPY . .

# Exposez le port 3000 pour le serveur
EXPOSE 3001

# Démarrez le serveur
CMD [ "npm", "start" ]
