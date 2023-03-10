//함수의 파라미터의 타입을 정의하는 방식
//function sum(a: number, b: number) {
// return a + b;
//}
//함수의 반환값이 number가 될 것이라고 추론하고있다.

sum(10, 20);

function add(): number {
  return 10;
}

//함수의 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20); //30

sum(10, 20);

//함수의 옵셔널 파라미터
function log(a: string, b?: string) {}

log("hello world");
log("hello ts", "abc");
