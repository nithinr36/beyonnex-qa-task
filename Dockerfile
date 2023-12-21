FROM cypress/base:14.21.1

RUN mkdir /tests

WORKDIR /tests

COPY package*.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npx", "cypress", "run"]



