import {Player} from "./Player.js";
class Game {

    constructor(enemys) {
        this.enemys = enemys
        this.player = new Player("",100,100,3,3,"")
    }


    update(){
        let nameContainer = document.createElement("div")
        nameContainer.id = "name"
        nameContainer.innerHTML = this.player.getname()
        document.getElementsByClassName("div1")[0].appendChild(nameContainer)
        let lvlContainer = document.createElement("div")
        lvlContainer.innerHTML = this.player.getlvl()
        lvlContainer.id = "lvlContainer"
        document.getElementsByClassName("div1")[0].appendChild(lvlContainer)
    }

}
let input = document.getElementById("pName")
input.addEventListener("keyup",ev=>{
    if(ev.key === "Enter"){
        game.player.setname(input.value)
        document.getElementById("del").parentElement.removeChild(document.getElementById("del"))
        document.getElementsByClassName("parent")[0].className = "parent"
        game.update()
    }
})

let game = new Game("")