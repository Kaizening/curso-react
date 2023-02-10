var pool = require("./bd"); //Llamando datos BD
var md5 = require("md5");

async function getUserByUsernameAndPassword(user, password) {
  try {
    var query =
      "SELECT * FROM usuarios WHERE usuario = ? and password = ? limit 1";
    var rows = await pool.query(query, [user, md5(password)]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getUserByUsernameAndPassword };
