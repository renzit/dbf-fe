
const fs = require('fs');
const path = require('path');
const dbfParser = require('dbf-parser');

console.log(dbfParser);
var filePath = path.normalize('C:/Users/Renzo/Desktop/seraan-facturacion-electronica/Proyect/clientes.DBF'); 

var parser = new dbfParser(filePath);
parser.on('start', function(p) {
    console.log('dBase file parsing has started');
});

parser.on('header', function(h) {
    console.log('dBase file header has been parsed');
});

parser.on('record', function(record) {
    console.log(record);
    //console.log('Name: ' + record.firstName + ' ' + record.lastName);
});

parser.on('end', function(p) {
    console.log('Finished parsing the dBase file');
});

parser.parse();

//Esto funciona!
var data = fs.readFileSync( filePath );
console.log(data.toString());