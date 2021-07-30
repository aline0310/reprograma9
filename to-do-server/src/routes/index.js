const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).send({
        "título": "To-do API - Reprograma",
        "version": "1.0.0",
        "mensagem": "Bem vinda a sua API de tarefas <3"
})     

});

module.exports = router;