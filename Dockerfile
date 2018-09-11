FROM node:8.11.4-alpine

COPY ./ /home/node/app
WORKDIR /home/node/app

ENV NODE_ENV staging
ENV PORT 8080

EXPOSE 8080

RUN yarn install --prod

CMD ["node", "app/server.js"]
