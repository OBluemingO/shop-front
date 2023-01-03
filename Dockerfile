FROM node:14-alpine

WORKDIR /front_app

# COPY package.json yarn.lock ./

COPY . .

RUN yarn install && yarn build


EXPOSE 3000
CMD ["yarn", "start"]