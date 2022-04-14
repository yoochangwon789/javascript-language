// 논리 연산자
console.log(10 > 5 && 3 < 6);   // true
console.log(10 > 5 || 6 < 3);   // true

// ! 가 붙으면 Boolean 으로 형변환 되는 연산자
console.log(!'a')   // ! 개일 때는 false
console.log(!!'a')  // !! 개일 때는 true

// 유일 하게 !! 붙였을 때 false 인경우 즉 Boolean을 형변환 했을 때 false 값이 되는 경우
console.log(!!false)    // false 의 !! 인경우
console.log(!!'')       // '' 빈 문자열의 !! 인경우
console.log(!!0)        // 0 이 !! 인경우
console.log(!!NaN)      // NaN 이 !! 인경우
console.log(!!undefined)    // undefined 이 !! 인경우
console.log(!!null)         // null 이 !! 인 경우

console.log(!NaN)       // true

// ! 가 비교 연산자 <, > 이것보다 우선순위가 높다
console.log(!(2 < 0))   // true
console.log(!2 < 0)     // false -> ! 가 우선순위가 높기때문에 !2 이먼저 계산되어 false 가 되고 false < 0 의 결과는 false 가 되기 때문이다.
console.log(!2 == 0)    // true -> !2 -> false false == 0 이기 때문에 true

// 5 + 4 * 3 === 27 을 true 로 만들기
console.log((5 + 4) * 3 === 27)
console.log(!(5 + 4 * 3 === 27))
console.log(5 + 4 * 3 !== 27)
console.log(!(5 + 4 * 3) === !27)   // true === true
console.log(!!(5 + 4 * 3) === !!27) // false === false

console.log(false * false)  // 0
console.log(true * false)   // 0
console.log(true * true)    // 1