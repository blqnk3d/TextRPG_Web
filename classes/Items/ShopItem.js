import {Item} from "./Item.js";

class ShopItem extends Item {


    constructor(name, useType, lore, rarity, lvlReq, price) {
        super(name, useType, lore, rarity, lvlReq);
        this.price = price
    }

    getPrice() {
        return this.price
    }
}

export {ShopItem}