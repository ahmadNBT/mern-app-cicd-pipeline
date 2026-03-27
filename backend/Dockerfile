FROM node:20-alpine

WORKDIR /app
COPY app/package*.json ./
RUN npm ci
COPY app/ .
EXPOSE 5000

# start server
CMD ["node", "server.js"]