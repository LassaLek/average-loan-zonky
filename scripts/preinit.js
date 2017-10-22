"use strict";


const SOURCE_ROOT = 'https://api.zonky.cz/loans/marketplace';

const request = require('request-promise');
const fs = require('fs');

run()
  .then(() => process.exit(0))
  .catch(e => {
    console.log('ERROR', e);
    process.exit(1);
  });

function run() {
  return Promise.resolve()
    .then(() => downloadLoans())
    .then(loans => fs.writeFileSync("src/assets/init/loans.json", JSON.stringify(loans)));
}

function downloadLoans() {
  return request.get({
    url: SOURCE_ROOT,
    json: true
  });
}


