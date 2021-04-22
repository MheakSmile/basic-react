FROM node:14.15

RUN mkdir /usr/src/app
WORKDIR /usr/src/app/basic-react

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app/basic-react
RUN npm install
RUN npm install react-scripts -g

EXPOSE 3000

CMD [ "npm", "start" ]

#docker  run -it --rm -d -p 3000:3000  mheak/react-numerical:lastest