const express = require("express");
const router = express.Router();


router.get("/", (request, response) => {
    response.status(200).send({
            "Titulo": "Servidor-para-casa - Reprograma Aula 9",
            "version": "1.0.0",
            "mensagem": "Bem vinda a sua agenda de contatos de Bests friends forever or BFF da Aline *.*"
        })
});

module.exports = router;