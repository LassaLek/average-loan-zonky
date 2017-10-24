# Zonky

## (Experimental) Run in Docker

Run `build docker -t zonky .` to create image. 
Then run `docker run --rm -p 4200:4200 zonky`. 
To run app in docker. (http://0.0.0.0:4200/)

## Run normally

Node, Angular must be installed.

Run `npm run all-tests` to start all test. 
You can also use `ng test|lint|e2e` to run separately.

WARNING: Adding $PATH to browser may be needed. Can be done via: `export CHROME_BIN=<chromium-browser|google-chrome|...>`


Run `npm start` to start app. (http://localhost:4200/)
