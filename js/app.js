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
let credits, coins_played, winner_paid, symbols
let results =[ ]
let credit_info_inner = 0
let gameOver = false
// key value pairs of numbers with symbols
// const ref =[{9:'bar'},{8:"7"},{7:"7"},{6:
// "bell"},{5:"bell"},{4:'bell'},{3:
// "grape"},{2:"grape"},{1:"grape"},{0:"grape"}]


// // winning combinations
// const winning_combinations = [['bar','bar','bar'],['7','7','7'],['bell','bell','bell'],['grape','grape','grape']]

// key value pairs of numbers with symbols
const ref =[{9:'💠'},{8:"7️⃣"},{7:"7️⃣"},{6:
"🛎️"},{5:"🛎️"},{4:'🛎️'},{3:
"🍇"},{2:"🍇"},{1:"🍇"},{0:"🍇"}]

const winning_combinations = [['💠','💠','💠'],['7️⃣','7️⃣','7️⃣'],['🛎️','🛎️','🛎️'],['🍇','🍇','🍇']]

const spinning_symbols = ['💠','7️⃣','🛎️','🍇',]

/*------------------------ Cached Element References ------------------------*/
const pay_btn = document.querySelector("#pay_btn")
const bet_btn = document.querySelector("#bet_btn")
const play_btn = document.querySelector("#play_btn")
const withdrawBtn =document.querySelector("#withdraw_btn")
const first_slot=document.querySelector("#s1")
const second_slot=document.querySelector("#s2")
const third_slot=document.querySelector("#s3")

///display numbers
const bet_info = document.querySelector("#bet-info")
const credit_info = document.querySelector("#credit-info")
const bet_step = document.querySelector("#bet-step")
//deposit slip
const deposit = document.querySelector("#deposit")

/*----------------------------- Event Listeners -----------------------------*/
// pay_btn.addEventListener("click",payChart)
// bet_btn.addEventListener("click",bet)
play_btn.addEventListener("click",playGame)
withdrawBtn.addEventListener("click",reset)

deposit.addEventListener("change",depositMoney)

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  if(!gameOver){
    symbols =[null,null,null]
    
    //  symbols =['bar','bar','bar']
    //  symbols =['7','7','7']
    //  symbols =['bell','bell','bell']
    //  symbols =['grape','grape','grape']

   



  }
  else{
    console.log('deposit money!')
  }


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
   
      // win(symbols,winning_combinations)
      
  }
  prize(symbols)
  // win(symbols,winning_combinations)
  console.log(symbols)
    // win(symbols,winning_combinations)
   }
  //  const winning_combinations = [['bar','bar','bar'],['7','7','7'],['bell','bell','bell']]
  // symbols =[null,null,null]


  //
 
//  function win(symbols,winning_combinations){


//   if (winning_combinations.filter(arr => arr.toString() == symbols).length) {
//     console.log('winner')

//     } else {
//     console.log('loser')
//     }

  
//   // if(winning_combinations.find(symbols)){
//   //   return true
//   // }else{
//   //   return false
//   // }
// }


///Assign winning values else assign a lost value

function prize(symbols){
  if(!gameOver){
    if(symbols[0]==="💠" && symbols[1]==="💠" && symbols[2]==="💠"){
      credit_info_inner+=100000
      setTimeout(()=>credit_info.innerText =credit_info_inner,3000)
      credit_info.innerText =credit_info_inner
      console.log('its a jackpot! 1000 added')
    }
    else if(symbols[0]==="7️⃣" && symbols[1]==="7️⃣'" && symbols[2]==="7️⃣"){
      credit_info_inner+=400
      setTimeout(()=>credit_info.innerText =credit_info_inner,3000)
      credit_info.innerText =credit_info_inner
      console.log('you hit big!400 added')
    }
    else if(symbols[0]==="🛎️" && symbols[1]==="🛎️" && symbols[2]==="🛎️"){
      credit_info_inner+=100
      setTimeout(()=>credit_info.innerText =credit_info_inner,3000)
      credit_info.innerText =credit_info_inner
      console.log('nice sping! 100 points added')
    }
    else if(symbols[0]==="🍇" && symbols[1]==="🍇" && symbols[2]==="🍇"){
      credit_info_inner+=50
      setTimeout(()=>credit_info.innerText =credit_info_inner,3000)
      credit_info.innerText =credit_info_inner
      console.log('10 points added!')
    }
    else{
      if(credit_info_inner<=0){
        gameOver=true
        console.log("deposit some money!")
      }

      else{
        credit_info_inner-=10
        setTimeout(()=>credit_info.innerText = credit_info_inner,3000)
        credit_info.innerText =credit_info_inner
        console.log('10 points deducted')
          }

      }
      
     
  }

 displayImages(symbols)


}

// display emoji on the slot machine
function displayImages(symbols){

 setTimeout(function(){

 




  return first_slot.innerText= symbols[0]


 },1000)

 setTimeout(function(){
  return second_slot.innerText= symbols[1]
 },2000)
 setTimeout(function(){
  return third_slot.innerText= symbols[2]
 },3000)






}

function spin(){
  for(i=0;i<spinning_symbols.length;i++){
    first_slot.innerText=spinning_symbols[i]
    second_slot.innerText=spinning_symbols[i]
    third_slot.innerText=spinning_symbols[i]
  }


}


function depositMoney(evt){
credit_info_inner=evt.target.value
credit_info.innerText=parseInt(credit_info_inner)
deposit.value=''
}

  //  for(items of winning_combinations){
  //    for(let i=0;i<3; i++){

  //      if(symbols[i]===items[i]){
         
  //        console.log()
  //        return true
  //       //  return winning_combinations.indexOf(items)
  //      }
  //     else{
  //       console.log('lost')
  //     }
         
  //      }
      
  //    }
  //  }
 


function bet(){
console.log('betted')
}

function render(){


}
function reset(){
  console.log("withdraw")
  credit_info.innerText=0
  gameOver=false
  
}