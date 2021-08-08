FROM node:9.11.1 

WORKDIR /app

COPY . /app

RUN npm install --silent

EXPOSE 5000

CMD ["nginx","app.py"]
