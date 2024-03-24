class SwissTournamentStrategy extends TournamentStrategy {
    createBrackets(participants) {
        const brackets = [];

        for (let i = 0; i < participants.length; i += 2) {

            const match = [participants[i], participants[i + 1]];
            brackets.push(match);
        }

        return brackets;
    }
}