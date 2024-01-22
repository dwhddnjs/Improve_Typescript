// 타입 어노테이션

let name: string = "jongwon"
// name의 타입은 string만 할당할 수 있다
let life: number
// life의 타입은 number만 할당할 수 있다
let isLoading: boolean
// isLoading 타입은 boolean만 가능하다
let album: any
// album의 타입은 모든 타입을 할당할 수 있다
// 되도록 안 쓰는게 좋음

name = "jojo"
//name에 string 타입의 jojo를 재할당
life = 0
//life에 number 타입의 0을 재할당
isLoading = true
//isLoading을 boolean 타입의 true을 재할당
isLoading = "aa"
// isLoading은 boolean 이기에 string을 할당 못함
album = 5000
// 어떤 타입이든 다가능

const sum = (a: number, b: string) => {
  // 매개변수에는 꼭 어노테이션 박아라 뭐가 들어올지 모른다
  return a + b
}

let postId: string | number
//유니온 타입으로 postIds는 string이나 number가 재할당 가능하다
let isActive: number | boolean
//isActive은 number나 boolean 만 가능

let re: RegExp = /\w+/g
//정규 표현식은 RegExp박으면 됨
