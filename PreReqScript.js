try {


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
            "Id": aProducts[j],
            "IdOrigin": "SAP_HYBRIS_PRODUCT",
            "Name": "Offer Auto Test Product " + j,
            "Description": "Product for Offer Auto Test - do not change"
        };
        aProductJson.push(oProduct);
    }
   // postman.setGlobalVariable("aProducts", JSON.stringify(aProducts));
   // console.log(aProductJson);

    // CREATE OFFERS

    var aOffers = [{
        "OfferIdExt": 'NIMI_OFR_1',
        "OfferIdOrigin": 'GENERIC',
        "Name": 'NIMI_OFR_1',
        "Description": 'NIMI_OFR_1',
        "MarketingAreaID": 'GLOBAL',
        "StartDate": "\/Date(" + (new Date().getTime() - 100000) + ")\/",
        "EndDate": "\/Date(" + (new Date().getTime() + 10000000000) + ")\/",
        "CouponManagedExternally": "",
        "TargetGroupManagedExternally": true,
        "OfferContentManagedExternally": true,
        "ProjectedGrossMarginInPercent": "0.5",
        "Products": aProductJson,  // postman.getGlobalVariable('aProducts'),
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



} catch (error) {
    console.log('error running pre-requisite script');
}