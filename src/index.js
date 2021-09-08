const express = require('express');

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informaçoes do Back-end
 * POST: Criar uma informaçoes no Back-end
 * PUT/PATCH: Alterar uma informaçoes no Back-end
 * DELETE: Deleta uma informaçoes no Back-end
 * 
 */


/**
 * Tipos de parâmetros:
 * 
 * Query Params: Filstros e paginação
 * Route Params: Identificar recursos(Atualiza/Deletar)
 * Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
 * 
 */

app.get('/projects', (req, resp) => { 
    const {title, owner} = req.query;

    console.log(title);
    console.log(owner);


    return resp.json([
        "Projeto 01",
        "Projeto 02"
    ]);


});

app.post('/projects', (req, resp) => {
    const {name, age, carisma} = req.body;

    console.log(name);
    console.log(age);
    
    return resp.json([
        "Projeto 03",
        "Projeto 04"
    ]);
})

app.put('/projects/:id', (req, resp) => {
    const { id } = req.params;

    console.log(id);


    return resp.json([
        "Projeto 05",
        "Projeto 06"
    ]);
})


app.delete('/projects/:id', (req, resp) => {
    return resp.json([
        "Projeto 03",
        "Projeto 04"
    ]);
})


app.listen(3333, () => { 
    console.log("Backend started!🐱‍🏍🐱‍🏍");
});