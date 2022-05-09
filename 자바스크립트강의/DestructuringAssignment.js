// 구조분해 할당
const obj = {
    a: 1,
    b: 2,
}

const { a1, b1 } = obj;
console.log(a1);
console.log(b1);

// a, c, e 구조분해 할당하기
const quizObj = {
    a: 'hello',
    b: {
        c: history,
        d: { e: 'wow' },
    },
};

// 구조분해 할당할 때 b: {} 이렇게 객체선언하면 변수로 사용불가능하다.
const { a, b: { c, d: {e} } } = quizObj;
// const a = obj.a;
// const c = obj.b.c;
// const e = obj.b.d.e;