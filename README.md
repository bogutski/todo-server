## Boilerplate Express server for todo app

#### Install
`npm i` or `yarn`

#### Start on dev mode
`npm run dev`

#### Start on production mode
`npm start`

#### Mongo connection
Connected to Mongo Atlas https://www.mongodb.com/cloud/atlas. 
Feel free to use current Mongo DB account. 
Look at `.env` file. If you have your own Atlas account change it

`.env` file works only for dev mode.
For prod mode change environment variables on prod server (Heroku).

#### Composition
- Routing `./src/modules/core/routes.js`
- DB (Mongo) `./src/modules/core/db.js`
- CORS `./src/modules/core/cors.js`
- Logger (Morgan)`./src/modules/core/logger.js`
- Parse response (body-parser) `./src/modules/core/parseResponse.js`
- Ignore favicon `./src/modules/core/ignoreFavicon.js`

#### Modules
All modules should be placed in `./src/modules`

##### Info
Current common information like app name, version, current time, timezone.

##### Todo
CRUD operations for todo entity

### ESlint + Prettier
It works together well.

### Babel
We are using the Babel
