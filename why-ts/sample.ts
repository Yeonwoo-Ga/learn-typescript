function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, 20); //타입스크립트가 추론, 반환타입까지 정의
result.toLocaleString();
