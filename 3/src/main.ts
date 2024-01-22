//Array 타입
let stringArr = ["one", "hey", "jong"]
//string 배열만 가능함 string[]

let guitars = ["strat", "les Paul", 5000]
// string or number만 가능함 (string | number)[]

let mixedData = ["EVh", 1997, true]
// string or number or boolean만 가능 (string | number | boolean)[]

stringArr[0] = "John"
// string[] 이기에 가능함
stringArr.push("hey")
// string[] 이기에 가능함
stringArr.push(0)
// string[] 이기에 불가능함

guitars[0] = 1984
//(string | number)[] 가능함
guitars.unshift("Jim")
//(string | number)[] 가능함
guitars[1] = true
//(string | number)[] 가능함

let test = []
let bands: string[] = []
bands.push("Van")
bands.push(0)
//빈 배열에 타입 어노테이션으로 string[]을 박았기에 string만 넣을 수 있음

//Tuple
//Tuple은 배열에 갯수와 자리들의 타입을 지정하는것이다
let tuple: [string, number, boolean] = ["jong", 42, true]

let mixed: [string, number, boolean] = ["john", false, 1]
// 타입 자리가 틀림
let mixed2: [string, number, boolean] = ["john", 1, false, 1]
// 배열이 아이템에 갯수가 다름

tuple[1] = 0

//Objects
let myObj: object
//객체타입
myObj = bands
//bands는 array이지만 array도 객체이기 때문에 가능함
myObj = {}
//빈 객체 가능함

const exObj = {
  p: "dave",
  p2: true,
}
//객체를 하나 만든다

exObj.p2 = false
//가능함 exObj.p2 type은 boolean이기에 이또한 타입 추론에 의해 가능함

type Guitarist = {
  name?: string
  active?: boolean
  albums: (string | number)[]
}
//타입엘리어스다 interface와 크게 다르지 않다
//보통 객체에 타입 박을때 많이 쓰고 key물음표를 붙이면 옵셔널이다
//이때 옵셔널은 객체를 생성할따 해당 키값이 있어도 되가 없어도 되고 라고 생각하면 된다

interface Guitarist1 {
  name?: string
  active?: boolean
  albums: (string | number)[]
}
//인터페이스 이다 사실 타입엘리어스랑 비슷하다
//보통은 클래스랑 많이 쓰는거 같다

let evh: Guitarist = {
  active: false,
  albums: [1984, 5150, "Qu812"],
}
//옵셔널 타입에 의거해서 name은 없어도 됨

let jp: Guitarist = {
  name: "jimmy",
  active: true,
  albums: ["I", "II", "IV"],
}

evh = jp
//재할당 가능함

const greetGuitarist = (gui: Guitarist) => {
  if (gui.name) {
    //옵셔널을 여기서 쓸수있는데
    //매개변수 gui객체에 name key가 있으면
    return `hello ${gui.name.toUpperCase()}`
  }
  //아니면
  return "Hello"
}

//Enums
//보통 밸류값을 지정할때 많이 사용됨
enum Grade {
  u = 1,
  d,
  c,
  b,
  a,
}
