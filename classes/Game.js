import {Player} from "./Player.js";
import {Enemy} from "./Enemy.js";

const playerPicAndLevel = document.getElementsByClassName("div1")[0]
const statsField = document.getElementsByClassName("div2")[0]
const equipment = document.getElementsByClassName("div3")[0]
const buttonField = document.getElementsByClassName("div4")[0]
const mainField = document.getElementsByClassName("div5")[0]
const effectsOnPlayer = document.getElementsByClassName("div6")[0]
const inventorySpace = document.getElementsByClassName("div7")[0]

const enemyList = {
    Slime: new Enemy("Slime", 20, 5, 0, 10, "", 1, 1, null),
    Goblin: new Enemy("Goblin", 30, 30, 5, 15, "", 2, 2, null),
    Skeleton: new Enemy("Skeleton", 40, 40, 10, 20, "", 3, 3, null),
    Zombie: new Enemy("Zombie", 35, 35, 8, 18, "", 2, 2, null),
    Vampire: new Enemy("Vampire", 50, 50, 15, 25, "", 4, 4, null),
    Werewolf: new Enemy("Werewolf", 45, 45, 12, 22, "", 3, 3, null)
};

//TODO <div class='playerFieldForAnimation'></div> <div class='enemyFieldForAnimation'></div>

let update = null

class Game {

    constructor(enemys) {
        this.enemys = enemys
        this.player = new Player("")
    }


    update() {
        playerPicAndLevel.innerHTML = ""
        statsField.innerHTML = ""
        equipment.innerHTML = ""
        buttonField.innerHTML = ""
        mainField.innerHTML = ""
        effectsOnPlayer.innerHTML = ""
        inventorySpace.innerHTML = ""

        // Player Name and LVL Field {
        let allLevelStuff = document.createElement("div")
        let nameContainer = document.createElement("div")
        nameContainer.id = "nameContainer"
        nameContainer.innerHTML = this.player.getname()
        document.getElementsByClassName("div1")[0].appendChild(nameContainer)
        let lvlContainer = document.createElement("div")


        lvlContainer.innerHTML = this.player.getlvl()
        lvlContainer.id = "lvlContainer"
        allLevelStuff.appendChild(lvlContainer)
        playerPicAndLevel.appendChild(allLevelStuff)
        // }
        let playerStats = this.player.getStats()

        for (const playerStatsKey in playerStats) {
            let statContainer = document.createElement("div")
            if (playerStatsKey === "hp") {
                statContainer.className = "statsContainerHP"
                statContainer.innerText = `${playerStats[playerStatsKey]}`
                statsField.appendChild(statContainer)
            } else {
                statContainer.innerText = `${playerStatsKey} : ${playerStats[playerStatsKey]}`
                statContainer.className = "statsContainer"
                statsField.appendChild(statContainer)
            }
        }
        this.player.levelUp()
        createButtonsForHotbar()
        this.drawHPBar()
    }

    chooseEnemy() {
        for (const gameEneyms in game.enemys) {
            let soloEnemyContainer = document.createElement("div")
            soloEnemyContainer.className = "enemyContainer"
            let labelMonsterName = document.createElement("label")
            labelMonsterName.innerText = game.enemys[gameEneyms]._name
            let chooseButton = document.createElement("button")
            chooseButton.value = game.enemys[gameEneyms]._name
            chooseButton.className = "enemyButtons"
            chooseButton.onclick = ev => {
                game.fight(game.enemys[ev.target.value]) // ToDo and Clear of the mainField
            }
            soloEnemyContainer.appendChild(labelMonsterName)
            soloEnemyContainer.appendChild(chooseButton)
            mainField.appendChild(soloEnemyContainer)
        }
    }

    fight(enemy) {
        let turn = true
        while (!enemy.isDead()) {
            if (turn) {
                enemy.getAttacked(this.player.getattack())
                turn = !turn
            } else {
                this.player.getAttacked(enemy.getattack())
                turn = !turn
            }
            this.update()
        }
        if (this.player.isDead()) {
            alert("Player Died F ")
            this.gameOver()
        } else {
            enemy.reset()
            this.player.setcoins(this.player.getcoins() + enemy.getcoinsDropped())
            this.player.setexp(this.player.getexp() + enemy.getexpDropped())
        }
    }

    shop() {
        alert("WIP")
    }

    gameOver() {

    }

    drawHPBar() {
        let currentBar = document.getElementsByClassName("statsContainerHP")[0]
        let hpProcent = Math.round(this.player.gethp() / (this.player.getMaxHP() / 100))
        console.log(hpProcent)
        currentBar.style.width = `${hpProcent}%`
    }

}

let input = document.getElementById("pName")
input.addEventListener("keyup", ev => {
    if (ev.key === "Enter") {
        game.player.setname(input.value)
        document.getElementById("del").parentElement.removeChild(document.getElementById("del"))
        document.getElementsByClassName("parent")[0].className = "parent"
        if (update == null) {
            update = setInterval(game.update(), 100)
        }
    }
})

document.getElementById("tColors").addEventListener("change", checkBox => {
    let colors = ["deepskyblue", "#fc9b9b", "#864186", "#affcaf",
        "#dca7ff", "#f1f189", "#af5353", "gray"]
    if (checkBox.target.checked) {
        for (let i = 1; i < colors.length + 1; i++) {
            let div = document.getElementsByClassName(`div${i}`)[0]
            div.style.backgroundColor = colors[i]
        }
    } else {
        for (let i = 1; i < colors.length + 1; i++) {
            let div = document.getElementsByClassName(`div${i}`)[0]
            div.style.backgroundColor = "#2B2B2B"
        }
    }

})


function createButtonsForHotbar() {
    buttonField.innerHTML = ""
    let fightButton = document.createElement("button")
    fightButton.innerHTML = "Fight"
    fightButton.className = "styleButtonListButton"
    fightButton.addEventListener("click", game.chooseEnemy)
    fightButton.style.width = "1fr"
    buttonField.appendChild(fightButton)


    let shopButton = document.createElement("button")
    shopButton.innerHTML = "Shop"
    shopButton.className = "styleButtonListButton"
    shopButton.addEventListener("click", game.shop)
    shopButton.style.width = "1fr"
    buttonField.appendChild(shopButton)
}

let game = new Game(enemyList)