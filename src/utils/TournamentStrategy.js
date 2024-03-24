class TournamentStrategy {
    createBrackets(participants) {
        throw new Error("createTournament method must be implemented")
    }
}


app.post('/tournaments', (req, res) => {
    const tournamentContext = new TournamentContext()
    const tournamentType = req.body.tournamentType
    const participants = req.body.participants

    let tournamentStrategy
    switch (tournamentType) {
        case 'group':
            tournamentStrategy = new GroupTournamentStrategy()
            break
        case 'ffa':
            tournamentStrategy = new FreeForAllTournamentStrategy()
            break
        case 'swiss':
            tournamentStrategy = new SwissTournamentStrategy()
            break
        default:
            res.status(400).send('Tipo de torneo no válido')
            return
    }

    tournamentContext.setStrategy(tournamentStrategy)

    const brackets = tournamentContext.createBrackets(participants)

    res.status(200).json(brackets)
})
