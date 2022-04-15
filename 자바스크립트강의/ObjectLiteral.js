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


// 객체 간의 비교
// 객체 끼리 비교하면 무조건 false
console.log({} === {});

// 하지만 객체인지 비교하고 싶다면 기존 객체를 변수에 저장해 두어야 한다.
// a 의 객체를 한번만 쓰고 돌려서 썻기 때문에 true
// {} 을 사용하는 순간 새로운 객체가 생성되므로 절대 같을 수 없다.
const a = {
    name: 'changwon'
}
const array2 = [1, 2, a];
console.log(a === array2[2]);

const a1 = {
    name: 'changwon'
}
const b1 = a1;
console.log(a1 === b1, b1.name);

// '유' 의 접근하려면 어떻게 해야하는가
const changwon1 = {
    name: {
        first: '창원',
        last: '유',
    },
    gender: 'm',
};
console.log(changwon1.name.last);
console.log(changwon1['name']['last']);