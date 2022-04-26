FROM node:16 as build

WORKDIR /app

RUN ls 

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN npm install

COPY . .

RUN npm run build

FROM bitnami/nginx:latest as final

WORKDIR /app

COPY --from=build /app/web-build /app

