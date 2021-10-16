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
// key value pairs of numbers with symbols
const ref =[{9:'bar'},{8:"7"},{7:"7"},{6:
"bell"},{5:"bell"},{4:'bell'},{3:
"grape"},{2:"grape"},{1:"grape"},{0:"grape"}]


// winning combinations
const winning_combinations = [['bar','bar','bar'],['7','7','7'],['bell','bell','bell'],['grape','grape','grape']]

const symbols =['bell','bell','bell']


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

//call arr function
display(ref,numberFirst,numberSecond,numberThird)
// first_slot.innerText=numberFirst
// second_slot.innerText=numberSecond
// third_slot.innerText=numberThird

}

//Match the random numbers with an icon to display in the slot machine
function display(ref,numberFirst,numberSecond,numberThird){
  
  for(item of ref){
    for(let [key,value] of Object.entries(item)){
      // first random number matched to a symbol
      if(parseInt(key)===numberFirst){
        symbols[0]=value
        console.log(symbols)
      }
      //second random number matched to a symbol
      if(parseInt(key)===numberSecond){
        symbols[1]=value
      }
      //third random number matched to a symbol
      if(parseInt(key)===numberThird){
        symbols[2]=value
      }
    }
    
  }
   }
 
 function win(symbols,winning_combinations){
   for(items of winning_combinations){
     for(let i=0;i<3; i++){
       if(symbols[i]===items[i]){
         return winning_combinations.indexOf(items)
       }
       else{
         console.log('looser')
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