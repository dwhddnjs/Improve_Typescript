// index Signatures
interface TransactionObj {
  readonly [key: string]: number
  pizza: number
  books: number
  job: number
}

// interface TransactionObj {
//   readonly [key: string]: number
// }

const today: TransactionObj = {
  pizza: -10,
  books: -5,
  job: 50,
  Dave: 42,
}

let props: string = "Pizza"

const todaysNet = (trans: TransactionObj): number => {
  let total = 0
  for (const transaction in trans) {
    total += trans[transaction]
  }
  return total
}
// today.pizza = 40

interface Student {
  // [key: string]: string | number | number[] | undefined
  name: string
  GPA: number
  classes?: number[]
}

const student: Student = {
  name: "doug",
  GPA: 3.5,
  classes: [100, 200],
}

// console.log(student.test)

for (const key in student) {
  console.log(`${key} : ${student[key as keyof Student]}`)
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`student ${key}L ${student[key]}`)
}

logStudentKey(student, "name")

// interface Incomes {
//   [key: string]: number
//   pizza: string
// }

type Streams = "salary" | "bonus" | "sidehustle"

type Incomes = Record<Streams, number | string>

const momthlyIncome: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
}

for (const revenue in momthlyIncome) {
  console.log(momthlyIncome[revenue as keyof Incomes])
}

type D = {
  A: string
  b: number
}

const obj = {
  a: "asdasd",
  b: 0,
}

type T = typeof obj

type Key = typeof momthlyIncome
type Key2 = keyof D

const a: Key2 = "A"
const B: T = {
  a: "ssss",
  b: 10,
}
// typeof로 객체를 타입으로 만들수 있음
//keyof 으로 리터럴 타입 말들수 있음

type RecordA = Record<string, number>
const hihi: RecordA = {
  string: 10,
  asd: 100,
}
