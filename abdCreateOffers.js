function showResults(results) {
    console.log(JSON.stringify(results));
    try {

        // try setting the environment variable. This is dangerous to bypass certificate
        //process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

        //CREATE PRODUCTS
        var aProducts = ['COMMERCE_TAB_PROD_ID_004',
            'COMMERCE_TAB_PROD_ID_005',
            'COMMERCE_TAB_PROD_ID_006',
            'COMMERCE_TAB_PROD_ID_001',
            'COMMERCE_TAB_PROD_ID_002',
            'COMMERCE_TAB_PROD_ID_003',
            'COMMERCE_TAB_PROD_ID_007'
        ];

        var aProductJson = [];
        for (var j = 0; j < aProducts.length; j++) {
            var oProduct = {
                "ProductId": aProducts[j],
                "ProductOriginId": "SAP_HYBRIS_PRODUCT"
            };
            aProductJson.push(oProduct);
        }
        // postman.setGlobalVariable("aProducts", JSON.stringify(aProducts));
        // console.log(aProductJson);

        // CREATE OFFERS

        var aOffers = [{
            "OfferIdExt": 'NIMI_1',
            "OfferIdOrigin": 'GENERIC',
            "Name": 'NIMI_1',
            "Description": 'NIMI_1',
            "MarketingAreaID": 'GLOBAL',
            "StartDate": "\/Date(" + (new Date().getTime() - 100000) + ")\/",
            "EndDate": "\/Date(" + (new Date().getTime() + 10000000000) + ")\/",
            "CouponManagedExternally": "",
            "TargetGroupManagedExternally": true,
            "OfferContentManagedExternally": true,
            "ProjectedGrossMarginInPercent": "0.5",
            "Products": aProductJson, // postman.getGlobalVariable('aProducts'),
            "OfferContent": [{
                "CommunicationMedium": "EMAIL",
                "LanguageISOCode": "EN",
                "OfferContentType": "01",
                "OfferContentSourceURL": "https://www.sap.com"
            }, {
                "CommunicationMedium": "EMAIL",
                "LanguageISOCode": "DE",
                "OfferContentType": "01",
                "OfferContentSourceURL": "https://www.sap.com"
            }]
        }];

        //postman.setGlobalVariable("ofrOffers", JSON.stringify(aOffers));
        //postman.setGlobalVariable("ofrOffer", JSON.stringify(aOffers[0]));
        //  console.log(JSON.stringify(aOffers));

        var body = {
            "Id": "",
            "Timestamp": null,
            "UserName": "",
            "SourceSystemType": "PMAN",
            "SourceSystemId": "Postman",
            "Offers": aOffers
        };
        console.log(JSON.stringify(body));


        //create offers

        var request = require('request');
        var options = {
            'method': 'POST',
            'url': 'https://wdciwe1.wdf.sap.corp:60100/sap/opu/odata/sap/CUAN_OFFER_IMPORT_SRV/ImportHeaders',
            'headers': {
                'x-csrf-token': JSON.stringify(results),
                'Content-Type': ['application/json', 'text/plain'],
                'Accept': 'application/json'
            },
            rejectUnauthorized: false, //add when working with https sites
            requestCert: false, //add when working with https sites
            agent: false, //add when working with https sites,
            body: JSON.stringify(body)
        };


        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.statusCode);
            console.log(response.statusMessage);
        });

    } catch (error) {
        console.log('error running pre-requisite script');
    }
}


// reading the XSRF token for ABD
var token = require('./abdXsrfModule'); // adb tokens
var pro = token.promise();

// pattern: Using pre-declared function, good for code clarity
pro.then(showResults, function (error) {
    console.log(error);
});