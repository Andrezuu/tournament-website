import express from 'express'
import qs from 'qs'
import bodyParser from 'body-parser'
import * as database from "../services/index.js"
import path from 'path'
import { fileURLToPath } from 'url'
import * as htmlTemplates from '../utils/htmlTemplates.js'
import { copyFileSync } from 'fs'
const tournamentRouter = express.Router()
const rootDirectory = path.dirname(fileURLToPath(import.meta.url))
const tourneyFormats = new Map();
tournamentRouter.use(bodyParser.urlencoded({ extended: false }));
tourneyFormats.set(1, "Suizo")
tourneyFormats.set(2, "Por grupos")
tourneyFormats.set(3, "Todos contra todos")

tournamentRouter.get('/', async (req, res) => {
    const tournaments = await database.getAllTournaments()

    const filePath = path.join(rootDirectory, '../public/suizo.html');

    res.send(`
        <h1 class="text-4xl font-bold text-center mb-4">Torneos</h1>
        <ul>
            ${tournaments.map((tournament) => htmlTemplates.getTournamentTemplate(tournament)).join('')}
        </ul>
    `)
})

tournamentRouter.get('/details/:id', async (req, res) => {
    const filePath = path.join(rootDirectory, '../../public/tournamentDetails.html');
    const tournamentId = req.params.id
    const participantsId = await database.getTournamentParticipants(tournamentId)
    const promises = participantsId.map(async tourParticipant => {
        return await database.getParticipant(tourParticipant.participant_code)
    })
    const participantsInfo = await Promise.all(promises)
    console.log(tournamentId)
    const html = `
    <div id="participants${tournamentId}">
        <div class="container mx-auto px-4 py-8">
            ${participantsInfo.length === 0 ?
            `<h1 class="font-bold text-4xl text-center mb-4 text-white">No hay participantes!</h1>` :
            `<h1 class="font-bold text-4xl text-center mb-4 text-white">Participantes</h1>
                <ul class="grid grid-cols-2 gap-2">
                    ${participantsInfo.map(participant => htmlTemplates.getParticipantTemplate(participant)).join('')}
                </ul>`
        }
            <button hx-post="/tournaments" hx-swap="outerHTML" hx-target="#participants${tournamentId}" hx-vals='{"tournament_code": ${tournamentId}}' class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Esconder detalles</button>
        </div>
    </div>`

    res.send(html)


})
tournamentRouter.post('/', async (req, res) => {
    const code = req.body.tournament_code
    console.log(code)
    const tournaments = await database.getTournament(parseInt(code))
    console.log(tournaments)

    res.send(` 
    <button hx-get="tournaments/details/${code}" hx-swap="outerHTML" hx_trigger="click" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Detalles</button>
    `)
})




export default tournamentRouter