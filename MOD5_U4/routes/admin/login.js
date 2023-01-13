var express = require("express");
var router = express.Router();
var usuariosModel = require("../../models/usuariosModel");

/* Diseño del login */
router.get("/", function (req, res, next) {
  res.render("admin/login", {
    layout: "admin/layout",
  });
});

/* Funcionamiento del login */
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUserByUsernameAndPassword(
      usuario,
      password
    );

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.user;

      res.redirect("/admin/novedades");
    } else {
      res.render("admin/login", {
        layout: "admin/layout",
        error: true,
      });
    }
  } catch (error) {
    console.log(error);
  } //Cierra catch
}); //Cierra router.post

/* Cerrar el login */
router.get("/logout", function (req, res, next) {
  req.session.destroy(); // Destruir las variables de sesion (id y usuario)
  res.render("admin/login", {
    layout: "admin/layout",
  });
});

module.exports = router;
