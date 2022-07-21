const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:"Microsql2022",
    database: 'hmilatodo',
    insecureAuth:true
  });

  connection.connect((err)=>{
    err?console.log(err):console.log('Database connected')
  }
  )

  module.exports={connection}