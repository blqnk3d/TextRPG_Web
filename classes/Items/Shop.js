import {ShopItem} from "./ShopItem.js";
class Shop {
    items = this.generate(100)

    buy(value){
        return JSON.parse(JSON.stringify(this.items[value]))
    }
    generate(n){
        let returnObj ={}
        for (let i = 0; i < n; i++) {
            returnObj[i] =  new ShopItem(`test${i}`,"",this.makeid(10),"",1,i)
        }
        return returnObj
    }
    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
}

export {Shop}