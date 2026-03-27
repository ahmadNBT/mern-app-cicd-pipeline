FROM node:20-alpine
WORKDIR /
COPY package*.json ./
RUN npm cache clean --force && npm install
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]
