let userChosen;
let computerChosen;
let userCounter = 0;
let pcCounter = 0;
let counter;
let displayResult = document.getElementById('result')
let userChoice = document.getElementById('your-choice')
result = play()



//Get a random computers choice
function generatedComputerChoice() {
computerChosen = Math.ceil(Math.random() * (3))

}


function play(userChosen) {
  generatedComputerChoice()
  console.log(userChosen);
  console.log(computerChosen);
  if (tryCounter < counter){
   alert('DU HAST'+ tryCounter +'MAL GESPIELT');

}

   if(userChosen==1){
      usercounterContainer1.innerHTML='SCHERE';
   }else if (userChosen==2){
      usercounterContainer1.innerHTML='STEIN';
   }else {
      usercounterContainer1.innerHTML='PAPIER';
   }
   if(computerChosen==1){
      pccounterContainer1.innerHTML='SCHERE';
   }else if (computerChosen==2){
      pccounterContainer1.innerHTML='STEIN';
   }else {
      pccounterContainer1.innerHTML='PAPIER';
   }
  
  if (computerChosen  == userChosen) {
   alert('There was a tie') 
  } else if (computerChosen == 2 && userChosen == 3) {
   alert('you lost');
   pcCounter++; 
  } else if (computerChosen == 2 && userChosen == 1) {
   alert('you win!');
   userCounter++;
  } else if (computerChosen == 3 && userChosen == 2) {
   alert( 'you lost');
   pcCounter++;
  } else if (computerChosen ==1 && userChosen == 2) {
   alert('you win!'); 
   userCounter++;
  } else if (computerChosen == 1 && userChosen == 3) {
   alert('you lost');
   pcCounter++;
  }
  /*document.getElementById('usercounterContainer').innerHTML=userCounter;

  document.getElementById('pccounterContainer').innerHTML=pcCounter;*/
 
}

function chaangeScreen(){
    
   screen1.classList.remove('active');
   screen2.classList.add('active');
    tryCounter = document.getElementById('tryCounter').value;
}

function replay() {
   location.reload();
}
