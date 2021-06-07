/********************************
* Variables and data types
*/
/*

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23;
*/

/***************************************************
* Variable mutationa nd type coercion
*/
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old '
+ job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old '
+ job + '. Is he married? ' + isMarried)

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

/*****************************************
* Basic operators
*/
/*
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

console.log(ageJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Marki is older than John');
var x;
console.log(typeof x);

/**************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6//  32 - 6 // 26
console.log(x,y);

// more operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x --;
console.log(x);

/*****************************
CODING CHALLENGE 1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated
using the formula: BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a
higher BMI than John.
4. Print a string to the console containing the variable from step 3.
(Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/
/*
var massJohn =  92;
var heightJohn = 1.95;
var massMark = 78;
var heightMark = 1.69;

var BMIJohn = massJohn / (Math.pow(heightJohn,2));
var BMIMark = massMark / (Math.pow(heightMark,2));

var markHigherBMI = BMIMark > BMIJohn;

console.log("Is Mark's BMI higher than John's? " + markHigherBMI);
*/

/*******************************
* If/else statement
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!')
} else {
  console.log(firstName + ' is single.')
}

var massJohn =  92;
var heightJohn = 1.95;
var massMark = 78;
var heightMark = 1.69;

var BMIJohn = massJohn / (Math.pow(heightJohn,2));
var BMIMark = massMark / (Math.pow(heightMark,2));

var markHigherBMI = BMIMark > BMIJohn;

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John");
} else {
  console.log("John's BMI is higher than Mark");
}
*/

/*****************
* Boolean Logical
*/
/*
var firstName = 'John';
var age = 16;

if (age < 13) {
  console.log(firstName + ' is a boy.')
} else if (age >=13 && age < 20) {
  console.log(firstName + ' is a teenager.')
} else {
  console.log(firstName + ' is an adult.')
}
*/

/********************
* Ternary Operator and Switch statement
*/
/*
var firstName = ' John';
var age = 22;

age >= 21 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer':'juice';
console.log(drink);
/*
if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice';
}
*/

// Switch statement
/*
var job = 'teacher';
switch (job) {
  case 'teacher':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drivers an uber in Lisbon.');
    break;
  case 'designer':
    console.log(firstName + ' designs websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}

var firstName = 'John';
var age = 16;

switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >=13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young adult.');
    break;
  default:
    console.log(firstName + ' is an adult.')
}
*/

/************************
* Truthy and Falsy values
*/
/*
var height;

height = 23;

if (height || height === 0) {
  console.log('Variable is defined.');
} else {
  console.log('Variable has NOT been defined.');
}

if (height === '23') {
  console.log('the == operator does type coercion!');
}
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams.
In the latest 3 games, John's team scored 89, 120 and 103 points,
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score),
and print the winner to the console.
Also include the average score in the output.

3. Then change the scores to show different winners.
Don't forget to take into account
there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball,
and her team scored 97, 134 and 105 points.
Like before, log the average winner to the console.
HINT: you will need the && operator to take the decision.
If you can't solve this one, just watch the solution, it's no problem :)

5. Like before, change the scores to generate different winners,
keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var averageJohn = (90 + 94 + 103)/3;
var averageMike = (89 + 94 + 103)/3;
var averageMary = (89 + 94 + 103)/3;
var winner;

if (averageJohn > averageMike && averageJohn > averageMary) {
  winner = 'John';
} else if (averageJohn == averageMike && averageJohn == averageMary) {
  winner = 'a draw';
} else if (averageMary > averageMike && averageMary > averageJohn) {
  winner = 'Mary';
} else {
  winner = 'Mike';
}

console.log('The team who won is ' + winner + '. The average score is ' +
averageJohn +' for John, ' + averageMike + ' for Mike, and ' + averageMary +
' for Mary.');
*/

/***************
* Functions
*/
/*
function calculateAge(birthYear) {
  return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn,ageMike,ageJane);

function yearsUntilRetire(year,firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetire(1990,'John');
*/

/****************
* Function Statements and Expressions
*/
/*
// Function Declaration
function whatDoYouDo(job, firstName) {

}


// Function Expression
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' teaches.';
    case 'driver':
      return firstName + ' drives.';
    case 'designer':
      return firstName + ' designs.';
    default:
      return firstName + ' does things.';
  }
}

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('designer','Jake'));
console.log(whatDoYouDo('teacher','John'));
*/

/***************
* Arrays
*/
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990,1969,1948);

names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John','Smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer':
'John is a designer'
console.log(isDesigner);
*/

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants.
The bills were $124, $48 and $268.

To tip the waiter a fair amount,
John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50,
15% when the bill is between $50 and $200,
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
var bills = [124,48,268];

function tipCalculator(bill) {
  if (bill < 50) {
    return bill * .2;
  } else if (bill >= 50 && bill <= 200) {
    return bill * .15;
  } else {
    return bill *.1;
  }
}
var tip1 = tipCalculator(bills[0]);
var tip2 = tipCalculator(bills[1]);
var tip3 = tipCalculator(bills[2]);

var tips = [tip1,tip2,tip3];
var finalBills = [tip1 + bills[0], tip2 + bills[1], tip3 + bills[2]]
console.log(tips,finalBills);
*/

/**************
* Objects and Properties
*/
/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// New Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane.lastName = 'Smith';
console.log(jane);
*/
/**************
* Objects and Properties
*/
/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    this.age =  2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john);
*/

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where
Mark and John compared their BMIs.

Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their
full name, mass, and height
2. Then, add a method to each object to calculate the BMI.
Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI,
 together with the full name and the respective BMI.
 Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

GOOD LUCK 😀
*/
/*
var john = {
  name: 'John',
  mass: 92,
  height: 1.95,
  calculate: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi
  }
}

var mark = {
  name: 'Mark',
  mass: 78,
  height: 1.69,
  calculate: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}
john.calculate();
mark.calculate();
if (john.bmi > mark.bmi) {
  console.log(john.name +' has the highest bmi with ' + john.bmi);
} else if(john.bmi < mark.bmi) {
  console.log(mark.name +' has the highest bmi with ' + mark.bmi);
} else {
  console.log(john.name + ' and '+ mark.name 'both have equal
  bmi with ' + john.bmi);
}
*/

/****************************************
* Loops and Iteration
*/

/*
// For loop
for (var i= 0; i < 10; i++) {
  console.log(i);
}

var john = ['John','Smith', 1990, 'teacher', false,'blue'];

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
*/
// continue and break Statements
/*
var john = ['John','Smith', 1990, 'teacher', false,'blue'];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}
for (var i = john.length; i >= 0; i--) {
  console.log(john[i]);
}
*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version
using everything we learned!

This time, John and his family went to 5 different restaurants.
The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50,
15% when the bill is between $50 and $200,
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills
and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array
containing final paid amounts (bill + tip).
HINT: Start with two empty arrays [] as properties and
then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday,
going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100,
10% when the bill is between $100 and $300,
and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before,
 this time using Mark's tipping rules
6. Create a function (not a method)
to calculate the average of a given array of tips.
HINT: Loop over the array,
and in each iteration store the current sum in a variable (starting from 0).
After you have the sum of the array, divide it by the number of elements in it
(that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
/*
var john = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    name: 'Mark',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.name + '\'s family pays higher tips, with an average of $'
    + john.average);
} else if (mark.average > john.average) {
    console.log(mark.name +
      '\'s family pays higher tips, with an average of $' + mark.average);
}
*/
