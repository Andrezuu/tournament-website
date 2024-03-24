import express, { Router } from 'express'
import tournamentRouter from './tournaments.js'
import createTournamentRouter from './createTournament.js'
import participantsRouter from './participants.js'

class RouterBuilder {
    // router

    constructor() {
        this.router = express.Router()
    }

    setTournamentRoutes() {
        this.router.use('/tournaments', tournamentRouter)
        return this
    }

    setCreateTournamentRoutes() {
        this.router.use('/createTournament', createTournamentRouter)
        return this
    }

    setParticipantRoutes() {
        this.router.use('/participants', participantsRouter)
        return this
    }

    build() {
        return this.router
    }
}

export default RouterBuilder
