const result = {
  a: 1,
  b: "asdaasd",
  c: true,
}

type Result = typeof result
type Result2 = keyof Result

type Recorder = Record<Result2, Result>

type T = {
  a: string
  b: string
}

type aa = Partial<T>
