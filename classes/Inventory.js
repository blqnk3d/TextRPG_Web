class Inventory {
    list = []

    constructor() {
    }

    append(value) {
        this.list.push(value)
    }

    delLast() {
        this.list.pop()
    }

    deleteAt(index) {
        this.list.splice(index, 1)
    }
}


export {Inventory}