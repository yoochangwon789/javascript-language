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