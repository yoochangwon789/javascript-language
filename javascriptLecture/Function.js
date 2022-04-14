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