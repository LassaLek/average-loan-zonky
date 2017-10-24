# Zonky
All mentioned commands are meant to be run in projects root folder.

## (Experimental) Run in Docker
Docker must be installed.

Run `docker build -t zonky .` to create image.
 
Then run `docker run --rm -p 4200:4200 zonky`. 
To start app in docker. (Only lint test will be run.)

Url: http://0.0.0.0:4200/

## Run normally

NodeJS must be installed.

Run `npm install`. 

### Run tests
Run `npm run all-tests` to start all test. 

You can also use `ng test|lint|e2e` to run tests separately.

##### WARNING
Adding $PATH to browser may be needed. Can be done via: 

`export CHROME_BIN=<chromium-browser|google-chrome|...>`

### Run app
Run `npm run start-dev` to start app. 

Url: http://localhost:4200/
