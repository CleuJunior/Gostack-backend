const express = require('express');

const app = express();

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informaçoes do Back-end
 * POST: Criar uma informaçoes no Back-end
 * PUT/PATCH: Alterar uma informaçoes no Back-end
 * DELETE: Deleta uma informaçoes no Back-end
 * 
 */

app.get('/projects', (req, resp) => { 
    return resp.json([
        "Projeto 01",
        "Projeto 02"
    ]);

});

app.post('/projects', (req, resp) => {
    return resp.json([
        "Projeto 03",
        "Projeto 04"
    ]);
})

app.put('/projects/:id', (req, resp) => {
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