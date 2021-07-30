const artistas = require("../models/contatos.json");

const getAll = (req, res) => {
    res.status(200).send(artistas)
}


const getById = (req, res) => {

    let idRequerido = req.params.id;

    let idFiltrado = artistas.find(artista => artista.id == idRequerido);
    res.status(200).send(idFiltrado)}



const getByName = (req,res) => {

    let nomeRequerido = req.query.nome
    let nomeFiltrado = artistas.find(artista => artista.nome == nomeRequerido)
     
    if(nomeFiltrado === "" || nomeFiltrado === undefined){
      res.status(404).send({
        "message": "Por favor, verifique o nome requisitado do seu contatinho!"
        })
    }else{
        res.status(200).send(nomeFiltrado)
    }    console.log(nomeFiltrado, "aqui")
}

const adicionarContato = (req,res) => {
    const novoNome = req.body.nome;
    const novoCelular = req.body.celular;
    const novoRedeSocial = req.body.redesSociais;


   const novoContato = {
         id: Math.random().toString(32).substr(5),
         nome: novoNome,
         celular: novoCelular,
         redesSociais: novoRedeSocial
    };
    
     artistas.push(novoContato);
   
    res.status(200).send(novoContato);

}

const deletarContato = (req, res) => {
    const nomeRequerido = req.query.nome.toLowerCase()
    const nomeFiltrado = artistas.find(artista => artista.nome.toLowerCase().includes(nomeRequerido))

   const filtroJson = artistas.indexOf(nomeFiltrado);
    

   artistas.splice(filtroJson, 1);

   res.status(200).send([
       {
           "message": "Contatinho deletado com sucesso!!!"
       },
       filtroJson
   ])
}

module.exports = { getAll, getById, getByName, adicionarContato, deletarContato}