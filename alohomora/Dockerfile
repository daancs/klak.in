FROM node:16-stretch
WORKDIR /usr/app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
EXPOSE 8080
CMD ["npm", "start"]
