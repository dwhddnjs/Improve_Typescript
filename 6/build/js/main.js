"use strict";
class Coder {
    constructor(name, music, age, lang = "type") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `hello im ${this.age}}`;
    }
}
const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age)
// console.log(Dave.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}}`;
    }
}
const Sara = new WebDev("mac", "sara", "lofi", 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} this ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Jonhn = new Peeps("john");
const Steve = new Peeps("john");
const Amy = new Peeps("john");
console.log(Steve.id);
console.log(Peeps.count);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("no");
    }
}
const MyBands = new Bands();
MyBands.data = ["Nei; Yong", "led zep"];
MyBands.data = [...MyBands.data, "zz"];
console.log("MyBands: ", MyBands.data);
class Ex {
    static getName() {
        console.log(Ex.myName);
    }
}
Ex.myName = "jongwon";
Ex.getName();
