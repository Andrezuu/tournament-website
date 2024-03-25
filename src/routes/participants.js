import express from 'express'
import * as database from "../services/index.js"
import * as utils from "../utils/htmlTemplates.js"
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
const participantRouter = express.Router()
const rootDirectory = path.dirname(fileURLToPath(import.meta.url))


participantRouter.get('/', async (req, res) => {
    const tournamentId = req.params

    console.log(tournamentId)
    const participants = await database.getAllParticipants()
    // const filePath = path.join(rootDirectory, '../../public/images/default.jpg');aa
    const filePath = "/images/default.jpg"
    res.send(`
    <div id="participants3">
    <div class="container mx-auto px-4 py-8">
        <h1 class="font-bold text-4xl text-center mb-4 text-white">Participantes</h1>
        <ul  class="grid grid-cols-2 gap-2">
            ${participants.map((participant) =>
        `<li class="mb-4 bg-gray-700 rounded p-4 flex items-center">
                <div class="mx-auto"> 
                    <h2 class="text-1xl font-bold text-white">Nombre: ${participant.username}</h2>
                    <p class="text-gray-300">Nivel de habilidad: ${participant.skill}</p>
                </div>
                    <img src="${filePath}" alt="Imagen predeterminada" class="ml-auto small-image">
            </li>`
    ).join('')}
        </ul>
        <button hx-post="/tournaments" hx-swap="outerHTML" hx-target="#participants3" hx-vals='{"tournament_code": 3}' class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Esconder detalles</button>
    </div>
    </div>
    `)
})

participantRouter.get('/name', async (req, res) => {
    const participants = await database.getAllParticipants();

    // Generate options for the select element
    const options = participants[0].map(participant => utils.getParticipantNames(participant)).join('');
    const html = `    
    <h1 class="font-bold text-4xl text-center mb-4 text-white">Participantes</h1>
        ${options}
    <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>`

    // Send the response with the select element
    res.send(html)

})


export default participantRouter