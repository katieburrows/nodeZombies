// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your propmt. 

// ===========================================================================================================

var inquirer = require("inquirer");

var playerHealth = 70;
var zombieHealth = 15;

function checkHealth (){
    if (playerHealth > 0 && zombieHealth > 0){

    var zombieNumber = Math.floor((Math.random() * 5) + 1);
    var reduceHealth = Math.floor((Math.random() * 5) + 1);

    inquirer.prompt([
        {
            type: "list",
            message: "Choose a number to hopefully survive",
            choices: [1, 2, 3, 4, 5],
            name: "playerNumber"
        }
        

    ]).then(function(answers) {
        if (answers.playerNumber === zombieNumber){
            zombieHealth -= reduceHealth;
            console.log(`you chose: ${answers.playerNumber} and the zombie chose: ${zombieNumber}. You inflicted -${reduceHealth} damage to the zombie!  Your current health is: ${playerHealth} and the zombie's is ${zombieHealth}`);
        } 
        else if (answers.playerNumber != zombieNumber){
            playerHealth -= reduceHealth;
            console.log(`you chose: ${answers.playerNumber} and the zombie chose: ${zombieNumber}. The zombie inflicted -${reduceHealth} damage to you!  Your current health is: ${playerHealth} and the zombie's is ${zombieHealth}`);
        }
        checkHealth();
    });
    } 

    else if (playerHealth <= 0 && zombieHealth > 1) {

        console.log("YOU DIED BRO!  THE ZOMBIE IS CURRENTLY EATING YOUR FRICKEN' BRAINZZZZZZ DUDEEE!") 
    } 

    else if (playerHealth > 0 && zombieHealth <= 0){
        
        console.log("You survived the zombie apocolypse...this time.");
    }   

}

checkHealth();
