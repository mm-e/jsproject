let userName = prompt("Hi! My name is PT. What's your name?");
function identifyUser() { //Funcion sin parametros    
    //alert(`Hi, ${userName}! Welcome!`);
    document.getElementById('titulo').innerHTML="<h1>PORTMANTEAU Generator</h1>"+`<h3>Hi, ${userName}! Welcome!</h3>`;
   }

identifyUser();
//Object Array definition
const playingCharachters = [
    {name: "Purply", personality: "Laidback", superpower: "Chills the unchillable", photo:"../assets/****"}, //Need to add photo
    {name: "Oxno", personality: "Godlike", superpower: "All powerful", photo:"../assets/****"}, //Need to add photo
    {name: "Wolf", personality: "Cunning", superpower: "Knows the future", photo:"../assets/****"}, //Need to add photo
    {name: "Dodo", personality: "Outdoorsy", superpower: "Carefree", photo:"../assets/****"} //Need to add photo
];

//Object Array selection
const introducePlayingCharachters = playingCharachters.map((el) => el.name);

document.getElementById('contenido').innerHTML=`<h3>Meet the characters in our game. You will choose one to play with. Our carachters are ${introducePlayingCharachters}</h3>`;

let userPlayingCharachter = prompt("Who do you want to play with today?");

let selectionInArray = playingCharachters.some((el) => el.name == userPlayingCharachter);

if (selectionInArray != true){
    alert ("Playing Charachter doesn't exist");
}
else{
    alert("Awesome!")
}
//Portmanteau introduction
let portmanteau = prompt ("Do you know what a PORTMANTEAU is? Please type Y or N");

if (portmanteau == "Y"){
    alert ("Awesome! Then we are ready to get started!");
}

else if (portmanteau == "N"){
    //alert ("A PORTMANTEAU is a blend of words in which parts of multiple words are combined into a new word. Here we will blend the last letters of a word you will give us with the first same letters of a word we will find for you.");
    let portmanteauDefinition = "A PORTMANTEAU is a blend of words in which parts of multiple words are combined into a new word. Here we will blend the last letters of a word you will give us with the first same letters of a word we will find for you.";
    document.getElementById('titulo').innerHTML= document.getElementById('titulo').innerHTML + `<p> ${portmanteauDefinition} </p>`;
}

else{
    alert ("If you don't want to tell, you will find out soon enough...")
}


//Countdown
for (let i=3;i>=0;i--){
    alert(`PORMANTEAU is live in ${i}!!`);
}

function userPortmanteau(userFirstWord, userCharachter) {
    
    alert(`OK, ${userName}, you chose ${userFirstWord} as your first word in this PORTMANTEAU and you said you want us to build it using the last ${charachter} charachters of that word. Excellent choice!`);
   }
let firstWord = prompt("Let's start building this PORTMANTEAU. What word would you like to use for the first part of this PORTMANTEAU?");
let charachter = prompt("Nice word! Now, how many charchters would you like the two words in your PORMTANTEAU to share?");
   
userPortmanteau (firstWord, charachter);
