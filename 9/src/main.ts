//Urillty Types

// partial: 타입의 모든 속성을 옵셔널로 변경
interface Assignment {
  studentId: string
  title: string
  grade: number
  verified?: boolean
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return {
    ...assign,
    ...propsToUpdate,
  }
}

const assign1: Assignment = {
  studentId: "asdasdasd",
  title: "final project",
  grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })
// 프로퍼티 업데이트 할때 쓴다?

// Required and Readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign
}

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
}

recordAssignment({ ...assignGraded, verified: true })

//Record
const hex: Record<string, string> = {
  red: "",
  green: "",
}

type Students = "sara" | "kelly"
type Letter = "A" | "B" | "C" | "D"

const grade: Record<Students, Letter> = {
  sara: "B",
  kelly: "C",
}

interface Grades {
  assign1: number
  assign2: number
}

const gradeData: Record<Students, Grades> = {
  sara: { assign1: 10, assign2: 20 },
  kelly: { assign1: 10, assign2: 20 },
}

//pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
  studentId: "adsadsdsa",
  grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const score2: AssignPreview = {
  studentId: "adsadsdsa",
  title: "adsadas",
}

//Exclude and Extract
type add = Exclude<Letter, "U">

type high = Extract<Letter, "A" | "B">

//nunnullalble
type AllPossibleGrades = "Dave" | "John" | null | undefined

type NameOnly = NonNullable<AllPossibleGrades>

//return Type
// type newAssign = { title: string; points: number }

const createNewAssign = (title: string, points: number) => {
  return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("adsdsaasd", 100)

//Parmeters
type AssignParms = Parameters<typeof createNewAssign>
const assignArgs: AssignParms = ["asdasdad", 1000]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
