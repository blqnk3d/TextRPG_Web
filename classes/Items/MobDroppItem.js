import {Item} from "./Item.js";
class MobDroppItem extends Item{

    constructor(name, useType, lore, rarity, lvlReq,chance) {
        super(name, useType, lore, rarity, lvlReq);
        this.chance = chance
    }

    getChance(){
        return this.chance
    }

    getDropped(){
        let randomNumber = Math.floor(Math.random()*100)
        return this.chance < randomNumber
    }
}



export {MobDroppItem}