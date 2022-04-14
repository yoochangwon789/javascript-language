// 반복문
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

for (i = 0; i < 3; i++) {
    console.log(i);
}

while(true) {
    if (i === 5) {
        console.log('i === 5')
        break;
    } 
    i++;
}

// continue 는 다음줄을 실행안하고 바로 다음 반복으로 진행
let j = 0;
while (j < 10) {
    j++;
    if (j % 2 === 0) continue;
    console.log(j);
}