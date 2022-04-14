// 객체 리터럴
// 변수의 중괄호를 선언해 여러가지 변수를 선언한다.

/**
 * const 객체 = {
 *  속성이름: 속성값,
 *  속성이름: 속성값,
 *  속성이름: 속성값
 * }
 */

const changwon = {
    name: '유창원',
    year: 1996,
    month: 10,
    date: 1,
    gender: 'M',
    'a c': '123'
};

console.log(changwon.name);
console.log(changwon.year);
console.log(changwon.month);
console.log(changwon.date);
console.log(changwon.gender);
console.log(changwon["a c"]);

// 속성 추가하기
function hello() {}
hello.a = 'really?';
const array = [];
array.b = 'wow';
console.log(hello.a);
console.log(array.b);

// 메서드 : 객체의 속성 값으로 함수를 넣었을 때 이 속성을 특별히 메서드라고 한다.
const debug = {
    log: function(value) {
        console.log(value);
    },
};
debug.log('Hello, method');