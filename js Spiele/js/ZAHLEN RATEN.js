
 // random value generated
 var y = Math.ceil(Math.random() * 100 + 1);
console.log(y);
 // counting the number of guesses
 // made for correct Guess
 var guess = 1;
   
 document.getElementById("submitguess").onclick = function(){
   
// number guessed by user     
var x = document.getElementById("guessField").value;


if(x == y)
{   alert  ("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
+ guess + " GUESS ");
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS ");
}
else if(x > y) /* if guessed number is greater
                than actual number*/ 
{    
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
   
}
else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}

}
/*function chaangeScreen(){
    counter =  document.getElementById('counterInput').value;
    if(counter < 1){
        popup('Bitte gib ein Zahl Über 0 ein');
    }else{
     screen1.classList.remove('active');
     screen2.classList.add('active');
  }
}*/
/*$('.button.back').click(function(){
    let container = $(this).parent();
    $(container).fadeOut('fast',function(){
        $(container).prev().fadeIn('slow');

    });
    
});*/

function popup(){
    let popup = document.createElement('div');
    popup.setAttribute('id','popup');
    let text  = document.createElement('p');
    text.append('sie  haben  gewonen!');
    popup.append('text');

    let buttun =document.createElement('div');
    buttun.classList.add('button');
    buttun.append('ok');
    buttun.addEventListener('click', closepopup);
    popup.append(buttun);
    myBody.append(popup);

}


function chaangeScreen(){
    
    screen2.classList.remove('active');
    screen1.classList.add('active');
     
}

function replay() {
    location.reload();
}
function closepopup(){
    document.getElementById('popup').remove();
}