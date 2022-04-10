// 자바스크립트 조건문
if (true) {
    console.log('조건문');
}

let condition = true;
if (condition) {
    console.log('Hello, if!');
}

// undifined 출력
if (false) {
    console.log("Hello, if!");
    console.log("Hello, again!");
}

let value = '사과';
let condition2 = true;
if (condition2) {
    value = '바나나';
    console.log(value);
}
console.log(value);

if (false) {
    console.log("false log");
} else {
    console.log('true log');
}

let testNumber = 100;
if (testNumber > 101) {
    console.log('testNumber : ' + testNumber + ' 입니다.');
} else if (testNumber == 100) {
    console.log('testNumber : ' + testNumber + ' 입니다.');
} else {
    console.log(testNumber)
}

const score = 30;
if (score > 90) {
    console.log('A+');
} else if (score <= 90 && score >= 80) {
    console.log('A');
} else if (score <= 79 && score >= 70) {
    console.log('B+');
} else if (score <= 69 && score >= 60) {
    console.log('B');
} else if (score <= 59 && score >= 50) {
    console.log('C+')
} else if (score <= 49 && score >= 40) {
    console.log('D')
} else {
    console.log('F')
}
