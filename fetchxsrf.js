

// Reading the XCRF TOKEN

var request = require('request');
var xsrf;
var options = {
  'method': 'HEAD',
  'url': 'https://wdciwe1.wdf.sap.corp:60100/sap/opu/odata/sap/CUAN_OFFER_MAINTAIN_SRV',
  'headers': {
    'X-CSRF-Token': 'Fetch',
    'Authorization': 'Basic cG90aHVyYWpuaTpNYXNzdWoxMDE1'
  },
  rejectUnauthorized: false, //add when working with https sites
  requestCert: false, //add when working with https sites
  agent: false //add when working with https sites
};

var req = request(options, function (error, response) {
  if (error) throw new Error(error);
  // console.log(response.headers);
  //var headers = JSON.parse(response.headers);
  // console.log(headers);
  // console.log(response.headers['x-csrf-token']);
  xsrf = response.headers['x-csrf-token'];
  console.log('inside function: ' + xsrf );
});


