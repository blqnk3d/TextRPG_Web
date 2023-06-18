import {Entity} from "./Entity.js";

class Player extends Entity {
    buffs = []
    debuffs = []

    constructor(name, image = "") {
        super(name, 100, 100, 3, 3, image);
        this._coins = 0
        this._exp = 0
        this._maxEXP = 100
        this._lvl = 1
        this._maxLvL = 100
    }

    getcoins() {
        return this._coins;
    }

    setcoins(value) {
        this._coins = value;
    }

    getexp() {
        return this._exp;
    }

    setexp(value) {
        this._exp = value;
    }

    getlvl() {
        return this._lvl;
    }

    setlvl(value) {
        this._lvl = value;
    }

    getmaxLvL() {
        return this._maxLvL;
    }

    setmaxLvL(value) {
        this._maxLvL = value;
    }

    getStats() {
        return {
            hp: this._hp,
            defence: this._defence,
            attack: this._attack,
            coins: this._coins,
            exp: this._exp

        }
    }
    levelUp(){
        if (this._exp >= this._maxEXP){
            this._exp -= this._maxEXP;
            this._lvl += 1
            this._maxEXP *= 1.2
        }
    }
}

export {Player}