class GuessingGame {
    left;
    rigth;
    mid;
    constructor() {
    }
    
    setRange(min, max) {
        this.left = min;
        this.rigth = max;
    }

    guess() {
            this.mid = Math.round((this.rigth + this.left) / 2);
            return this.mid;
    }

    lower() {
        this.rigth = this.mid;
    }

    greater() {
        this.left = this.mid;
    }
}

module.exports = GuessingGame;
