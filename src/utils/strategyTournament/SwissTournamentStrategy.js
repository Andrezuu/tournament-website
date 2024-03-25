import { TournamentStrategy } from './TournamentStrategy.js'

class SwissTournamentStrategy extends TournamentStrategy {
    createBrackets(participants) {
        const brackets = []

        for (let i = 0; i < participants.length; i += 2) {
            if (i + 1 < participants.length) {
                const match = [participants[i], participants[i + 1]]
                brackets.push(match)
            } else {
                const byeMatch = [participants[i]]
                brackets.push(byeMatch)
            }
        }

        return brackets
    }
}


export { SwissTournamentStrategy }
