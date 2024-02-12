FROM node:19

RUN mkdir -p /usr/src/app  

WORKDIR /usr/src/

COPY package*.json ./

RUN npm install

COPY . ./

WORKDIR /usr/src/

EXPOSE 3000

CMD ["npm", "run", "dev"]