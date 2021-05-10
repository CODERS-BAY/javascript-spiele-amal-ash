let random1;
let random2;
let random3;

random1 = Math.ceil(Math.random()*(9-0))-1;
random2 = Math.ceil(Math.random()*(9-0))-1;
random3 = Math.ceil(Math.random()*(9-0))-1;

console.log(random1, random2, random3);

function BREAKER(){
    let code1 =document.getElementById('input').value;
    
    let code2 =document.getElementById('input2').value;
    
    let code3 =document.getElementById('input3').value;
    console.log(code1, code2, code3);

    if(code1 == random1 && code2 == random2 && code3 == random3){
        img1.setAttribute('src', 'image/game.png');
        img2.setAttribute('src', 'image/game.png');
        img3.setAttribute('src', 'image/game.png');

       alert('BINGO');
    }else if (code1 !=random1 && code2!= random2 && code3 != random3){
        alert('TOTAL FAILURE')
    }else if (code1 ==random1 && code2!= random2 && code3 != random3){
        alert('YOU HIT THE FIRST NUMBER')
    }else if (code1 !=random1 && code2== random2 && code3 != random3){
        alert('YOU HIT THE SECOND NUMBER')
    }else if (code1 !=random1 && code2!= random2 && code3 == random3){
        alert('YOU HIT THE THIRD NUMBER')
    }else if (code1 !=random1 && code2== random2 && code3 == random3){
        alert('YOU HIT THE SECOND & THIRD NUMBERS')
    }else if (code1 ==random1 && code2== random2 && code3 != random3){
        alert('YOU HIT THE FIRST & SECOND  NUMBERS')
    }else if (code1 ==random1 && code2!= random2 && code3 == random3){
        alert('YOU HIT THE FIRST & THIRD  NUMBERS')
    }
}


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
    myBody.append(popup);}
    