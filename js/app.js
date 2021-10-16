// Create  3 random numbers from 0 to 10 
// Define our click handler to a play button, messages, bet amount,remaining credit, pay chart etc.
// Allow players add credit card info and display the amount added. 
// Create 3 combination of bet increasement.
// Create all credit to be bet.
//Define a time interval of 1 second for the first number, 2 second for the second number and 3 seconds for the third number
//Attact svg images to each number 
//Display  svg images instead of the corresponding numbers
// Define conditional statements for any winning combinations
// Pay credits if winning combinations are satisfied.
// Reduce credits if winning combinations are not satisfied.
//Create and display a pay table at the click of a button
// Create options to mute/turn on sound at a click of a button
// Create cash out option which resets all the values.


/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const pay_btn = document.querySelector("#pay_btn")
const bet_btn = document.querySelector("#bet_btn")
const play_btn = document.querySelector("#play_btn")
const withdrawBtn =document.querySelector("#withdraw_btn")


/*----------------------------- Event Listeners -----------------------------*/
pay_btn.addEventListener("click",payChart)
bet_btn.addEventListener("click",bet)
play_btn.addEventListener("click",playGame)
withdrawBtn.addEventListener("click",reset)
/*-------------------------------- Functions --------------------------------*/
init()

function init(){
}

function payChart(){
console.log('payChart')
}

function playGame(){
console.log('played')
let numberFirst=Math.floor(Math.random()*10)+1
let numberSecond= Math.floor(Math.random()*10)+1
let numberThird= Math.floor(Math.random()*10)+1

console.log(numberFirst)
console.log(numberSecond)
console.log(numberThird)

}
function bet(){
console.log('betted')
}
function render(){
  
}
function reset(){
  console.log("withdraw")
}