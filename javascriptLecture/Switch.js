// switch 문
let value = 'A';
switch (value) {
    case 'A':
        console.log('A');
        console.log('B');
}

// switch 문은 일치하는 case 문을 발견하면 일치 여부와 상관없이 그 아래 case 들의 동작문을 모두 실행한다.
// 따라서 원하는 결과만 얻으려면 수동으로 case 에서 빠져나와야 하는데 이 때 break 문이 사용된다.
let value2 = 'B';
switch (value2) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
    default:
        console.log('아무것도 일치하지 않음');
}

let fruit = '사과';
switch (fruit) {
    case '배':
        console.log('배 입니다.');
        break;
    case '사과':
        console.log('사과 입니다.');
        break;
    case '포도':
        console.log('포도 입니다.');
        break;
    default:
        console.log('일치하는 과일이 없습니다.');
}