/*
Random Number Guessing Game
Created by: Marcus Jurvy Fadrigalan
*/

var userinput = prompt("Enter a Number\n")
console.log(userinput)

var randomnum = Math.floor(Math.random() * 101);

var tries = 1

while(userinput != randomnum){

 if(userinput > randomnum){
 console.log("Too high guess again")
 userinput = prompt("Too high guess again\n")

 tries++
 console.log("Guess a number between 1 and 100: " + userinput)


 }else{
 	 console.log("Too low guess again")
 userinput = prompt("Too low guess again\n")

tries++
 console.log("Guess a number between 1 and 100: " + userinput)


}if(userinput == randomnum){

console.log(userinput)
 console.log("You Guess the guessing game. Your numbers of tries is: " + tries)
 }

}