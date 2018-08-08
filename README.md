# Genie

Genie is a social web application designed to help users easily find volunteering events around the world. After creating an account, users can create new events and join events by clicking on markers on a Google Map.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

```
Node.js and NPM
MongoDB
```

### Installing and Running 

You will need three terminals to run this application.

Open a terminal and follow these commands:

```
Clone this repository into a directory
mkdir mongo-data 
```

Now that we have the project we need to start MongoDB and set the dbpath. In my case, I run:

```
cd "C:\Program Files\MongoDB\Server\3.6\bin"
./mongod --dbpath={path of mongo-data directory} (no curly braces)
```

MongoDB should now be running.

To start the backend component, run these commands in a new terminal:

```
cd Genie
npm install
cd back-end
npm install
node server.js
```

To start the frontend component, run these commands in a new terminal:
```
cd Genie
cd front-end
npm install
npm start
```

You should now be able to use the web app on your computer.

## Built With

* React/Redux
* Node.js/Express
* MongoDB
* Bootstrap

## Authors

* **William Truong** - [Cusengan](https://github.com/cusengan)
* **Jeet Sigh** - [singhgagan2697](https://github.com/singhgagan2697)
* **Nhi Luong** - [kynhi](https://github.com/kynhi)
