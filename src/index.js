const express = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(cors());
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

/**
 * Middleware:
 * 
 * Interceptador de requisiçoes que interrompe totalmente a requisicaçao ou alterarr dados da requisiçao.
 * 
 */

const projects = [];

function logRequests(req, resp, next){
    const { method, url } = req;

    const logLabel = `[${method.toUpperCase()}] ${url}`;

    console.log(logLabel);

    return next(); // Próximo middleware
}

function validateProjectId(req, resp, next){
    const { id } = req.params;

    if(!isUuid(id)) return resp.status(400).json({erro: 'Invalid project ID.'})

    return next();
}

// app.use(logRequests);
app.use('/projects/:id', validateProjectId);


app.get('/projects', (req, resp) => { 
    const {title} = req.query;

    const result = title ? projects.filter(project => project.title.includes(title)) : projects;
    return resp.json(result);

});

app.post('/projects', (req, resp) => {
    const {title, owner } = req.body;

    const project = { id: uuid(), title, owner }; 

    projects.push(project);

    return resp.json(project);
})

app.put('/projects/:id', (req, resp) => {
    const { id } = req.params;
    const {title, owner } = req.body;

    const projectIndex = projects.find(project => project.id === id);

    if(projectIndex < 0){
        return resp.status(400).json({error: "Project not Found"});
    }

    const project = {
        id,
        title,
        owner
    }

    projects[projectIndex] = project;

    return resp.json(project);

})


app.delete('/projects/:id', (req, resp) => {
    const {id} = req.params;

    const projectIndex = projects.find(project => project.id === id);

    if(projectIndex < 0){
        return resp.status(400).json({error: "Project not Found"});
    }

    projects.splice(projectIndex, 1);

    return resp.status(204).send();

})


app.listen(3333, () => { 
    console.log("Backend started!🐱‍🏍🐱‍🏍");
});