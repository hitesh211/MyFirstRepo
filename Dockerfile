FROM node:16.6.0

WORKDIR /app

COPY . /app

RUN npm install --silent

EXPOSE 5000

CMD ["nginx","app.js"]
