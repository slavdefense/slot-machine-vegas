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
let credits, coins_played, winner_paid
let results =[ ]

const ref =[{9:'bar'},{8:"7"},{7:"7"},{6:
"bell"},{5:"bell"},{4:'bell'},{3:
"grape"},{2:"grape"},{1:"grape"},{0:"grape"}]



const ourNum =[null,null,null]


/*------------------------ Cached Element References ------------------------*/
const pay_btn = document.querySelector("#pay_btn")
const bet_btn = document.querySelector("#bet_btn")
const play_btn = document.querySelector("#play_btn")
const withdrawBtn =document.querySelector("#withdraw_btn")
const first_slot=document.querySelector("#slot-1")
const second_slot=document.querySelector("#slot-2")
const third_slot=document.querySelector("#slot-3")

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

let numberFirst = Math.floor(Math.random()*10)
let numberSecond = Math.floor(Math.random()*10)
let numberThird = Math.floor(Math.random()*10)
console.log(numberFirst)
// ourNum[0]=numberFirst
// ourNum[1]=numberSecond
// ourNum[2]=numberThird
// console.log (ourNum)
render(ref,numberFirst,numberSecond,numberThird)
// first_slot.innerText=numberFirst
// second_slot.innerText=numberSecond
// third_slot.innerText=numberThird

}


function render(ref,numberFirst,numberSecond,numberThird){
  
  for(item of ref){
    for(let [key,value] of Object.entries(item)){
      // console.log(`key:${key} value:${value}`)
      if(parseInt(key)===numberFirst){
        console.log(value)
        
      }
      if(parseInt(key)===numberSecond){
        console.log(value)
      }
      if(parseInt(key)===numberThird){
        console.log(value)
      }
    }
  }
   }
 
 
function bet(){
console.log('betted')
}

function render(){


}
function reset(){
  console.log("withdraw")
}