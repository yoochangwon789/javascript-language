// 연산자 우선순위
// 3 ** 2 + 1 를 27로 만들기
console.log(3 ** (2 + 1))

// 자바스크립트는 정수와 실수 구분이 없고 그냥 숫자로 구분됨 -> number

// 소수 계산 주의점
console.log(0.1 + 0.2) // -> 0.30000000000000004 결과로 나타남 컴퓨터는 2진법으로 나타내기 때문
console.log(0.3 - 0.1)

// 위의 결과를 우리가 생각하는 0.3 으로 표기하려면 정수로 바꿔서 계산후 실수로 바꿔주면 된다.
var result1 = (0.1 * 10 + 0.2 * 10) / 10
var result2 = (0.3 * 10 - 0.1 * 10) / 10
console.log(result1)
console.log(result2)