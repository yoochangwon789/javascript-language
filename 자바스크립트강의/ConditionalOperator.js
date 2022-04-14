// 삼항 연산자 or 조건부 연산자로 불린다.
// 조건식 ? 참일 떄 실행되는 식 : 거짓일 때 실행되는 식
let value = 5 < 0 ? '참입니다.' : '거짓입니다.';
console.log(value);

// 삼항 연산자 안에 또 삼항 연산자를 쓸 수 있다.
let condition1 = true;
let condition2 = false;
let value2 = condition1 ? (condition2 ? '둘 다 참' : 'condition1 만 참') : 'condition1 이 거짓';
console.log(value2);

let condition3 = false;
let condition4 = false;
let value3 = condition3 ? 'condition3 이 참' : (condition4 ? 'condition4 가 참' : '둘 다 거짓');
console.log(value3);

// 연습문제
let cond = true;
switch (cond) {
    case true:
        console.log('참');
        break;
    case false:
        console.log('거짓');
        break;
}

let condRsult = cond ? '참' : '거짓';
console.log(condRsult)