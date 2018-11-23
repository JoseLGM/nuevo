var a=2;
var b=3;
var c=a+b;
console.log(c);
var cadena="hola mundo";
var vcad=cadena.split("");
for(var i=0;i<cadena.length;i++)
{
  console.log(vcad[i]);
}
var mysql      = require('mysql');
var connection = mysql.createConnection({
 host     : 'localhost',
 user     : 'root',
 password : 'vane',
 database : 'classicmodels'
});


connection.connect();
/*
connection.query('SHOW TABLES', function (error, results, fields) {
  if (error) throw error;
  //console.log(results);
  for (var i = 0; i < results.length; i++)
  {
    console.log("Tabla número " + (i + 1) + ": " +  results[i].Tables_in_classicmodels);
  }
});
*/

connection.query('SELECT * FROM customers', function (error, results, fields) {
  if (error) throw error;
  //console.log(results);
  //console.log(results[0]);
  for (var i = 0; i < results.length; i++)
  {
    //console.log("Registro ",(i + 1),": ",results[i]);
    console.log("Nombre: ",results[i].customerName);
  }
});
connection.end();
