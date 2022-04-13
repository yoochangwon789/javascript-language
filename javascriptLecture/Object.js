// 객체의 관하여
// const 는 엄밀한상수 선언 인데 왜 값을 바꿀 수 있는가 ? 배열 이나 객체의 내부는 변경이 가능하지만 배열 자체나 객체의 자체를 변경하는 건 불가능
// 처음에만 = 을 쓸 수 있고 다음 부터는 가능하다 값의 재할당이 불가능
const fruit = ['사과', '오렌지', '배', '딸기'];
// fruit = [1, 2, 3]; 불가능
fruit.push('포도'); // 가능
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);

const everything = ['사과', 1, undefined, true, '배열', null];
const duplicated = ['가', '가', '가', '가', '가'];
const empty = [];
const arrayOfArray = [[1, 2, 3], [1, 2]];

// 빈 값도 유요한 값이기 때문에 요소 개수를 실 때 포함 된다.
const emptyValue = [null, undefined, false, '', NaN];
console.log(emptyValue.length);
console.log(emptyValue[emptyValue.length - 1]);

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

const arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 3]);

// 배열 요소 추가 하기
const target = [1, 2, 3, 4, 5];
target[5] = 6;
target[target.length] = 7;
target.push(8);
console.log(target[target.length - 1]);
console.log(target);

// 배열 가장 앞의 요소 추가
target.unshift(0);
console.log(target);

// 배열 에서 마지막 요소 제거
target.pop();
console.log(target);

// 배열에서 첫 번째 요소 제거
target.shift();
console.log(target);

// 중간 요소 제거
// splice(1, 1) 처음 파라미터는 인덱스 값, 두 번째 파라미터는 선택된 인덱스로부터 몇개를 지울 것인가. 1 이므로 선택된 인덱스를 포함한 1개를 지운다.
target.splice(1, 1);
console.log(target);

target.splice(1, 2);
console.log(target);

// 첫 번째 파라미터만 대입하면 인덱스를 포함한 끝까지 삭제한다.
target.splice(1);
console.log(target);

// splice 를 이용해서 지정한 값들을 지우고 그 뒤에 파라미터의 내가 넣고싶은 값을 넣으면 지워진 값들 사이에 값을 넣을 수 있다.
const target2 = ['가', '나', '다', '라', '마', '바'];
target2.splice(1, 3, '타', '파');
console.log(target2);

// 한개도 안지우고 값을 끼워넣을 수 있다.
target2.splice(2, 0, '하');
console.log(target2);

// includes() 함수를 이용해서 값 찾기 있으면 true 없으면 false
const value = ['가', '나', '다', '라', '마'];
const result1 = value.includes('다');
const reuslt2 = value.includes('하');
console.log(result1, reuslt2);

// 값이 몇 번째 index 의 값인지 확인할 수 있다. indesOf 와 lastIndesOf 기능
const valueIndex = [2, 2, 3, 4, 5, 7, 8, 9, 3];
const indexResult1 = valueIndex.indexOf(3); // 가장 앞에서 가까운 요소를 반환
const indexResult2 = valueIndex.lastIndexOf(3); // 가장 뒤에서부터 찾음
const indexReuult3 = valueIndex.indexOf('가') // 값 없으면 -1 반환
console.log(indexResult1, indexResult2, indexReuult3);

let i = 0
while (i < valueIndex.length) {
    console.log('valueIndex['+ i +'] : ' + valueIndex[i]);
    i++;
}

// '라' 제거하기 index, splice 만 사용
const raArray1 = ['가', '라', '다', '라', '마', '라'];
// raArray.indexOf('라');
// raArray.splice(1, 1);
// console.log(raArray);
// raArray.indexOf('라');
// raArray.splice(2, 1);
// console.log(raArray);
// raArray.indexOf('라');
// raArray.splice(3, 1);
// console.log(raArray);

while (raArray1.indexOf('라') > -1) {
    raArray1.splice(raArray.indexOf('라'), 1);
}
console.log(raArray1);

const raArray2 = ['가', '라', '다', '라', '마', '라'];
let index = raArray2.indexOf('라');
while (index > -1) {
    raArray2.splice(index, 1);
    index = raArray2.indexOf('라');
}
console.log(raArray2);

const raArray3 = ['가', '라', '다', '라', '마', '라'];
for (let i = 0; i < raArray3.length; i++) {
    if (raArray3[i] === '라') {
        raArray3.splice(i, 1);
    }
}
console.log(raArray3);