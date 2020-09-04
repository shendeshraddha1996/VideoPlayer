const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_Configuration= {         
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'dac2020',
}
//console.log(db_config);
let AddUser = async (input) => {
    const connection = mysql.createConnection(DB_Configuration);
    await connection.connectAsync();
  
    let sql =
      "INSERT INTO USER (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)";
    await connection.queryAsync(sql, [
      input.FirstName,
      input.LastName,
      input.Email,
      input.Password,
    ]);
  
    await connection.endAsync();
  };

  let AuthenticateUser = async (input) => {
    const connection = mysql.createConnection(DB_Configuration);
    await connection.connectAsync();
  
    let sql =
      "SELECT *FROM USER WHERE  Email=? AND Password=?";
    const output=await connection.queryAsync(sql, [
      input.Email,
      input.Password,
    ]);
  
    await connection.endAsync();
    if(output.length===0) 
      {
        throw new Error("Invalid Credential");
      }
  };

  let UpdatePassword = async (input) => {
    try {

        let Connection = mysql.createConnection(DB_Configuration);

        await Connection.connectAsync();

        let sql = "UPDATE USER SET PASSWORD=? WHERE EMAIL=?";
        await Connection.queryAsync(sql, [
            input.Password,
            input.Email,
        ]);

        await Connection.endAsync();

    } catch (err) {
        console.log(err.message);
    }
  }



  module.exports = { AddUser,AuthenticateUser,UpdatePassword };