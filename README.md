# Welcome to Flights Service

## Project Setup 
  - clonethe project on your local
  - Execute `npm install` on the same path as of your root directory of the downloaded project
  - Create a `.env` file in the root directory and add the following environment variable
     - `PORT=3000`
  - Inside the `src/config` folder create a new file `config.json` and then add the following 
  piece of json

``````  
{
  "development": {
    "username": "<YOUR-DB-NAME>",
    "password": "<YOUR-DB-PASSWORD>",
    "database": "Flights_Search_DB_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
   }
}

``````
