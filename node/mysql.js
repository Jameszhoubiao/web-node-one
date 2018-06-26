const mysql = require('mysql')

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'tongtong806',
    database : 'mysql'
});

connection.connect();


connection.query('select * from user where user="root"', function (error, results, fields) {
    console.log(fields)
    if (error) throw error;
    console.log('The solution is: ', results[0].User);
});