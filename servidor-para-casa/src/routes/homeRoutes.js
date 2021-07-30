const express = require("express");
const router = express.Router();
const controller = require("../controllers/homeControllers");





router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/:id/:nome", controller.getByName)



router.post("/cadastro", controller.adicionarContato);


router.delete("/:id",controller.deletarContato)

module.exports = router