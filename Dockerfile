
FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm build

COPY . .

EXPOSE 5000
RUN npm run build
WORKDIR ./build
RUN npm i -g serve
 
 
# Finally runs the application
CMD [ "serve", "-s" ]
