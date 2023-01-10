FROM node:18-alpine

WORKDIR /front_app

# COPY package.json yarn.lock ./

COPY . .

RUN yarn install && yarn build

EXPOSE 5173
CMD ["yarn", "dev","--","--host"]