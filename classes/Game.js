import {Player} from "./Player.js";
class Game {

    constructor(enemys) {
        this.enemys = enemys
        this.player = new Player("",100,100,3,3,"")
    }


    update(){
        // Player Name and LVL Field {
        let nameContainer = document.createElement("div")
        nameContainer.id = "nameContainer"
        nameContainer.innerHTML = this.player.getname()
        document.getElementsByClassName("div1")[0].appendChild(nameContainer)
        let lvlContainer = document.createElement("div")
        lvlContainer.innerHTML = this.player.getlvl()
        lvlContainer.id = "lvlContainer"
        document.getElementsByClassName("div1")[0].appendChild(lvlContainer)
        // }


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

document.getElementById("tColors").addEventListener("change",checkBox=>{
    let colors = ["deepskyblue","#fc9b9b","#864186","#affcaf",
        "#dca7ff","#f1f189","#af5353","gray"]
    if(checkBox.target.checked){
        for (let i = 1; i < colors.length+1; i++) {
            let div = document.getElementsByClassName(`div${i}`)[0]
            div.style.backgroundColor = colors[i]
        }
    }else {
        for (let i = 1; i < colors.length+1; i++) {
            let div = document.getElementsByClassName(`div${i}`)[0]
            div.style.backgroundColor = "#2B2B2B"
        }
    }

})

let game = new Game("")