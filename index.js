const tor = require('tor-request');
const req = require('request');

const ipifyURL = 'https://api.ipify.org';

[
  { cli: req, mes: body => `Your Original IP is ${body}` },
  { cli: tor, mes: body => `Your Anonymous IP is ${body}` }
].forEach(({cli, mes}) => {
  cli.request(ipifyURL, (err, res, body) => {
    if (!err && res.statusCode == 200) {
      console.log(mes(body));
    }
  })
});
