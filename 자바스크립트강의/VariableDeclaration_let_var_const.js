// let 변수 선언
let total = 5000 + 8000 + 10000 + 9000;

// 초기화를 하지 않았을 때 undifined
let empty;
console.log(empty);

// 두번 연달아 선언은 에러
// let test1; let test2

// 변수명은 최대한 자세하고 명확하게 짓자
// 특수문자는 $, _ 사용가능, 한글로도 변수선언 가능
let $_ = '123';
console.log($_);
let 한글 = '위대하다';
console.log(한글);

// undefined 보단 null 로 빈값을 체크하자
let change;
change = undefined;
change = null;
console.log(change);

// var 는 요즘 사용하지 않고, let, const 를 사용한다.
// let 은 값을 변경할 수 있지만 const 는 값을 변경을 하지 못한다.(하지만 바꿀 수 있는 경우가 있다.)
let string1 = '엄청 긴 문자열입니다.';
const string2 = '엄청 긴 문자열입니다.';

// 에러가 난다 바꾸지 못하기 때문 const
// string2 = '바꾼 문자열 입니다.' <- 에러 발생

// const 를 사용해서 선언할 때 무조건 값을 넣어줘야 한다. 넣어주지 않으면 에러 발생
// 이유는 const 자체는 값을 바꾸지 못하는데 선언을 했다가 이 후에 넣어주면 값을 바꾼것이랑 마찬가지가 되기 때문
// const vlaue; <- 옆에 코드는 에러

// var 은 let 이랑 기능은 똑같다
// 그런데 다시 선언이 가능하다. 에러가 나지 않음 let 으로 할 때는 에러가남
// var 은 예약어를 변수 이름으로 선언할 수 있다. 그래서 사용하지 않는다. 나사가 하나 빠진 변수설정 예약어이다.
var varTest = '다시 선언할 수 있습니다.';
var varTest = '다시 선언할 수 있습니다.';
console.log(varTest);

// 연습 a == 3, b == 5 로 만들기
let a = 5;
let b = 3;
let changeA_B;

changeA_B = a;
a = b;
b = changeA_B;
console.log('a : ' + a);
console.log('b : ' + b);
