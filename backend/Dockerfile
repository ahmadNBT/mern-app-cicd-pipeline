FROM node:24-alpine
WORKDIR /
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]