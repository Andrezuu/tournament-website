import { TournamentStrategy } from './TournamentStrategy.js';

class GroupTournamentStrategy extends TournamentStrategy {
    createBrackets(participants, a) {
        const groupSize = 3
        console.log('when muerse', participants.length)
        const brackets = [];
        const groups = [];

        // Split participants into groups of specified size
        for (let i = 0; i < participants.length; i += groupSize) {
            
            console.log('but revivves', i)
            const group = participants.slice(i, i + groupSize);
            groups.push(group);
        }

        // Generate pairings between groups
        for (let i = 0; i < groups.length; i++) {
            for (let j = i + 1; j < groups.length; j++) {
                const match = [groups[i], groups[j]];
                brackets.push(match);
            }
        }
        return groups;
    }
}

export { GroupTournamentStrategy };
