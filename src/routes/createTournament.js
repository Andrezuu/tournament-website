import express from 'express'
import * as database from "../services/index.js"

const createTournamentRouter = express.Router()

createTournamentRouter.get('/', (req, res) => {
    res.send(`<body class="bg-gray-800 text-white">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold text-center mb-8 text-blue-500">Crea tu torneo</span></h1>

        
        <div id="addParticipantForm">
            <h2 class="text-2xl font-bold mb-4">Agregar Participante</h2>    
                <div class="mb-4">
                    <label class="block text-sm font-bold mb-2" for="participantName">Nombre del Participante:</label>
                    <input id="participantName"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="participantName" type="text" placeholder="Nombre">
                    <input id="participantSkill" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="participantName" type="number" placeholder="Nivel de habilidad">
                </div>
                <button id="agregarParticipanteBtn" hx-post="/createTournament/addParticipant" hx-swap="outerHTML" hx-trigger="click" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Agregar Participante</button>
                <button hx-get="/participants/name" hx-swap="outerHTML" hx-target="#inscritos" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Ver participantes</button>
                <ul id="inscritos">
                </ul>
        </div>

        <div id="createTournamentForm">
            <h2 class="text-2xl font-bold mb-4">Crear Torneo</h2>
            <form hx-get="/brackets" hx-swap="outerHTML" hx-target="body">
                <div class="mb-4">
                    <label class="block text-sm font-bold mb-2" for="tournamentName">Nombre del Torneo:</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tournamentName" type="text" placeholder="Nombre">
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-bold mb-2" for="tournamentDescription">Descripción:</label>
                    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tournamentDescription" placeholder="Descripción"></textarea>
                </div>
                <div hx-vals='js:{selectedValue: document.getElementById("tournamentFormat").value}'>
                <div class="mb-4">
                    <label class="block text-sm font-bold mb-2" for="tournamentFormat">Formato:</label>
                    <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tournamentFormat">
                        <option value="1">Suizo</option>
                        <option value="2">Todos contra Todos</option>
                        <option value="3">Por Grupos</option>
                    </select>
                </div>
                <button hx-post="/brackets" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Crear Torneo</button>
                </div>
            </form>
        </div>

        <div class="text-center mt-8">
            <button hx-get="/" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Inicio</button>
        </div>
        
    </div>
</body>`)

})



createTournamentRouter.post('/addParticipant', async (req, res) => {
    let newName, newSkill
    const newParticipantInfo = req.body
    if (!(Object.keys(newParticipantInfo).length === 0)) {
        newName = req.body.name
        newSkill = req.body.skill
        const newParticipantId = await database.createParticipant(newName, newSkill)
        const newParticipant = await database.getParticipant(newParticipantId)
        res.send(`Nuevo participante ${newParticipant[0].username}`)

    }
})

createTournamentRouter.post('/selectedParticipants', async (req, res) => {
    
    const addedId = req.body.selectedParticipants
    console.log(addedId)
    const addedParticipant = await database.getParticipant(parseInt(addedId))
    await database.createTournamentParticipant(3, parseInt(addedId))
    res.send(`<p>${addedParticipant[0].username} agregado</p>`)
})

export default createTournamentRouter