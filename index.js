/*
//pdf-text-extract
//wrong password error
var fs = require("fs");
var path = require("path");
//var filePath = path.join(__dirname, '/pdf/1060376270320161922264964032845456.pdf');
var filePath = path.join(__dirname, '/pdf/pdf-sample.pdf');


var extract = require('pdf-text-extract')
extract(filePath, {
	userPassword:"oro123"
}, function (err, pages) {
  if (err) {
    console.dir(err)
    return
  }
  console.dir(pages)
})
*/
/*
//pdf-extract no option for read-protected files
//https://github.com/nisaacson/pdf-extract/issues/14
var inspect = require('eyes').inspector({maxLength:20000});
var pdf_extract = require('pdf-extract');
//var absolute_path_to_pdf = path.join(__dirname, '/pdf/1060376270320161922264964032845456.pdf');
var absolute_path_to_pdf = path.join(__dirname, '/pdf/pdf-sample.pdf');
var options = {
  type: 'text',  // extract the actual text in the pdf file 
  userPassword:'oro123'
}
var processor = pdf_extract(absolute_path_to_pdf, options, function(err) {
  if (err) {
    return callback(err);
  }
});
processor.on('complete', function(data) {
  inspect(data.text_pages, 'extracted text pages');
  callback(null, data.text_pages);
});
processor.on('error', function(err) {
  inspect(err, 'error while extracting pages');
  return callback(err);
});
*/
