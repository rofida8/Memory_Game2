const array=[{name:"orange",
             src:"img/orange.jpeg"},
             {name:"apple",
             src:"img/apple.png"},
             {name:"mango",
             src:"img/mango.jpeg"},
             {name:"peach",
             src:"img/peach.png"},
             {name:"pear",
             src:"img/pear.png"},
             {name:"pinaple",
             src:"img/pinaple.jpeg"},
             {name:"orange",
             src:"img/orange.jpeg"},
             {name:"apple",
             src:"img/apple.png"},
             {name:"mango",
             src:"img/mango.jpeg"},
             {name:"peach",
             src:"img/peach.png"},
             {name:"pear",
             src:"img/pear.png"},
             {name:"pinaple",
             src:"img/pinaple.jpeg"},];


array.sort(e=>0.5- Math.random())        // to make the image after each refresh start randomly
let grid =document.querySelector('#grid')
let createImages
let chosenCard=[]
let cardId

function creatCards(){
for (var i = 0;i<array.length ; i++){                // to creat 12 card 
   createImages=document.createElement('img');
  createImages.setAttribute('card_id',i)
  createImages.setAttribute("src","img/open.jpeg")
  createImages.addEventListener('click',flipCard)        
  grid.append(createImages)
}
}
creatCards()

function  flipCard(){
   cardId= this.getAttribute('card_id')             // to get the number id of any card i clicked on 
  this.setAttribute('src',array[cardId].src)       // set it to the src for the image's id
  chosenCard.push(cardId)
  if (chosenCard[0]===chosenCard[1]){     //to prevent chose one card two time
    chosenCard.pop(cardId)
  }
  //console.log(chosenCard) 
  if (chosenCard.length==2){       //chech the cards
    setTimeout(checkCards,500)      // after clicking , after time out it flip back again
    
  }
}
function checkCards(){
  let imgCards=document.querySelectorAll('img')     // to bring nodlist for all the images as an element with its attributes
  if (imgCards[chosenCard[1]].src===imgCards[chosenCard[0]].src){ //
    for(let i = 0 ; i<chosenCard.length ; i++){
      imgCards[chosenCard[i]].src="img/blank.png" 
      imgCards[chosenCard[i]].removeEventListener('click',flipCard) 
    }
    alert('Great, you did it !')
  }
   else{
    for(let i = 0 ; i<chosenCard.length ; i++){
    imgCards[chosenCard[i]].src="img/open.jpeg" 
    }
  }
   chosenCard=[];
}