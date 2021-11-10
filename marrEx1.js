//2020년도 분기별 매출
const arr = [
    [90, 87, 140], //1,2,3월 매출
    [120, 130, 150], //4,5,6월 매출
    [180, 240, 200], //7,8,9월 매출
    [180, 140, 190] //10,11,12월 매출
]
//몇 분기의 데이터, 몇 분기의 평균, 가장 매출이 좋은 분기 등등 사용자가 필요하는 정보들

// 매출이 가장 좋은 분기
// 1-각 분기별 매출 평균 // 아까 사용했던 평균을 또 써먹을 수 있겠네?(재사용) 그런 기능을 있으면 좋겠다.. 그래서 나온 개념이 함수라고 해
const parr = [] //4-분기별 평균 배열
for (let i = 0; i < arr.length ; i++) { //arr[i]가 숫자가 아니라 배열이 됨
    const tempArr = arr[i]
    console.log(tempArr)

    // 2-분기별 평균: tempArr[0]+tempArr[1]+tempArr[2] / temp.length
    let sum = 0
    for (let j = 0; j < tempArr.length ; j++) {
        sum += tempArr[j] // 분기 안에 있는 월별 합
    }
    // console.log(sum)
    const tempAvg = (sum/tempArr.length).toFixed(2)
    console.log(tempAvg)
    //3-분기별 평균을 배열에 보관해야해 : 계속 유지되어야 하는 데이터 = 밖에 & 전체 보관해야 하는 데이터니 for루프 제일 밖에
    //5-배열에 넣는 것 push
    parr.push(parseFloat(tempAvg)) // 6-문자열을 소수로 변경해서 넣어주자
}
console.log(parr) // 데이터는 숫자인데 문자열이 되었어 '123.11' why? .toFixed 때문에!

//7-parr로 매출 평균이 가장 좋은 "분기"
//7.1-최고 매출 금액 찾기
let max = 0
let period = 0 //7.2-우리에게 필요한 분기 = index 값 찾기 = period
for (let i = 0; i < parr.length ; i++) {
    if(parr[i] > max){
        max = parr[i]
        period = i
    }
}
console.log(`MAX: ${max}`)
console.log(`PERIOD: ${period+1}분기입니다.`)





//최고 매출 월

//최저 매출 분기와 최고 매출 분기 차
