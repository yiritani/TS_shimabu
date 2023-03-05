FROM node:17-alpine
WORKDIR /app
COPY package.json yarn.lock ./
COPY . .

RUN yarn install && yarn build
EXPOSE 3000

CMD ["yarn", "start"]
