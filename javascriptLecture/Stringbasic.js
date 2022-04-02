// typeof 는 타입을 반환하는 예약어
console.log(typeof '문자열'); // string
console.log(typeof 1); // number
console.log(typeof true); // boolean
console.log(typeof 'c'); // string
console.log(typeof ''); // string

console.log(typeof '' == ' ')   // false
console.log(typeof '' == '')    // true

// 따옴표를 문자로 만들고 싶거나 큰 따옴표를 문자로 만들고 싶을 때 왠만하면 ` 백틱 사용 아니면 내가 쓰고싶을 걸로 반대로 적어야 함
console.log(typeof `'`)                 // string
console.log(typeof `"`)                 // string
console.log(typeof `how're you?`)       // string

// 같은 걸로 시용 하려면 \ 사용
console.log(typeof 'how\'re you?')

// 역슬래시 \ 
/**
 *  \n 줄바꿈
 *  \' -> '
 *  \\ -> \
 * 
 */