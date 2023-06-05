FROM node:20 AS build
WORKDIR /app

COPY . ./
ENV PATH "$PATH:/app/node_modules/.bin"
RUN npm run build


CMD ["npm", "run", "start"]
