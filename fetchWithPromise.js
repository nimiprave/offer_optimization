let promise = new Promise(function (resolve, reject) {

    // executioner function
    var request = require('request');
    var options = {
        'method': 'HEAD',
        'url': 'https://wdciwe1.wdf.sap.corp:60100/sap/opu/odata/sap/CUAN_OFFER_IMPORT_SRV',
        'headers': {
            'X-CSRF-Token': 'Fetch',
            'Authorization': 'Basic cG90aHVyYWpuaTpNYXNzdWoxMDE1'
        },
        rejectUnauthorized: false, //add when working with https sites
        requestCert: false, //add when working with https sites
        agent: false //add when working with https sites
    };

    request(options, function (error, response) {
        if (error) {
            reject(new Error('Something went wrong'));
        }
        resolve(response.headers['x-csrf-token']);
    });
});

promise.then(function (result) {
console.log(result);
}, function (error) {
console.log(error);
});



