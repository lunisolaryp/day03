
const pointArr = [
    {name:'A', xpos:3, ypos:10},
    {name:'B', xpos:7, ypos:6},
    {name:'C', xpos:3, ypos:2},
    {name:'D', xpos:6, ypos:2},
]  // 객체(메모리 차지하는 모든 것) → 구조화된 객체 = 객체 리터럴 Object literal

const target = {xpos:6, ypos:3} //2-내가 있는 좌표

// 1-각 좌표들 호출
// 1.1-배열 요소들 호출 방법1 fori
// for (let i = 0; i < pointArr.length ; i++) {
//     const point = pointArr[i]
//     console.log(point)
// }
// = forof 루프 (java에도 있음)
// 1.2-배열 요소들 호출 방법2 forof
for (const pointArrElement of pointArr) {
    console.log(pointArrElement)
    // 2-target과 pointArrElement 두 지점 거리 계산 = 제곱 Math.pow + 루트 Math.sqrt()
    const distance = Math.sqrt(
        Math.pow(pointArrElement.xpos-target.xpos,2)+
        Math.pow(pointArrElement.ypos-target.ypos,2))
    console.log(distance) // pointArrElement 가 const고 for 루프 안에서 선언되었으니 distance도 for루프 안에서 사용해야해
}

// 3-target 기준 가까운 거리에서 먼 거리로 "정렬" sortEx 참고
// 두 지점을 임의로 a,b라고 하고 A와 target 거리, B와 target 거리 비교 해서 작은 것을 앞으로
pointArr.sort((a,b) => {
    const distanceA = Math.sqrt(Math.pow(a.xpos-target.xpos,2)+Math.pow(a.ypos-target.ypos,2))
    const distanceB = Math.sqrt(Math.pow(b.xpos-target.xpos,2)+Math.pow(b.ypos-target.ypos,2))

    return distanceA - distanceB
})

console.log(pointArr)

