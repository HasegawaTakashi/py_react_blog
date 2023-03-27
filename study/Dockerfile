FROM node:14.15.0-alpine

WORKDIR /app

RUN npm init -y

COPY package.json /app/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
