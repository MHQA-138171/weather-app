FROM node:lts-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY backend/ backend/
COPY client/ client/
COPY .env ./

USER node

CMD ["npm","start"]

EXPOSE 8000




