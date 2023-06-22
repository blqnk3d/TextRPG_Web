import {ShopItem} from "./ShopItem.js";
class Shop {
    items = {
        test0: new ShopItem("test","","","",1,10),
        test1: new ShopItem("test","","","",1,10),
        test2: new ShopItem("test","","","",1,10),
        test3: new ShopItem("test","","","",1,10),
        test4: new ShopItem("test","","","",1,10),
        test5: new ShopItem("test","","","",1,10),
        test6: new ShopItem("test","","","",1,10),

    }

    buy(value){
        console.log(JSON.parse(JSON.stringify(this.items[value])))
        return JSON.parse(JSON.stringify(this.items[value]))
    }
}

export {Shop}