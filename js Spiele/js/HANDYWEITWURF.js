console.log('Hi Amal');
 let entfernungZumMonster = Math.random() * 90 + 10;
 entfernungZumMonster = Math.round(entfernungZumMonster)

let  counter=0;
let tryCounter;




function werfen(){

    if (tryCounter < counter){
        alert('DU HAST'+ tryCounter +'MAL GESPIELT');

    }else{
    let g =document.getElementById('planet').value;
    let v0= document .getElementById('kraft').value;
    let winkel = document.getElementById('Winkel').value*( Math.PI / 180 );
    let wurfweite = ((v0 * v0) * Math.sin(2 * winkel)) / g;
    wurfweite=Math.round(wurfweite);
    console.log(winkel);
    counter++;
    if(wurfweite == entfernungZumMonster) {
        let winner = document.createTextNode('Hi There Bravo!')
        screen2.append(winner);
    }else{
       let monster = entfernungZumMonster-wurfweite;
        let newMonster=document.createElement('i');
        console.log(monster);
       newMonster.innerHTML=monster;
       let nichtgetrofen ='nichtgetrofen';
       let neuversuche ='neuversuche'
       screen2.append(nichtgetrofen);
       screen2.append(newMonster);
       screen2.append(neuversuche);

    }
    console.log(wurfweite);
    



 }
}


function chaangeScreen(){
    
    screen1.classList.remove('active');
    screen2.classList.add('active');
     tryCounter = document.getElementById('tryCounter').value;
}

function replay() {
    location.reload();
}
