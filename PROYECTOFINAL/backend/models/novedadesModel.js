var pool = require("./bd"); //Llamando datos BD

async function getNovedades() {
  var query = "SELECT * FROM novedades";
  var rows = await pool.query(query);
  return rows;
}

async function insertNovedad(obj) {
  try {
    var query = "INSERT INTO novedades SET ?";
    var rows = await pool.query(query, [obj]);

    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  } // Cierra catch
} //Cierra INSERT

// Borrar Novedad
async function deleteNovedadesById(id) {
  var query = "DELETE FROM novedades WHERE id = ?";
  var rows = await pool.query(query, [id]);
  return rows;
}

//Traer Novedad segun su id
async function getNovedadById(id) {
  var query = "SELECT * FROM novedades WHERE id = ?";
  var rows = await pool.query(query, [id]);
  return rows[0];
}

/* Modificar de la Novedad con el UPDATE */
async function modificarNovedadById(obj, id) {
  try {
    var query = "UPDATE novedades SET ? WHERE id = ?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getNovedades,
  insertNovedad,
  deleteNovedadesById,
  getNovedadById,
  modificarNovedadById,
};
