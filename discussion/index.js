/*
Mini Activity


Create a function called displayMsgtoSelf()
	- display a message to your past self in your console

	invoke the function 10 times

	screenshot and paste the output


*/


function displayMsgtoSelf() {
	console.log("Stay away from liking shoes and clothes, It's an expensive hobby. :>")

}
for (i = 1; i<=10; i++) {

	displayMsgtoSelf()
}

/*

let count = 10;
while(count !== 0){
	displayMsgtoSelf();
	count --;
}

While loop
	- while loop will allow us to repeat an action or an instruction as long as the condition is true.


	1st loop - count 10
	2nd loop - count 9
	3rd loop - count 8
	4th loop - count 7
	5th loop - count 6
	6th loop - count 5
	7th loop - count 4
	8th loop - count 3
	9th loop - count 2
	10th loop - count 1

	while loop checked if count is still not equal to 0: At this point, 11th loop, count was decremented to 0, therefore there was not 11th loop.

	if there is no decrementation, the condition is always true, thus an infinite loop.



*/


let x = 1

while(x<=5){
	console.log(x);
	x++
}
/*
Do-while loop
	- Do-while loop is similar to the while loop. However, do while will allow us to run our loop at least once.

	- with the while loop, we check the first condition before running our code block. However, for do while loop,, it will do an instruction first before it will check the condition to run again.

*/

/*let doWhileCounter = 1;

do{
	console.log(doWhileCounter)
	doWhileCounter++
} while(doWhileCounter === 0)*/

/*
Create a do-while loop which will be able to show the number inn the console from 1-20 in order
*/

let num = 1;

do{
	let num1 = 
	console.log(num)
	num++
}while(num <= 20)

/*
For loop

	- For loops are much more flexible than the while and do-while loop. It consists of three parts:

	Initialization
		- creating variable which wil be used as the counter
	Condition
		- Creating the appropriate condition to run our loop.
	finalExpression 
		- (decrementation or incrementation) based in your condition.

	Syntax:
	for(initialization; condition; finalexpression){
	code block
	}

*/

for (let count = 1; count <=20; count++){

	console.log("this is a for loop")
}

/*
Accessing Array items
	- each item in an arra
*/

let btsBoyGroup = ['Jimin', 'jungkook', 'Jin', 'V', 'jHope', 'Agust D', 'RM']

// We access the items in an array by accessing them through their index


console.log(btsBoyGroup); // will print the values of btsBoyGroup 
console.log(btsBoyGroup[5]) //will print the 5th  index: Agust D

console.log(btsBoyGroup.length) //will print the total number of items in an array

/*
.length property is also a property of an array. the .length property in an array shows thet total number of items
*/

console.log(btsBoyGroup[btsBoyGroup-1])

for(let index = 0; index < btsBoyGroup.length; index++)
{
	console.log(btsBoyGroup[index])
}

/*
break statement allows us to terminate the loop whenever we want

let's have 10 count, but breaking after we output 5

*/

for(let i=1; i<=10; i++){
	console.log(i)


//will stop at 5
	if(i == 5){
		break
	}
}

for(let i=1; i<=10; i++){
	if(i == 3 || i == 7){
		continue;
	}

	console.log(i)
}


let places = ['tokyo', 'Switzerland', 'New york', 'montreal', 'Seoul', 'Cebu', 'Hollywood']


console.log(places[0]);
console.log(places[6]);
console.log(places.length);


for(let j = 0; j < places.length; j++)
{
	console.log(places[j])
}

//Example of do-while
//This program will ask the user to enter between numbers 1-10



let userNumber;

do{
	userNumber = prompt('Enter number between 1 and 10')

	if(userNumber <1 || userNumber >10){
		alert("Invalid input. please enter a number between 1 and 10")
	}
}while (userNumber < 1 || userNumber > 10);

	alert(`you entered ${userNumber}`)



