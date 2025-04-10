FROM node:20

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g bun
COPY . .


EXPOSE 3000

CMD ["npm", "run", "start"]

