"use strict";
//Literal types
let myName;
let usename;
usename = "Dave";
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
logMsg("Hello!");
logMsg(add(2, 3));
logMsg(add("a", 3));
let subtract = function (c, d) {
    return c - d;
};
// let multiply: MathFunction = function (c, d) {
//   return c * d
// }
// interface MathFunction {
//   (a: number, b: number): number
// }
let multiply = (c, d) => {
    return c * d;
};
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
//default parameter value
const sumAll = (a, b, c = 2) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
//Rest Parameter
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
const createError = (err) => {
    throw new Error(err);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (1 > 100)
            break;
    }
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("this show");
};
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
