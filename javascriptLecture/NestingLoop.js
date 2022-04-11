// 중첩 반복
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(i, j);
    }
}

for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) continue;
    for (let j = 0; j < 5; j++) {
        if (j % 2 === 0) continue;
        for (let k = 0; k < 5; k++) {
            if (k % 2 === 0) continue;
            console.log(i, j, k);
        }
    }
}

// 구구단 출력 결과에 짝수가 하나도 나오지 않게
for (let i = 1; i <= 9; i++) {
    if (i % 2 === 0) continue;
    for (let j = 1; j <= 9; j++) {
        if (j % 2 === 0) continue;
        console.log(i + " * " + j + " = " + i * j);
    }
}

// 별찍기
// repeat(n) n 값의 따라서 문자열을 반복한다.
for (let i = 0; i < 5; i++) {
    console.log('*'.repeat(i + 1));
}

for (let i = 5; i > 0; i--) {
    console.log('*'.repeat(i));
}

let j = 5
for (let i = 0; i < 5; i++) {
    console.log('*'.repeat(j));
    j--;
}

for (let i = 0; i < 5; i++) {
    console.log('*'.repeat(5 - i));
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log('*'.repeat(i));
}

for (let i = 10; i > 0; i--) {
    if (i % 2 === 0) continue;
    console.log('*'.repeat(i));
}

let k = 0;
for (let i = 5; i > 0; i--) {
    console.log(' '.repeat(k) + '*'.repeat(i));
    k++;
}

let m = 4;
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(' '.repeat(m) + '*'.repeat(i));
    m--;
}

let star = '';
for (let i = 0; i < 10; i++) {
    for (let j = 0; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star)

let star1 = '';
let m1 = 4;
for (let i = 0; i < 10; i++) {
    if (i % 2 != 0) {
        star1 += ' '.repeat(m1);
        
        for (let j = 1; j <= i; j++) {
            star1 += '*';
        }
    
        star1 += '\n'
        m1--;
    }
}
console.log(star1);

let star2 = '';
for (let i = 0; i < 5; i++) {
    for (let j = 4; j > i; j--) {
        star2 += ' ';
    }
    for (let k = 0; k <= (i * 2); k++) {
        star2 += '*';
    }
    star2 += "\n";
}
console.log(star2);

let star3 = '';
for (let i = 0; i < 9; i++) {
    if (i < 5) {
        for (let j = 4; j > i; j--) {
            star3 += ' ';
        }
        for (let k = 0; k <= (i * 2); k++) {
            star3 += '*';
        }
    } else {
        for (let l = 4; l < i; l++) {
            star3 += ' ';
        }
        for (let n = 17; n > i * 2; n--) {
            star3 += '*';
        }
    }
    
    star3 += "\n";
}
console.log(star3);