
let flag  // undefined = 변수는 존재하나 데이터는 할당X

if(!flag){
    console.log(".........undefined")
}

let flag2 = false

if(1){
    console.log(".....undefined or false")
}// 1 true 0 false

let flag3 = null // null 껍데기만 있는 리모컨(내용물X)

if(!flag3){
    console.log(".....undefined or false or check null")
}

// !연산자(not)가 undefined도, false도, null도 걸러낼 수 있음
// 그러니까,,, und, fal,null이 !만나면 true..?