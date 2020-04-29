
//"""""""""""""""""regular file read"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//var fs = require('fs');
// fs.readFile('C:/users/i820262/desktop/ccl_products_full_list.XLSX', 'utf8', function(err, contents){
//     //var oJson = JSON.parse(contents);    // not an json file
//     console.log(contents.toString());
// });
// console.log('after calling readingFile');
//""""""""""""""""""""End""""""""""""""""""""""""""""""""""""""""""""""""'''''''"

//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
// using the node excel_reader_api for reading the excel file
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
const xlsfile = require('read-excel-file/node');
var promise = xlsfile('C:/users/i820262/desktop/ccl_products_ids_only.XLSX');
promise.then((rows)=>{

    for(i = 0;i <= 20;i++){
        index = Math.floor((Math.random()*1000));     
        console.log(rows[index]);
    }
     
    var str = "[";
    for( i=0;i<rows.length;i++){
        str = `${str}'${rows[i]}',`; 
    }
    str = str + "]";
    console.log(str);
});

//""""""""""""""""""""""END"""""""""""""""""""""""""""""""""""""""""""""""""