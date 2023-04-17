/* Declare variables below to save the different sections (divs) of your story*/
let storyOpening = document.querySelector('.story-opening');
let optionOnescreen = document.querySelector('.option-one-screen')
let optionOne = document.querySelector('.option-one')
let optionTwoscreen = document.querySelector('.option-two-screen')
let optionTwo = document.querySelector('.option-two')
let optionThree = document.querySelector('.option-three')
let optionFour = document.querySelector('.option-four')
let optionFive = document.querySelector('.option-five')
let optionSix= document.querySelector('.option-six')
let optionSeven= document.querySelector('.option-seven')
let optionEight= document.querySelector('.option-eight')
let optionThreescreen = document.querySelector('.option-three-screen')
let optionFourscreen = document.querySelector('.option-four-screen')
let optionFivescreen = document.querySelector('.option-five-screen')
let optionSixscreen = document.querySelector('.option-six-screen')
let optionOneend = document.querySelector('.option-one-end')
let optionTwoend = document.querySelector('.option-two-end')
let title = document.querySelector('.title')






/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){
*/


optionOne.onclick = function() {
  storyOpening.style.display = 'none';
  optionOnescreen.style.display='block';
}

optionTwo.onclick = function() {
  storyOpening.style.display = 'none';
  optionTwoscreen.style.display = 'block';
}

optionThree.onclick = function() {
  storyOpening.style.display = 'none';
  optionThreescreen.style.display='block';
}

optionFour.onclick = function() {
  storyOpening.style.display = 'none';
  optionFourscreen.style.display='block';
}

optionFive.onclick = function() {
  storyOpening.style.display = 'none';
  optionFivescreen.style.display='block';
}

optionSix.onclick = function() {
  storyOpening.style.display = 'none';
optionSixscreen.style.display='block';
}
  
 optionSeven.onclick = function() {
    storyOpening.style.display = 'none';
   optionOneend.style.display='block';
   }

optionEight.onclick = function() {
  storyOpening.style.display = 'none';
  optionTwoend.style.display='block';
}


OptionEight.onclick = function(){
optionTwoend.innerHTML="bye";  
}



