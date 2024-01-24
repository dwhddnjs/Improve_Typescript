// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

interface Guitarist1 {
  name?: string
  active?: boolean
  albums: stringOrNumberArray
}

type UserId = stringOrNumber

//Literal types
let myName: "jongwon"

let usename: "Dave" | "John" | "Amy"
usename = "Dave"

//functions
const add = (a: number, b: number): number => {
  return a + b
}

const logMsg = (msg: any): void => {
  console.log(msg)
}

logMsg("Hello!")
logMsg(add(2, 3))
logMsg(add("a", 3))

let subtract = function (c: number, d: number): number {
  return c - d
}

type MathFunction = (a: number, b: number) => number

// let multiply: MathFunction = function (c, d) {
//   return c * d
// }

// interface MathFunction {
//   (a: number, b: number): number
// }

let multiply: MathFunction = (c, d) => {
  return c * d
}

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c
  } else {
    return a + b
  }
}

//default parameter value
const sumAll = (a: number, b: number, c: number = 2): number => {
  if (typeof c !== "undefined") {
    return a + b + c
  } else {
    return a + b
  }
}

//Rest Parameter
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr)
}

const createError = (err: string): never => {
  throw new Error(err)
}

const infinite = () => {
  let i: number = 1
  while (true) {
    i++
    if (1 > 100) break
  }
}

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string"
  if (typeof value === "number") return "number"
  return createError("this show")
}

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false
}
