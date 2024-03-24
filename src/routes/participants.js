import express from 'express'
import * as database from "../services/index.js"
import path from 'path'
import { fileURLToPath } from 'url'
const participantRouter = express.Router()
const rootDirectory = path.dirname(fileURLToPath(import.meta.url))


participantRouter.get('/', async (req, res) => {
    const participants = await database.getAllParticipants()
    // const filePath = path.join(rootDirectory, '../../public/images/default.jpg');
    const filePath = "/images/default.jpg"
    res.send(`
    <div class="container mx-auto px-4 py-8">
    <h1 class="font-bold text-4xl text-center mb-4 text-white">Participantes</h1>
    <ul class="grid grid-cols-2 gap-2">
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
    <button hx-get="tournaments/${tournament.tournament_code}" hx-swap="inner" hx_trigger="click" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Esconder detalles</button>
</div>

    `)
})

export default participantRouter