let usename = "jongwon"
// usename의 타입 string 이다
// 기본적으로 어노테이션을 박지 않아도 타입을 지정해준다

let a: number = 12
// : number 이러게 쓰면 타입 지정이 가능하다
// 이게 타입 어노테이션이라는건데
// 이 간단한걸 면접때 명칭을 몰라서 모르겠다고 말함
let b: number = "6"
// 이렇게 하면 에라 발생
// b는 number 인데 string을 할당했다고 에러 발생
let c: number = 2
//하

console.log(a / b)
// 연산은 하지만 타입에러 발생함

console.log(c * b)
// 연산은 하지만 타입에러 발생함
