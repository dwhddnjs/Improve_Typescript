const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null
}

interface BoolCheck<T> {
  value: T
  is: boolean
}

const isTrue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return {
      value: arg,
      is: false,
    }
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false }
  }
  return {
    value: arg,
    is: !!arg,
  }
}

interface HasID {
  id: number
}

const processUser = <T extends HasID>(user: T): T => {
  return user
}
const getUserProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key])
}

class StateObj<T> {
  private data: T
  constructor(value: T) {
    this.data = value
  }

  get state(): T {
    return this.data
  }

  set state(value: T) {
    this.data = value
  }
}

const store = new StateObj("asdasd")
store.state = "pop"

const myState = new StateObj<(number | string)[]>([15])
myState.state = [123123, "asddas"]

const result = <T extends { name: "jong" }>(value: T): string => {
  return value.name
}

const ss = result({ name: "jong", age: 10 })
