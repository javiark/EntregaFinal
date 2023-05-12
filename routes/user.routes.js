const express = require("express")
const router = express.Router();
const userController=require("../controllers/user.controller")

//POST- Crear usuario
router.post("/users", userController.postUser);
//GET-Leer usuario
router.get("/users/:id", userController.getUser)
//GET-Leer usuario
router.get("/users", userController.getAllUser)



//DELETE - Borrar usuario
router.delete("/users/:id", userController.deleteUser)
//PUT-Actualizar usuario
router.put("/users/:id", userController.updateUser)

module.exports = router;