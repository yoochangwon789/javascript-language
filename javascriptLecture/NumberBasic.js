// 숫자를 표기할 때
var a = 0b111   // 2진수 0b 로 시작
var b = 0o1111   // 8진수 0o 로 시작
var c = 0x1111   // 16 진수 0x 로 시작

console.log(a)      // 7
console.log(b)      // 586
console.log(c)      // 4393

// 진수 표현법도 typeof 로 타입 체크 가능 3개다 number
console.log(typeof a)   
console.log(typeof b)
console.log(typeof c)

// NaN 도 number 타입
console.log(typeof NaN)     // NaN -> Not a Number

console.log('124' + 5)      // 문자열 타입 으로 '1245' 이렇게 반환

// 문자열을 숫자로 변환
var stringParseInt1 = parseInt('124') + 5
var stringParseInt2 = Number('124') + 5
console.log(stringParseInt1)
console.log(stringParseInt2)
console.log(typeof stringParseInt1)
console.log(typeof stringParseInt2)

// 문자열을 소수로 변환
var stringParseFloat1 = parseFloat('3.14') + 5.14
var stringParseFloat2 = Number('3.14') + 5.14
console.log(stringParseFloat1)
console.log(stringParseFloat2)
console.log(typeof stringParseFloat1)
console.log(typeof stringParseFloat2)

// Number 인터페이스와 parseInt 의 차이점
var stringParseInt3 = parseInt('3월')
var stringParseInt4 = Number('3월')
console.log(stringParseInt3)    // 3
console.log(stringParseInt4)    // NaN

// prompt() 원하는 값을 입력
// typeof parseInt(prompt())
// prompt()

// 거듭제곱 -> **
console.log(2**4)

// 무한을 나타내는 Infinity
console.log(2 / 0)      // infinity

// Infinity - Infinity -> NaN
console.log(Infinity - Infinity)

// 0 / 0 -> NaN
console.log(0 / 0)

// '3' - 0
console.log('3' - 0)
console.log(typeof '3' - 0)