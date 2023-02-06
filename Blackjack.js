
let cards=[]
let sum = 0
let hasBlackjack =false;  
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el")
let sumEl =document.getElementById("sum-el");
let cardsEl =document.querySelector("#cards-el");
let startbtn = document.querySelector(".btn");
let resetBtn = document.querySelector(".rstbtn");

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard ,secondCard];
    sum = firstCard + secondCard;
    startbtn.classList.add("hide-btn");
    renderGame();

}

function getRandomCard(){
    let number = Math.floor(Math.random()*13) + 1;

    if(number === 1){
        return 11;
    }
    else if(number > 10){
        return 10;
    }
    else{
        return number; 
    }
}


function renderGame(){
    cardsEl.textContent = "Cards :"  ;

    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum :" + sum;
    if(sum <= 20){
        message="Do You Want To Draw Another Card?" 
    }
    else if(sum === 21){
        message="BLACK JACK !!!!!!"
        hasBlackjack= true;
    }
    else{
        message="Sorry, You Are Out Of The Game"
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
  if(isAlive === true && hasBlackjack=== false){
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }

}

function resetGame(){
  
    messageEl.textContent = "Want to Play a Round?"
    sumEl.textContent = "Sum :"
    cardsEl.textContent = "Cards :"
    startbtn.classList.remove("hide-btn")
}



