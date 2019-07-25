const tor = require('tor-request');
const req = require('request');

const ipifyURL = 'https://api.ipify.org';

tor.request(ipifyURL, (err, res, body) => {
  if (!err && res.statusCode == 200) {
    console.log(`Your Anonymous IP is ${body}`);
  }
});

req.get(ipifyURL, (err, res, body) => {
  if (!err && res.statusCode == 200) {
    console.log(`Your Original IP is ${body}`);
  }
});
