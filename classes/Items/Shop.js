import {ShopItem} from "./ShopItem.js";
class Shop {
    items = this.generate(100)

    buy(value){
        console.log(JSON.parse(JSON.stringify(this.items[value])))
        return JSON.parse(JSON.stringify(this.items[value]))
    }
    generate(n){
        let returnObj ={}
        for (let i = 0; i < n; i++) {
            returnObj[i] =  new ShopItem(`testNummer${i}`,"","","",1,10)
        }
        return returnObj
    }
}

export {Shop}