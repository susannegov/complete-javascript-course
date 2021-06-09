'use strict';
/* Start 'use strict'; at beginning of js script to activate strict mode. cannot put code before script. can comment.
Strict mode forbids certain things and creates visible errors in the console.
 for example cannot use interface, private,if variables */

/* function declaration vs function expression
function x() {} vs const x = function() {}
a function declaration can be called before you define it
whereas a function expression cannot. Example (kinda): Java functions outside public static void vs python def before it gets called (not sure on this)
*/

/*Arrow function
variableName => what we want returned;
no need for return line. It is the same as a function expression

after return, exits function. can switch lines using keyboard shortcut alt*/

/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉*/

//const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// data1
let dolphinScore = calcAverage(44, 23, 71);
let koalaScore = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`Nobody wins (${avgDolphins} vs. ${avgKoalas})`);
    }
}

checkWinner(dolphinScore, koalaScore);

// data 2
dolphinScore = calcAverage(85, 54, 41);
koalaScore = calcAverage(23, 34, 27);

checkWinner(dolphinScore, koalaScore);

/* Arrays
- use array.push(x) to add x at end of array
- use array.pop() to remove the last element of array
- array.shift() to remove first element of array and returns it
- array.indexOf(x) returns index number of x
- array.includes(x) returns boolean of wheather x is in array (in ES6)


Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
1.Write a function 'calcTip'that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2.And now let's use arrays! So create an array 'bills'containing the test data below
3.Create an array 'tips'containing the tip value for each bill, calculated from the function you created before
4.Bonus: Create an array 'total' containing the total values, so the bill+ tipTest data:125, 555 and 44
Hint:Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉GOOD LUCK 😀

function calcTip(bill) {
    return (bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill);
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

Object literals
var x = {
    p1: x1,
    p2: x2,
}

Can call objects as dot notation x.p1 or x['p1']
the bracket notation can be an expression like x['p' + 1] to get x['p1']
Does not work with dot notation
*/

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'James', 'Danny'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`

    },
}

// have to run method first to get dot notation
jonas.calcAge();
console.log(jonas.age);

/* prompt is like input() or Scanner input
const interestedIn = prompt('what do you know about jonas?');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request!');
}
*/
// Challenge has 3 friends and his best friend is called michael.
console.log(`${jonas.firstName} has ${jonas['friends'].length} friends and his best friend is ${jonas['friends'][0]}.`);

// Challenge
// 'Jonas is a 46 year old teacher and he has a/no drivers license.
console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job} and he has ${jonas.hasDriversLicense ? 'a' : 'no'} drivers license.`);
console.log(jonas.getSummary());

/* Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter)
Your tasks:
1.For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2.Create a 'calcBMI'method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
3.Log to the console who has the higher BMI, together with the full name and the respective BMI. 
Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data:
Marks weights 78 kg and is 1.69 m tall. 
John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀

*/

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}

/* for loops - basically java syntax (replace var with let) */
for (let x = 0; x <= 10; x++) {
    // do something
}
/*can change array to array.length in for loop (no parentheses)
break used to termianate the loop
continue break the iteration (like skips a loop)
looping backwards in array is for (let array.length - 1; i >= 0; i--) {}

While loop has no counter - like for loop
while (rep < 10){

}


Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills'containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips'and 'totals')
3. Use the 'calcTip'function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a forloop to perform the 10 calculations!

Test data:22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints:Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 😉

Bonus:Write a function 'calcAverage'which takes an array called 'arr'as an argument. This function calculates the average of all numbers in the given array.
*/

function calcTip(bill) {
    return (bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

let sum = 0;
for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    total[i] = tips[i] + bills[i];
}

console.log(tips, total);

function calcAverage(arr) {
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
        average += arr[i];
    }
    return average / arr.length;
}
console.log(calcAverage(bills));