//document.getElementById('count-el').innerText = 5

//let count = 0
//console.log(count)

//  let myAge = 27
//  console.log(myAge)

// let myAge = 27
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let bonusPoint = 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)

// const increment = () => {
// 	console.log('button was clicked');
// }

// let hood = () => {
// 	console.log(42)
// }
// hood()

// let lap1 = 31
// let lap2 = 33
// let lap3 = 36

// function myLap() {
// 	console.log(lap1 + lap2 + lap3 )
// }
// myLap()

// let lapsCompleted = 0

// function lapsTime() {
// 	lapsCompleted = lapsCompleted + 1
// }

// lapsTime()
// lapsTime()
// lapsTime()

// console.log(lapsCompleted)


let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0

function increment() {
 	count = count + 1
 	countEl.innerText = count
 }


