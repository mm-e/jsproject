//functions

function readJSON(url, timeOut=2000){//fetch
    fetch(url).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(`Can't read from ${url}`);
    })
    .then((responseJson) => {
        playingCharacters = [...responseJson];
    })
    .catch((error) => {
        setTimeout(() => {
            console.log("ERROR can't read JSON");    
        }, timeOut);
        console.log(error)
    });
}


function identifyUser() { //Funcion sin parametros    
    // alert(`Hi, ${userName}! Welcome!`);
    document.getElementById('titulo').innerHTML="<h1>PORTMANTEAU Generator</h1>"+`<h3>Hi, ${userName}! Welcome!</h3>`;
   }



function userPortmanteau(userFirstWord, userCharacter) {
    
    // alert(`OK, ${userName}, you chose ${userFirstWord} as your first word in this PORTMANTEAU and you said you want us to build it using the last ${character} characters of that word. Excellent choice!`);
   document.getElementById('contenido').innerHTML= document.getElementById('contenido').innerHTML + `<p id= "builtPormanteau"> OK, ${userName}, you chose ${userFirstWord} as your first word in this PORTMANTEAU and you said you want us to build it using the last ${userCharacter} characters of that word. Excellent choice! </p>`;
}

function recoverUserInLocalStorage(){
    // read from local if there is sth saved
    try{
        userName = JSON.parse(localStorage.getItem("localUserName"));
        return true;
    }
    catch{
        // if nothing is found then nullify userName
        console.log(`Hello, you're new here...`);
        userName = null;
        return false;
    }
}
// saving user name in local storage
function saveUserInLocalStorage(){
    try {
        localStorage.setItem("localUserName", JSON.stringify(userName));
        localStorage.setItem("localPlayingCharacter", JSON.stringify(userPlayingCharacter));
    }
    catch {
        console.log(`Gaw! trying to save failed?`)
    }
}



// Main

let userName = "";
recoverUserInLocalStorage()
if (userName !== null){
    console.log("User found");
    alert(`Welcome back, ${userName}!`)
} else{
    userName = prompt("Hi! My name is PT. What's your name?");
}


// Writes HTML with userName
identifyUser();
// Object Array definition
/*const playingCharacters = [
    {name: "Purply", personality: "Laidback", superpower: "Chills the unchillable", photo:"../assets/****"}, //Need to add photo
    {name: "Oxno", personality: "Godlike", superpower: "All powerful", photo:"../assets/****"}, //Need to add photo
    {name: "Wolf", personality: "Cunning", superpower: "Knows the future", photo:"../assets/****"}, //Need to add photo
    {name: "Dodo", personality: "Outdoorsy", superpower: "Carefree", photo:"../assets/****"} //Need to add photo
];*/
url="https://mm-e.github.io/jsproject/playingCharacter.json"
let playingCharacters = [];
//load players
readJSON(url)
setTimeout(() => {

    // Object Array selection
    const introducePlayingCharacters = playingCharacters.map((el) => el.name);


    document.getElementById('contenido').innerHTML=`<h3>Meet the characters in our game. You will choose one to play with. Our carachters are ${introducePlayingCharacters}</h3>`;

    let userPlayingCharacter = prompt("Who do you want to play with today?");

    // now i have the user name and player name, then save
    saveUserInLocalStorage();

    let selectionInArray = playingCharacters.some((el) => el.name == userPlayingCharacter);

    /*if (selectionInArray != true){
        alert ("Playing Character doesn't exist");
    }
    else{
        alert("Awesome!");
        saveUserInLocalStorage();
    }*/

    //OPERADOR TERNARIO
    selectionInArray != true ? alert("Playing Character doesn't exist") : alert ('Awesome!')

    // Portmanteau introduction
    let portmanteau = prompt ("Do you know what a PORTMANTEAU is? Please type Y or N");

    if (portmanteau == "Y"){
        alert ("Awesome! Then we are ready to get started!");
    }

    else if (portmanteau == "N"){
        // alert ("A PORTMANTEAU is a blend of words in which parts of multiple words are combined into a new word. Here we will blend the last letters of a word you will give us with the first same letters of a word we will find for you.");
        let portmanteauDefinition = "A PORTMANTEAU is a blend of words in which parts of multiple words are combined into a new word. Here we will blend the last letters of a word you will give us with the first same letters of a word we will find for you.";
        document.getElementById('titulo').innerHTML= document.getElementById('titulo').innerHTML + `<p = "dictionaryResult"> ${portmanteauDefinition} </p>`;
    }

    else{
        alert ("If you don't want to tell, you will find out soon enough...")
    }

    // Countdown
    for (let i=3;i>=0;i--){
        alert(`PORMANTEAU is live in ${i}!!`);
    }


    document.getElementById('contenido').addEventListener("click", function(){
        alert(`${userName} just clicked!`)
    })

    document.getElementById('seccionTercera').innerHTML="<h6>TO RESTART THE PORMANTEAU GENERATOR CLICK <b>\"HERE\"</b></h6>";
    document.getElementById('seccionTercera').addEventListener('click', function(){
    //SWEET ALERT LIBRARY
        Swal.fire({
            title: 'Reload',
            text: 'Are you sure you want to reload this page?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                document.location.reload(true);
            }
        }) ;
    // document.location.reload(true);
    });

    let firstWord = prompt("Let's start building this PORTMANTEAU. What word would you like to use for the first part of this PORTMANTEAU?");
    let character = prompt("Nice word! Now, how many charchters would you like the two words in your PORMTANTEAU to share?");
    
    userPortmanteau (firstWord, character);
        
}, 1500);
