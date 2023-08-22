FROM node:alpine

COPY . /app
WORKDIR /app

RUN npm install 

# Build 
RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]