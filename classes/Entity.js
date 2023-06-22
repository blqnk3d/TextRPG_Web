class Entity {

    constructor(name,hp,maxHP,defence,attack,image) {
        this.maxHP = maxHP
        this.image = image
        this._name = name;
        this._hp = hp;
        this._defence = defence;
        this._attack = attack;
    }

    getMaxHP(){
        return this.maxHP
    }

    getname() {
        return this._name;
    }

    setname(value) {
        this._name = value;
    }

    gethp() {
        return this._hp;
    }

    sethp(value) {
        this._hp = Math.max(value,0);
    }

    getdefence() {
        return this._defence;
    }

    setdefence(value) {
        this._defence = value;
    }

    getattack() {
        return this._attack;
    }

    setattack(value) {
        this._attack = value;
    }
    getAttacked(attack){
        let c = 100; // Constante
        let damage = c * attack / (c + this._defence);
        this.sethp(Math.round(this.gethp() - damage));
    }
    setMaxHP(value){
        this.maxHP = value
    }
    isDead(){
        return this._hp <= 0
    }

}
export {Entity}