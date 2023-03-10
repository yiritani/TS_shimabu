FROM node:17-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile
COPY . .
ENV NODE_ENV production
CMD ["yarn", "build"]
CMD ["yarn", "start"]
