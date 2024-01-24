"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            value: arg,
            is: false,
        };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return {
        value: arg,
        is: !!arg,
    };
};
const processUser = (user) => {
    return user;
};
const getUserProperty = (users, key) => {
    return users.map((user) => user[key]);
};
class StateObj {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObj("asdasd");
store.state = "pop";
const myState = new StateObj([15]);
myState.state = [123123, "asddas"];
const result = (value) => {
    return value.name;
};
const ss = result({ name: "jong", age: 10 });
