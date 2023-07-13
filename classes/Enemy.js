import {Entity} from "./Entity.js";

class Enemy extends Entity {

    constructor(name, hp, defence, attack, image, coinsDropped, expDropped, items) {
        super(name, hp, hp, defence, attack, image);
        this._coinsDropped = coinsDropped;
        this._expDropped = expDropped;
        this._items = items;
        this.save = hp
    }

    getcoinsDropped() {
        return this._coinsDropped;
    }

    setcoinsDropped(value) {
        this._coinsDropped = value;
    }

    getexpDropped() {
        return this._expDropped;
    }

    setexpDropped(value) {
        this._expDropped = value;
    }

    getitems() {
        return this._items;
    }

    setitems(value) {
        this._items = value;
    }

    reset() {
        this._hp = this.save
    }
}


export {Enemy}