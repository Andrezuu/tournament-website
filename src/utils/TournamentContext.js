class TournamentContext {

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    createBrackets(participants) {
        this.strategy.createBrackets(participants_codes);
    }
}