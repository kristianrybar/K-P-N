/* 
var uvod = alert("Vitajte v hre KAMEŇ, PAPIER, NOŽNICE");
var pravidla = alert("Pravidlá:\nHrajú minimálne 2 hráči,\nKaždý hráč si vyberie 1 možnosť,\nKameň poráža Nožnice,\nNožnice porážajú Papier,\nPapier poráža Kameň");
var selections = ["K", "P", "N"];
    console.log(choices); 
var random = Math.floor(Math.random() * 3); 
    console.log(random)
var computer
var user */

let [computer_score, user_score] = [0, 0] 
let result_ref = document.getElementById("result");
let choices_object = {
    'K': {
        'K': 'draw',
        'P': 'lose',
        'N': 'win'
    },
    'P': {
        'K': 'won',
        'P': 'draw',
        'N': 'lose'
    },
    'N': {
        'K': 'lose',
        'P': 'win',
        'N': 'draw'
    }
}

function checker(input) {
    var choices = ["K", "P", "N"];
    var num = Math.floor(Math.random()*3);
    document.getElementById("computer_choice").innerHTML = `Computer choose <span>${choices[num]}<span/>`;
    document.getElementById("user_choice").innerHTML = `You choose <span>${input}<span/>`;
    
    console.log(checker)

    let computer_choice = choices[num];
    switch(choices_object[input][computer_choice]) {
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38"
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f"
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        case 'draw':
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080"
            result_ref.innerHTML = "DRAW";
            break;
    }
    
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
    
}