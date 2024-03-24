import express from 'express'
import * as database from "../services/index.js"
import path from 'path'
import { fileURLToPath } from 'url'
const tournamentRouter = express.Router()
const rootDirectory = path.dirname(fileURLToPath(import.meta.url))


tournamentRouter.get('/', async (req, res) => {
    const tournaments = await database.getAllTournaments()
    const tourneyFormats = new Map();

    tourneyFormats.set(1, "Suizo");
    tourneyFormats.set(2, "Por grupos");
    tourneyFormats.set(3, "Todos contra todos");

    const filePath = path.join(rootDirectory, '../public/suizo.html');

    res.send(`
        <h1 class="text-4xl font-bold text-center mb-4">Torneos</h1>
        <ul>
            ${tournaments.map((tournament) =>
        `<li class="mb-4 bg-gray-700 rounded p-4">
                <h2 class="text-2xl font-bold">${tournament.name}</h2>
                <p>Formato: ${tourneyFormats.get(tournament.format)}
                <p>Estado: ${tournament.status}</p>
                <p>${tournament.description}</p>
                <button hx-get="tournaments/${tournament.tournament_code}" hx-swap="outerHTML" hx_trigger="click" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Detalles</button>
            </li>`).join('')}
        </ul>
    `)
})

tournamentRouter.get('/:id', async (req, res) => {
    const filePath = path.join(rootDirectory, '../../public/tournamentDetails.html');
    const tournamentId = req.params.id
    const participantsId = await database.getTournamentParticipants(tournamentId)
    const promises = participantsId.map(async tourParticipant => {
        console.log(tourParticipant.participant_code, 'lo consolea')
        return await database.getParticipant(tourParticipant.participant_code)
    })
    const participantsInfo = await Promise.all(promises)
    res.sendFile(filePath)

})

export default tournamentRouter