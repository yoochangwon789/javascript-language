// 빈 값 사용하기
// undefined 와 null 은 빈 값을 나타낼 때 사용한다.

// undefined 는 보통 반환할 결과값이 없을 때 나온다. 즉 돌려주는 값이 없을 때를 undifined 됐다고 한다.
console.log(typeof undefined);       // undifined
console.log(!!undefined);            // false
console.log(undefined == false);     // false
console.log(undefined == 0);     // false
console.log(undefined == '');     // false

// 다른 빈 값 자료형으로는 null 값인 경우가 있다.
console.log(undefined == null);      // true
console.log(undefined === null);     // false

// null 의 타입은 object 이다 버그이므로 외우자
console.log(typeof null);       // object
console.log(!!null);            // false
console.log(null == false);     // false
console.log(null == 0);         // false
console.log(null == '');        // false
