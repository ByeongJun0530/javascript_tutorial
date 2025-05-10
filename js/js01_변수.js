// js : 자바스크립트 (웹에서 동적 움직임을 주기 위한 프로그래밍 언어)
// C:\Users\dynam\AppData\Roaming\npm 폴더가 있어야 정상 동작 ( 없으면 폴더 생성)

console.log("Hello JS!")

// 프로그래밍 언어 : 변수 + 함수 + 자료구조 
// 변수 : 저장공간, 데이터를 저장하는 공간 
// 변수를 생성하기 위해선 var, let, const 
// var : 옛날 변수 생성 방법 
// let : 2015년 자바스크립트 신문법 이후 변수 생성 방법
// const : 상수 (한 번 값을 정하면 못바꾸는 특징) 
var 변수이름 = 123
let 변수2 = 123
const 상수변수 = '한 번 정하면 변경불가'

console.log(변수2)
변수2 = 'Hello JS!'
console.log(변수2)
console.log(상수변수)

// 변수는 type(자료형)이 있다.
// undefined, null, number, string, array, object, boolean
let 정해지지않음 = undefined
let 비어있음 = null
let 숫자 = 23          // +, -, *, / 
let 문자열 = "글자"      // + 만 가용가능 
let 불리언 = false      // false, true (참거짓 판단할 때)
let 배열 = [1, 3, 6, "아무거나", true, false]
let 객체 = {
    '키워드' : '값',
    'A' : '에이', 
    'B' : '비'
}





