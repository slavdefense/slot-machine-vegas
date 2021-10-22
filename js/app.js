// Create  3 random numbers from 0 to 10 
// Define our click handler to a play button, messages, bet amount,remaining credit, pay chart etc.
// Allow players add credit card info and display the amount added. 
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
const entrance_sound = new Audio("../audio/sepultura.mp3")
const winning_soud = new Audio("../audio/winner.mp3")
const spinning_sound = new Audio("../audio/spinning.mp3")
const jackpot_sound = new Audio("../audio/aceofspadesmotor.mp3")
const withdraw = new Audio("../audio/withdraw.mp3")
const no_money = new Audio("../audio/noMoneyBtn.mp3")

/*---------------------------- Variables (state) ----------------------------*/
let credits, coins_played, winner_paid, symbols
let results =[ ]
let credit_info_inner = 0
let gameOver = false
let sound =true

// key value pairs of numbers with symbols
const ref =[{9:'♠️'},{8:"💖"},{7:"💖"},{6:
"🛎️"},{5:"🛎️"},{4:'🛎️'},{3:
"🍇"},{2:"🍇"},{1:"🍇"},{0:"🍇"}]

//Define winning combination for the game
const winning_combinations = [['♠️','♠️','♠️'],['💖','💖','💖'],['🛎️','🛎️','🛎️'],['🍇','🍇','🍇']]

//an array of symbols that spins each directly connected with the generated random numbers
const spinning_symbols = ['♠️','💖','🛎️','🍇',]

/*------------------------ Cached Element References ------------------------*/
const pay_btn = document.querySelector("#pay_btn")

const play_btn = document.querySelector("#play_btn")
const withdrawBtn =document.querySelector("#withdraw_btn")
const first_slot=document.querySelector("#s1")
const second_slot=document.querySelector("#s2")
const third_slot=document.querySelector("#s3")
const music = document.querySelector("#music")

///display numbers
const win_amount = document.querySelector("#win-amount")
const credit_info = document.querySelector("#credit-info")
const bet_step = document.querySelector("#bet-step")

//deposit slip
const deposit = document.querySelector("#deposit")
const pay_chart = document.querySelector(".paychart")

/*----------------------------- Event Listeners -----------------------------*/

// bet_btn.addEventListener("click",bet)
play_btn.addEventListener("click",playGame)
withdrawBtn.addEventListener("click",reset)
deposit.addEventListener("change",depositMoney)
pay_btn.addEventListener("click",payChartInfo)
music.addEventListener("click",turnoffSound)
/*-------------------------------- Functions --------------------------------*/

//initializing init function 
init()

function init(){
  if(credit_info_inner>0){
    gameOver=false
  }
  if(!gameOver){
    symbols =[null,null,null]
  }
  else{
    console.log('deposit money!')
  }  
}

// this function gets called when the player clicks play button
function playGame(){
  win_amount.innerText=""
  clearSymbols()

  if(sound){
    spinning_sound.play()
  }
     let numberFirst = Math.floor(Math.random()*10)
     let numberSecond = Math.floor(Math.random()*10)
     let numberThird = Math.floor(Math.random()*10)

//call arr function
      display(ref,numberFirst,numberSecond,numberThird)
}
//Match the random numbers with an emoji to display in the slot machine

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
  }
  prize(symbols)
  
   }

///function prize() pulls the symbols array and checks any winning condition is met. 

function prize(symbols){

if(credit_info_inner>0){
  gameOver=false
}

  if(!gameOver){
    if(symbols[0]==="♠️" && symbols[1]==="♠️" && symbols[2]==="♠️"){
      credit_info_inner+=100000
      setTimeout(()=>credit_info.innerText =credit_info_inner,3000)
      setTimeout(()=>jackpot_sound.play() =credit_info_inner,3000)
      winAmount(100000)
      winnerSound()
    }
    else if(symbols[0]==="💖" && symbols[1]==="💖" && symbols[2]==="💖"){
      credit_info_inner+=10000
      setTimeout(()=>credit_info.innerText =credit_info_inner,3000)
      win_amount.innerText="$10000"
      winAmount(10000)
      winnerSound()

    }
    else if(symbols[0]==="🛎️" && symbols[1]==="🛎️" && symbols[2]==="🛎️"){
      credit_info_inner+=100
      setTimeout(()=>credit_info.innerText =credit_info_inner,3000)
      console.log('nice sping! 100 points added')
      win_amount.innerText="$100"
      winAmount(100)
      winnerSound()
    }
    else if(symbols[0]==="🍇" && symbols[1]==="🍇" && symbols[2]==="🍇"){
      credit_info_inner+=50
      setTimeout(()=>credit_info.innerText =credit_info_inner,3000)
      win_amount.innerText="$50"
      winAmount(50)
      winnerSound()
     
    }
    else{
      if(credit_info_inner<=0){
        gameOver=true
       win_amount.innerText="Deposit money!"
       no_money.play()
             
      }
      else{
        credit_info_inner-=10
        setTimeout(()=>credit_info.innerText = credit_info_inner,3000)
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
  first_slot.innerHTML= "♠️<br>🍇<br>💖<br>🔔"
  second_slot.innerHTML= "🍇<br>🔔<br>💖<br>♠️"
  third_slot.innerHTML= "🔔<br>🍇<br>♠️<br>💖"
}

//deposit money to play game
function depositMoney(evt){
credit_info_inner=parseInt(evt.target.value)
credit_info.innerText=parseInt(credit_info_inner)
deposit.value=''
if(credit_info_inner>=1000){
  if(sound===true){
    entrance_sound.play()
  }    
}
}

// This function is called when players press withdraw. Credit goes back to the user and all displayed data clears
function reset(){
  console.log("withdraw")
  credit_info.innerText=0
  credit_info_inner=0
  clearSymbols()
  withdraw.play()
  gameOver=true
 
}

//Lost amount displays the amount lost during each spin. There is a delay of 3 seconds in displaying the amount lost
function lostAmount(amount){
setTimeout(function(){
  if(credit_info_inner>0){
    win_amount.innerText= `✨✨✨✨✨✨✨✨✨$${amount} lost✨✨✨✨✨✨✨✨✨✨`

  } else{
    win_amount.innerText="Out of balance!"
  }
  
},3000)

}

//Display the win amount on the machine
function winAmount(amount){
  setTimeout(function(){
    win_amount.innerText=`✨✨✨✨✨✨✨✨$${amount} won!✨✨✨✨✨✨✨✨✨`
  },3000)
}
//Enable music when players wins
function winnerSound(){
  setTimeout(()=>winning_soud.play(),3000)
                 
}

// Show the rules of the game ie. the winning combination with a click of paychart button. This is a toggle button. Hide or show the Pay chart.
function payChartInfo(){
  
  if(pay_chart.style.display==="block"){
    pay_chart.style.display="none"
  }
  else{
    pay_chart.style.display="block"
  }
}

//Turn sound off/on with click on music button
function turnoffSound(){
  if(sound===true){
    sound=false
    music.style.backgroundColor="red"
  }
  else{
    sound=true
    music.style.backgroundColor="green"
  }
 
}