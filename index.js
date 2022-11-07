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


//  let countEl = document.getElementById("count-el")
//  console.log(countEl)
//  let count = 0

//  function increment() {
//   	count = count + 1
//   	countEl.innerText = count
//   }


// function save() {
// 	console.log(count)
// }


// let username = "john"
// let message = 'you have 3 new notifications'
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)
// console.log(message + ", " + username + "!")

// let name = "Tchinonso"
// let greetings = "Hi, my name is "
// let myGreetings = greetings + " " + name
// console.log(myGreetings)

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Tchinonso"
// let greetings = "Hi , how are you? "
// welcomeEl.innerText = greetings + name

//welcomeEl.innerText = welcomeEl.innerText + "@"
// welcomeEl.innerText += "#"
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
  console.log(countEl)
  let count = 0

  function increment() {
   	count += 1
   	countEl.textContent = count
   }


 function save() {
	 let countStr = count + " - "
	 
	 //saveEl.innerText += countStr
	 saveEl.textContent += countStr
	 countEl.textContent = 0
	 count = 0
 }