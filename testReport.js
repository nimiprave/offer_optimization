function showResults(results) {
    console.log(results);
};

var token = require('./abdXsrfModule');       // adb tokens
var pro = token.promise();

// patter: using inline function, elegant but confusing at times. 
pro.then(function (results) {
    console.log(results);
}, function (error) {
    console.log(error);
});


// pattern: Using pre-declared function, good for code clarity
pro.then(showResults, function (error) {
    console.log(error);
});