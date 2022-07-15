const express = require('express');
const mangaRouter = express.Router();

const mangas = [
    { id: 1, name: 'Bay vien ngoc rong' },
    { id: 2, name: 'Meo may doraemon' },
    { id: 3, name: 'Tham tu lung danh connan' },
];

mangaRouter.get('/', function (req, res) {
   res.send(mangas);
});

mangaRouter.post('/', function (req, res) {
    const newManga = {
        id: `${mangas.length +  1}`,
        name: req.body.name,
    };
    mangas.push(newManga);
    res.send(mangas);
});
mangaRouter.put('/', function (req, res) {
    mangas.map(manga => {
        if (manga.id == req.body.id) {
            return manga.name =  req.body.name
        }
    })
    res.send(mangas)
 });
 
mangaRouter.delete('/', function (req, res) {
    for (let i = 0; i < mangas.length; i++){
        if (mangas[i].id === req.body.id){
    
            mangas.splice(i,1);
           
        }
    }
    res.send(mangas);
})
 
module.exports = mangaRouter;