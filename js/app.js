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

const winning_soud = new Audio("../audio/winner.mp3")
const spinning_sound = new Audio("../audio/spinning.mp3")
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
const ref =[{9:'💠'},{8:"💖"},{7:"💖"},{6:
"🛎️"},{5:"🛎️"},{4:'🛎️'},{3:
"🍇"},{2:"🍇"},{1:"🍇"},{0:"🍇"}]

const winning_combinations = [['💠','💠','💠'],['💖','💖','💖'],['🛎️','🛎️','🛎️'],['🍇','🍇','🍇']]

const spinning_symbols = ['💠','💖','🛎️','🍇',]

/*------------------------ Cached Element References ------------------------*/
const pay_btn = document.querySelector("#pay_btn")

const play_btn = document.querySelector("#play_btn")
const withdrawBtn =document.querySelector("#withdraw_btn")
const first_slot=document.querySelector("#s1")
const second_slot=document.querySelector("#s2")
const third_slot=document.querySelector("#s3")

///display numbers
const win_amount = document.querySelector("#win-amount")
const credit_info = document.querySelector("#credit-info")
const bet_step = document.querySelector("#bet-step")
//deposit slip
const deposit = document.querySelector("#deposit")

/*----------------------------- Event Listeners -----------------------------*/

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
  win_amount.innerText=""
  clearSymbols()
  spinning_sound.play()

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
      winAmount(100000)
     winnerSound()
    }
    else if(symbols[0]==="💖" && symbols[1]==="💖" && symbols[2]==="💖"){
      credit_info_inner+=10000
      setTimeout(()=>credit_info.innerText =credit_info_inner,3000)
      credit_info.innerText =credit_info_inner
      console.log('you hit big!400 added')
      win_amount.innerText="$10000"
      winAmount(10000)
      winnerSound()

    }
    else if(symbols[0]==="🛎️" && symbols[1]==="🛎️" && symbols[2]==="🛎️"){
      credit_info_inner+=100
      setTimeout(()=>credit_info.innerText =credit_info_inner,3000)
      credit_info.innerText =credit_info_inner
      console.log('nice sping! 100 points added')
      win_amount.innerText="$100"
      winAmount(100)
      winnerSound()
    }
    else if(symbols[0]==="🍇" && symbols[1]==="🍇" && symbols[2]==="🍇"){
      credit_info_inner+=50
      setTimeout(()=>credit_info.innerText =credit_info_inner,3000)
      credit_info.innerText =credit_info_inner
      console.log('50 points added!')
      win_amount.innerText="$50"
      winAmount(50)
      winnerSound()
     
    }
    else{
      if(credit_info_inner<=0){
        gameOver=true
       win_amount.innerText="Deposit money!"
        console.log("deposit some money!")
        
      }

      else{
        credit_info_inner-=10
        setTimeout(()=>credit_info.innerText = credit_info_inner,3000)
        credit_info.innerText =credit_info_inner
        console.log('10 points deducted')
        lostAmount(10)
          }

      }
      
     
  }
spin()
displayImages(symbols)


}

// display emoji on the slot machine

function displayImages(symbols){

 setTimeout(function(){

  first_slot.classList.remove("animate__animated", "animate__slideOutDown","animate__faster","animate__infinite","infinite")
  return first_slot.innerText= symbols[0]


 },1000)

 setTimeout(function(){
  second_slot.classList.remove("animate__animated", "animate__slideOutDown","animate__faster","animate__infinite","infinite")
  return second_slot.innerText= symbols[1]
 },2000)
 setTimeout(function(){

  third_slot.classList.remove("animate__animated", "animate__slideOutDown","animate__faster","animate__infinite","infinite")
  third_slot.style.setProperty("--animate-duration", "0.2s")
  return third_slot.innerText= symbols[2]
 },3000)


}

//spin the images when game starts

function spin(){


  first_slot.classList.add("animate__animated", "animate__slideOutDown","animate__faster","animate__infinite","infinite")
    first_slot.style.setProperty("--animate-duration", "0.2s")

  second_slot.classList.add("animate__animated", "animate__slideOutDown","animate__faster","animate__infinite","infinite")
  second_slot.style.setProperty("--animate-duration", "0.2s")

  third_slot.classList.add("animate__animated", "animate__slideOutDown","animate__faster","animate__infinite","infinite")
    third_slot.style.setProperty("--animate-duration", "0.2s")


}
function clearSymbols(){
  first_slot.innerHTML= "💠<br>🍇<br>💖<br>🔔"
  second_slot.innerHTML= "🍇<br>🔔<br>💖<br>💠"
  third_slot.innerHTML= "🔔<br>🍇<br>💠<br>💖"
}
//deposit money to play game

function depositMoney(evt){
credit_info_inner=evt.target.value
credit_info.innerText=parseInt(credit_info_inner)
deposit.value=''
}



function bet(){
console.log('betted')
}

function render(){


}
function reset(){
  console.log("withdraw")
  credit_info.innerText=0
  credit_info_inner=0
  gameOver=false
  
}
function lostAmount(amount){
setTimeout(function(){
  if(credit_info_inner>0){

    win_amount.innerText= `✨✨✨✨✨✨✨✨✨$${amount} lost✨✨✨✨✨✨✨✨✨✨`

  } else{
    win_amount.innerText="Out of balance!"
  }
  
},3000)

}

function winAmount(amount){
  setTimeout(function(){
    win_amount.innerText=`✨✨✨✨✨✨✨✨$${amount} won!✨✨✨✨✨✨✨✨✨`
  },3000)
}

function winnerSound(){


  setTimeout(()=>winning_soud.play(),3000)
        
        
          
}