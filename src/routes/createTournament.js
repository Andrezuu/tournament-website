import express from 'express'
import * as database from "../services/index.js"
const createTournamentRouter = express.Router();

createTournamentRouter.use(express.static('public'));
createTournamentRouter.use(express.urlencoded({ extended: true }));
createTournamentRouter.use(express.json());


createTournamentRouter.get('/', async (req, res) => {
    res.send('createTournamentView')
})

createTournamentRouter.post('/:id', async (req, res) => {
    tourId = req.params.id
    const tournaments = await database.getTournament(tourId)

    res.json(tournaments)
})

export default createTournamentRouter