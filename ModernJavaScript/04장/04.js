// 여러가지 변수 선언 법
var userId = 1;
var userName = 'Lee';

var user = { id : 1, name : 'Lee'};

var users = [
    { id : 1, name : 'Lee'},
    { id : 2, name : 'Kim'}
];

var result = 10 + 20
result = 40

var boolean = true

console.log(boolean);
console.log(result);
console.log(user.name);
console.log(users[0].id);
console.log(users[0].name);

// 헝가리언 케이스(typeHungrianCase)
var strFirstName;
var $elem = document.getElementById('myId'); // DOM 노드
var observable$ = fromEvent(document, 'click') // RxJS 옵저버블

