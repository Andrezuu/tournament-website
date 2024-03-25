import { TournamentStrategy } from './TournamentStrategy.js';

class FreeForAllTournamentStrategy extends TournamentStrategy {
    createBrackets(participants) {
        console.log("Creating Free for All tournament matches with participants:", participants);
        const brackets = [];

        for (let i = 0; i < participants.length; i++) {
            for (let j = i + 1; j < participants.length; j++) {
                const match = [participants[i], participants[j]];
                brackets.push(match);
            }
        }

        return brackets;
    }
}

export { FreeForAllTournamentStrategy };
