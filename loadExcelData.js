//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
// using the node excel_reader_api for reading the excel file
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
const xlsfile = require('read-excel-file/node');
var promise = xlsfile('C:/users/i820262/desktop/cec/ccl_352_productid_producttype.XLSX');
promise.then((rows)=>{

    for(i = 0;i <= 20;i++){
        index = Math.floor((Math.random()*1000));     
      //cls  console.log(rows[index]);
    }
     
    var str = "[";
    for( i=0;i<rows.length;i++){
        str = `${str}'${rows[i]}',`; 
     //   console.log()
    }
    str = str + "]";
    console.log(str);
   //  console.log(rows[1].toString().split(';')[0]);
   //  console.log(rows[1].toString().split(';')[1]);


     
});

//""""""""""""""""""""""END"""""""""""""""""""""""""""""""""""""""""""""""""