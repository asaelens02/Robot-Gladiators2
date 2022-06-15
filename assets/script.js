var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


//this creates a function named "fight"//

var fight = function (enemyName) {

    //repeat and execute as long as the enemy-robot is alive

    while(playerHealth>0 && enemyHealth>0) {

    //fight function statements

    //alert players they are starting the round

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if ( promptFight === "skip"|| promptFight === "SKIP") {

        //confirm skip
    
        var confirmSkip = window.confirm("Are you sure you would like to quit?");
    
        //if yes (true), leave fight
    
        if (confirmSkip) {
    
          window.alert(playerName + " has chosen to skip this fight. Goodbye!");
          
          //subtract money for skip
    
          playerMoney = playerMoney-10;
    
          console.log ("playerMoney", playerMoney);
    
          break;
    
        }
    }

//if player chooses to fight, then fight

//if (promptFight === "fight" || promptFight === "FIGHT") {
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth-playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining "
    );
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(

        enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining "
    );

    //check enemy's health

    if (enemyHealth<= 0) {

        window.alert(enemyName + " has died! ");

        playerMoney = playerMoney + 20;

        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }

    // check player's health
    if (playerHealth <= 0) {
    window.alert(playerName + " has died!");

    break;
    } 
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    }}

var startGame = function () {   
    
    //reset player stats

    playerHealth=100;
    playerAttack=10;
    playerMoney=10;


    for (var i=0; i<enemyNames.length; i++) {

        if (playerHealth>0) {

            window.alert("Welcome to Robot Gladiators! Round " + ( i +1));
    

        var pickedEnemyName = enemyNames[i];

        enemyHealth = 50;

        fight(pickedEnemyName);

    }
        else {

            window.alert("You have lost your robot in battle! Game Over!");

            break;
        }

    }

    endGame();


};

//start the game


var endGame=function() {

    if (playerHealth>0){

        window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + " . ");
    }

    else {
        
        window.alert("The game has ended. Let's see how you did!");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {

        startGame();
    }
    else {

        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }


};

startGame();



//Game states

//"win" - player robot has defeated all enemy-robots

// * fight all enemy robots
// * defeat each enemy robot

//"lose" - player robot's health is zero or less


