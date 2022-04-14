// 자바스크립트 함수의 관하여
// 함수 선언 방법
function a() {
    console.log('hellow');
    console.log('function');
}
const b = function() {
    return 'b';
};
const c = () => {};

a();
a();
a();

function d() {
    if (false) {
        return;
    }
    console.log('hello');
}

d();

console.log(b());

function arrayTest() {
    return [4, 5];
}

console.log(arrayTest()[0]);
console.log(arrayTest()[1]);
console.log(arrayTest().indexOf(2));

// 매개변수 및 인수
function parameterTest(parameter, hello) {
    console.log(parameter);
    console.log(hello);
}

parameterTest('argument', 'hello');

// 매개변수와 인수의 개수가 일치하지 않아도 된다.
// 값이 없는 것은 기본값 undifined 이다.
function helloParameter(w, x, y, z) {
    console.log(w, x, y, z);
    console.log(arguments);
}

helloParameter('Hello', 'Parameter', "Argument");

// 람다 함수
// 중괄호와 리턴이 있으면 생략 가능!!
const lambda = (x, y, z) => {
    return x * y * z;
}
const lambda2 = (x, y, z) => x * y * z;

console.log(lambda(1, 2, 3));
console.log(lambda2(1, 2, 3));

function minus1(x, y) {
    const a = 100;
    return (x - y) * a;
}

const a = 100;
function minus2(x, y) {
    return (x - y) * a;
}

console.log(minus1(5, 3));
console.log(minus2(5, 3));