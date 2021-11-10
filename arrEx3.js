
const arr = [54,22,14,64,95,85]

//평균 → 모든 점수의 합 / 개수
let sum = 0 // 계속 써먹어야하는 변수는 밖에 선언
for (let i = 0; i < arr.length ; i++) {
    // let sum = 0 // 루프를 돌 때마다 변수가 생김 .let은 {} 스코프/범위가 정해짐. 잠깐 써먹을 변수는 안에 선언
    sum = sum + arr[i] // arr[i]점수
    console.log(`SUM: ${sum}`)
}

let avg = (sum / arr.length).toFixed(3)
console.log("AVG: " + avg)

// 첫 데이터와 두번째 데이터 비교 → 첫번째 데이터를 기준으로 비교하는데 첫번째 데이터끼리 비교안하고 시작하는 방법1(bubble sort),
// 나올 수 없는 점수(-1), 제일 큰 점수(100)과 비교 방법법

// 최저점수 by 방법2
let min = 101 // 가상 점수

for (let i = 0; i < arr.length ; i++) {
    const score = arr[i] // 점수
    //if score가 min보다 작으면 swop (값을 바꿔줌) → min은 더 작은 숫자로 바꿔줌
    //값이 나오면 if대신 삼항연산자도 가능
    if(score < min){
        min = score // 54 loading, copy, min에 save
    }
}

console.log(`Min: ${min}`)

// 최고점수
let max = -1

for (let i = 0; i < arr.length; i++) {
    const score = arr[i] //score 를 const 로 묶어서 for루프에 묶여 있으니 충돌 X
    if(score > max){
        max = score
    }
}
console.log(`MAX: ${max}`)

