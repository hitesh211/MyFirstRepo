FROM node:12-alpine
WORKDIR /app

E
COPY . .
RUN yarn install --production
CMD ["node", "/app/src/server.js"]
