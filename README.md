# Lumina-Movies-Nodejs
Nodejs API that provide services to authenticate and shows everyone's favourite movies from database (https://lumina-movies.web.app/)

Node.js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. 
It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.

# Application Insights

The Nodejs Application is built on EXPRESS server, and uses MYSQL database. 
This Nodejs API returns various endpoints that drive the Frontend application [Lumina Movies Frontend With React (https://github.com/Gbollyhub/Lumina-Movies-React)]
The Nodejs API makes use of a thirdparty API to return movies OMDB [https://www.omdbapi.com/]:

## How to run this application

In the project directory, you can run:

### `npm install`
Installs all the packages the application needs to run smoothly

## Configure MYSQL DATABASE
In the project MYSQL database was used, so it needs to be setup before the project can run. After setting up your database you will find SQLDUMP.SQL file in your project.
Import the sql file into your database and run the sql query to create the neccessary table and preset data.

## Configure .ENV fILE
After setting up your MYSQL database,
In the project file you would find a file .env_example which contains the environment variables needed for the application to run.
Create your own .env file and add the corresponding environment variables
The first part is OMDB Credentials, you will find the documentation here [https://www.omdbapi.com/]:
OMDB_API_KEY = [KEY]
OMDB_API_URL = https://www.omdbapi.com

The second part is MYSQL Credentials, copy the credentials from the earlier created Database:
MYSQL_PASSWORD = [PASSWORD]
MYSQL_USER = [USER]
MYSQL_DATABASE = [DATABASE]
MYSQL_HOST = [HOST]
MYSQL_PORT = [PORT]


### `npm dev`

Runs the app in the development mode.\

The page will reload when you make changes.\


