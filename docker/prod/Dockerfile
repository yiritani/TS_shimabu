FROM node:17-alpine
WORKDIR /usr/app
COPY ./src /usr/app/
RUN yarn install && yarn build
EXPOSE 3000

CMD ["yarn", "start"]
