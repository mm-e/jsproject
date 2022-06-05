let userName = prompt("Hi! My name is PT. What's your name?")
function identifyUser() { //Funcion sin parametros    
    alert(`Hi, ${userName} , Welcome!`);
   }

identifyUser();

let portmanteau = prompt ("Do you know what a PORTMANTEAU is? Please type Y or N");

if (portmanteau == "Y"){
    alert ("Awesome! Then we are ready to get started!");
}

else if (portmanteau == "N"){
    alert ("A PORTMANTEAU is a blend of words in which parts of multiple words are combined into a new word. Here we will blend the last letters of a word you will give us with the first same letters of a word we will find for you.");
}

else{
    alert ("If you don't want to tell, you will find out soon enough...")
}


let conteo = 3;
conteo = conteo -1;


for (let i=3;i>=0;i--){
    alert(`PORMANTEAU is live in ${i}!!`);
}

function userPortmanteau(userFirstWord, userCharachter) {
    
    alert(`OK, ${userName}, you chose ${userFirstWord} as your first word in this PORTMANTEAU and you said you want us to build it using the last ${charachter} charachters of that word. Excellent choice!`);
   }
let firstWord = prompt("Let's start building this PORTMANTEAU. What word would you like to use for the first part of this PORTMANTEAU?");
let charachter = prompt("Nice word! Now, how many charchters would you like the two words in your PORMTANTEAU to share?")
   
userPortmanteau (firstWord, charachter);