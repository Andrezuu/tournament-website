class TournamentContext {

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    createBrackets(participants) {
        return this.strategy.createBrackets(participants);
    }
}
export { TournamentContext }