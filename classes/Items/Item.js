class Item {

    /*
    Name
    useType
    lore / decription
    rarity
    LvL req
     */
    constructor(name, useType, lore, rarity, lvlReq) {
        this._name = name;
        this._useType = useType;
        this._lore = lore;
        this._rarity = rarity;
        this.setlvlReq(lvlReq);
    }


    getname() {
        return this._name;
    }

    setname(value) {
        this._name = value;
    }

    getlore() {
        return this._lore;
    }

    setlore(value) {
        this._lore = value;
    }

    getrarity() {
        return this._rarity;
    }

    setrarity(value) {
        this._rarity = value;
    }

    getlvlReq() {
        return this._lvlReq;
    }

    setlvlReq(value) {
        this._lvlReq = Math.max(value, 0);
    }

    use(player) {
        switch (this._useType) {
            case  "heal1"  : {
                player.sethp(Math.min(player.gethp()+5,player.getMaxHP()))
            }
        }
        return player
    }

}

export {Item}