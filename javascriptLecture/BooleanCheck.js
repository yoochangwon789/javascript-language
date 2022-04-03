// Boolean 관한 코드
console.log(typeof true);

// 연산자 를 이용해서 참 거짓 판단
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 >= 5);     // true
console.log(5 <= 4);     // false

console.log(5 == 5);    
console.log(5 != 3);

// NaN 끼리 비교하기
// NaN 끼리 비교하면 false 가진다. 숫자, 불, 문자열 값을 통틀어 fasle 가 나오는 유일한 값이다.
// <, =>, =<, > 이런 연산자를 써도 모두 false 이며, != 이면 true 를 반환한다.
console.log(NaN == NaN);     // false
console.log(NaN != NaN);     // true

// Boolaen 값 끼리 비교
// 이유는 true -> 1 , false -> 0 이라고 생각하면 된다.
console.log(true > false);   // true
console.log(true < false);   // false

// 문자열 끼리 비교가 가능 기본으로 문자의 번호를 따르며, 알파벳이 뒤에오는 단어일수록 크다.
// 첫 문자가 같은 경우에는 두번째 문자를 비교하며 사전에서 단어 찾기랑 비슷하다
console.log('b' > 'a');      // true
console.log('bb' > 'ba');    // true
console.log('b' > 'ba');     // false

// 문자열이 가지고 있는 고유한 숫자를 확인하고 싶은 경우 charCodeAt() 함수를 사용한다.
// 아래 코드처럼 숫자를 반환해서 그 숫자의 값을 비교해 연산한다.
console.log('&'.charCodeAt());       // 38
console.log('a'.charCodeAt());       // 97
console.log('b'.charCodeAt());       // 98
console.log('&' > 'a');              // false

// 각기 다른 타입의 연산을 했을 때 어떻게 반환되는가?
// '3' < 5 -> true 외냐 하면 문자열이 옆에 처럼 숫자일경우에 연산할 때 숫자로 연산하기 때문이다.
console.log('3' < 5);   // true

// 'abc' < 5 -> false 이다 외냐 'abc' 는 문자열인데 숫자로 바꾸면 abc 가 되는데 숫자가 아니므로 NaN 타입으로 변경되며 false 가 반환된다.
console.log('abc' < 5);  // false

// == 와 === 차이점
/**
 * == 는 자바스크립트가 암묵적으로 형변환을 하고 비교하기 때문에 true 가 나오는 경우 가있다.
 * === 는 형변환을 하지않고 타입까지 체크하기 때문에 위의 == 연산자랑 다르다.
 * != , !== 도 같은 경우다
 */
console.log('1' == 1)    // true
console.log('1' === 1)   // false

console.log('1' != 1)    // false
console.log('1' !== 1)   // true

console.log('1' == true)    // true
console.log('1' === true)   // false