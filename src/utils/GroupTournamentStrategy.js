class GroupTournamentStrategy extends TournamentStrategy {
    createBrackets(participants, groupSize) {
        console.log("Creating Group tournament matches with participants:", participants);
        const brackets = [];
        const groups = [];

        for (let i = 0; i < participants.length; i += groupSize) {
            const group = participants.slice(i, i + groupSize);
            groups.push(group);
        }

        for (let i = 0; i < groups.length; i++) {
            for (let j = i + 1; j < groups.length; j++) {
                const match = [groups[i], groups[j]];
                brackets.push(match);
            }
        }

        return { brackets, groups };
    }
}
