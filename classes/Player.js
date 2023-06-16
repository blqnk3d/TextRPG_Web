import {Entity} from "./Entity.js";

class Player extends Entity{
    buffs = []
    debuffs = []
    constructor(name,hp,maxHP,defence,attack,image) {
        super(name,hp,maxHP,defence,attack,image);
        this._coins = 0
        this._exp = 0
        this._lvl = 0
        this._maxLvL = 0
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
}

export {Player}