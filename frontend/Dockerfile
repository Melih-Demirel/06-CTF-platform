# base image
FROM node:14.0.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install @vue/cli@3.7.0 -g
RUN npm install nodemon

# start app
CMD ["nodemon", "--ext", "js,css,vue", "--watch src", "--exec", "npm", "run", "serve"]