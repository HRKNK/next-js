FROM node:20.10.0-alpine
WORKDIR /home/app
# копирование из package.json (локальные файлы) в package.json (докер контейнер)
# ADD package.json package.json
COPY ./package.json ./
RUN npm install
# ADD . .
COPY ./ ./ 
ENV NODE_ENV production
RUN npm run build
# prune (npm фича отсекающая дэв зависимости)
RUN npm prune --production
# Default command
# CMD ['npm', 'start']
CMD npm start
# Port
EXPOSE 3000