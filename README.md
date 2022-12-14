# Task-app

>A simple task-app-api created in nodejs and hosted in heroku.The api can be tested using postman.


## Live Preview

Check this [***app***](https://api-taskappp.herokuapp.com/) live preview on heroku.

## Technologies

Technologies I used to develop this App.

|Technologies|Purpose|
|---|---|
|[***Node.js***](https://nodejs.org/)|App BackEnd.|
|[***MongoDB***](https://www.mongodb.com/)|Local DataBase set.|
|[***MongoDB Atlas***](https://www.mongodb.com/atlas/database)|Multicloud DataBase remote set, to link with Heroku deployment.|
|[***Heroku***](heroku.com)|Deploy App.|
|[***Express***](https://expressjs.com/)|Create Web Server.|
|[***Mongoose***](https://mongoosejs.com/)|Execute DB Operations.|
|[***SendInBlue***](https://www.sendinblue.com/)|For sending emails to user (only sends when creating an user or deleting an user).|
|[***BCryptJS***](https://www.npmjs.com/package/bcryptjs)|For hashing and authenticating user password.|
|[***JSONWebToken***](https://www.npmjs.com/package/jsonwebtoken)|For generating user session authentication token.|
|[***Validator***](https://www.npmjs.com/package/validator)|For validating user emails.|
|[***Multer***](https://www.npmjs.com/package/multer)|Upload files via API Endpoints. In this case, user avatar icon image.|
|[***Sharp***](https://www.npmjs.com/package/sharp)|Convert large images to smaller formats.|
|[***Env-cmd***](https://www.npmjs.com/package/env-cmd)|Deal with environment variables.|
|[***Nodemon***](https://www.npmjs.com/package/nodemon)|Restart local server, for local development only.|


## Local Development

> BackEnd only
### Installation

This app is built in [***Node.js***](https://nodejs.org/en/) and uses [***MongoDB***](https://www.mongodb.com/try/download/community) for local development, make sure you have both installed and set before you begin this process. I suggest you also download [***MongoDB Compass***](https://www.mongodb.com/try/download/shell) to get a UI view from your local database.

To install dependencies to run this code locally, follow these steps:

1. Clone `backend` branch from this repo:

    ```bash
    git clone <repo-url>
    cd task-app
    ```

2. Create an environment file `env.env` in `task-app` root folder, with the following variables:

    ```bash
    PORT=3000
    SEND_EMAIL_API_KEY=""
    JWT_SECRET=''
    MONGODB_URL_DB="mongodb://127.0.0.1:27017/task-manager-api"
    ```

    - `Port` is `3000` by default;
    - Get [***SendinblueAPI key***](https://www.sendinblue.com/);
    - Set up your own `JWT_SECRET`, it will be used for hashing and comparing hashed passwords. E.g.: `'fullstack'`;
    - Mongo db url is `mongodb://localhost:27017/task-manager-api`, `27017` is MongoDB standard port for local DB set, followed by `/task-manager-api` which is the DB name, you can alter if you want to.

3. Use npm package to install dependencies:

    ```bash
    npm install # or, npm i
    ```

### Usage

To run the app locally, follow these steps:

1. After you define your Mongo DB path and Mongo DB databases folder, run this command to start your DB:

    ```bash
    sudo /path/to/mongodb/folder/bin/mongod --dbpath=/path/to/mongodb/database/folder
    ```

2. Run one of the following commands to execute the code:

    - Standard run:

        ```bash
        npm run start
        ```

    - Run with `nodemon` **(recommended)**:

        ```bash
        npm run dev
        ```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
