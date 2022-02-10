// Declare four variables without assigning values and print them in console

let a, b, c, d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// How to get value of the variable myvar as output

var myvar = 1;
console.log(myvar);

// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName = "Naveen";
let lastName = "Raj";
let maritalStatus = "Single";
let country = "india";
let age = "21";


// 4. Declare variables to store your first name, last name, marital status, country and age in a single line


let data = ["Naveen", "Raj", "Single", "India", "21"];
console.log(data);


// 5. Declare variables and assign string, boolean, undefined and null data types

let str = "Guvi";
let boo = false;
let undef;
let nulll = null;

console.log(str);
console.log(boo);
console.log(undef);
console.log(nulll);

// 6. Convert the string to integer

// ParseInt :

let int = "100";
parseInt(int);
console.log(int);
//  number :

let int = "100";
Number(int);
console.log(int);
//  Plus Sign (+) :

let int = +"100";
console.log(int);

// 7. Write 6 statement which provide truthy & falsey values.

console.log(1 === 1);
console.log(3 === 2);
console.log(5 != 10);
console.log(5 != 5);
console.log(5 >= 4);
console.log(5 <= 4);

// Task 2: Simple Programs todo for Operators

// Square of a number :

let square = Math.pow(5, 2);
console.log(square);

// Swapping 2 numbers :

var a = 1;
var b = 2;
[a, b] = [b, a];
console.log('a:', a, 'b:', b);

// Addition of 3 numbers :

let a = 5;
let b = 10;
let c = 15;
let result = a + b + c;
console.log(result);

// Celsius to Fahrenheit conversion :

function coonvertFtoC(celsius) {
    let fahrenheit;
    fahrenheit = (celsius * (9 / 5)) + 32;
    return fahrenheit;
}
console.log(coonvertFtoC(10));

// Meter to Miles :

function mTom(meter) {
    let out = meter / 1609.344;
    let miles = out;
    return miles;
}
console.log(mTom(10000));

let meter = 1000;
let convert = 1609.344;
let miles = meter / convert;
console.log(miles);

// Pounds to kg

let mul = 0.45359237;
let pounds = 10;
let kilogram = mul * pounds;
console.log(kilogram);

// Batting Average :

let totalRuns = 5000;
let matches = 200;
let notout = 70;
let dismatch = matches - notout;
let battingAverage = totalRuns / dismatch;
console.log(battingAverage);

function battingAverage(runs, match, notout) {
    let dismatch = match - notout;
    let average = runs / dismatch;
    return average;
}
console.log(battingAverage(5000, 200, 70));


// Power of any number x ^ y.

let b = 10;
let e = 5;
let r = Math.pow(b, e);
console.log(r);

//Calculate five test scores and print their average :

let tamil = 70;
let english = 96;
let maths = 85;
let science = 60;
let social = 75;
console.log((tamil + english + maths + science + social) / 2);

// calculate the Simple Interest :

let amount = 5000;
let interest = 5;
let simpleInterest = (amount * 5) / 100;
console.log(simpleInterest);

//Calculate area of an equilateral triangle :

let a = 10;
let area = 1;
for (i = 1; i <= a; i++) {
    area = (1.73 * a * a) / 4
}
console.log(Math.round(area * 100) / 100)

//Area Of Isosceles Triangle :

let a = 7;
let base = 9;
let area = (1 / 2.0) * base * Math.sqrt((a * a) - ((base * base) / 4));
console.log("Area of Isosceles Triangle = " + area);

//Volume Of Sphere :

let radius = 10;
let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
console.log(volume.toFixed(2));

//Volume Of Prism :

let b = 8;
let h = 11;
const volume = b * h
console.log(volume);

//Find area of a triangle :

let area1 = 10;
let area2 = 6;
let area3 = 8;
const s = (area1 + area2 + area3) / 2;
const Value = Math.sqrt(s * (s - area1) * (s - area2) * (s - area3));
console.log(Value);

//Give the Actual cost and Sold cost, Calculate Discount Of Product :

let actualCost = 1000;
let soldCost = 970;
let discount = 10;
let result = actualCost - (soldCost * discount / 100);
console.log(result);

//Given their radius of a circle and find its diameter, circumference and area :

const PI = 3.14;
let r = 10;
let diameter = r + r;
let areaofcircle = r * r * PI;
let circumference = 2 * r * PI;
console.log(diameter);
console.log(areaofcircle);
console.log(circumference);

//Given two numbers and perform all arithmetic operations :

let a = 10;
let b = 20;
const add = a + b;
const sub = a - b;
const mul = a * b;
const div = a / b;
const modul = a % b;
console.log([add, sub, mul, div, modul]);

// Display the asterisk pattern as shown below(No loop needed) :

let string = "*****";
console.log(string);
console.log(string);
console.log(string);
console.log(string);
console.log(string);

//Program To Calculate CGPA :

let angular = 81;
let react = 82;
let node = 83;
let php = 84;
let js = 85;

let cgpa = (angular + react + node + php + js) / 5;
console.log(cgpa);

//Task 3

//Write a loop that makes seven calls to console.log to output the following triangle:

let n = 7;
let str = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        str += "*";
    }
    str += "\n";
}
console.log(str);

//Iterate through the string array and print it contents :

let strArray = ["Jazz", "Blues", "New Age", "Classical", "Opera"];
console.log(strArray);

//write a code to count the elements in the array :

let count = [11, 22, 33, 44, 55];

function length(count) {
    let lengthh = 0;
    while (count[lengthh] !== undefined) {
        lengthh++;
    }
    return lengthh;
}

console.log(length(count));

//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food :

let foods = ["Rice", "Chapathi", "Dosa", "idly", "Poori", "Pongal", "Biriyani", "lemon Rice", "Tomao Rice", "Parotta", "idiyappam", "Kushka", "Muttom Biriyani",
    "Coconut Rice", "Chilly Parotta", "Egg Dosa", "Kesari", "Upma", "Semiya", "Noodles"
];
console.log(foods[4]);

//Find the length of your foods array :

let foods = ["Rice", "Chapathi", "Dosa", "idly", "Poori", "Pongal", "Biriyani", "lemon Rice", "Tomao Rice", "Parotta", "idiyappam", "Kushka", "Muttom Biriyani",
    "Coconut Rice", "Chilly Parotta", "Egg Dosa", "Kesari", "Upma", "Semiya", "Noodles"
];

console.log(foods.length);


//Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai” :

let friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];

function dataHandling(input) {
    for (var i = 0; i < input.length; i++) {
        let fr = friends.indexOf("Mari");
        if (fr !== -1) {
            friends[fr] = "Munnabai";
        }
    }
    console.log(friends);
}
dataHandling(friends);

// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.


let friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];

function dataHandling(input) {
    for (var i = 0; i < input.length; i++) {
        console.log(friends[0]);
        console.log(friends[1]);
        console.log(friends[2]);
        break;
    }
}
dataHandling(friends);

// Find the person is ur friend or not. :

const friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "jeff", "AAK chandran"];

function dataHandling(input, name) {
    for (var i = 0; i < input.length; i++) {
        if (name || friends[4]) {
            console.log("yes he is my friend");
            break;
        } else {
            console.log("he is not my frined");
        }
    }
}
let found = dataHandling(friends, "jeff");
console.log(found);

// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list :

let friends1 = ["MAri", "MarJane", "CaptianAmerica", "Munnabai", "jeff", "AAK chandran"];
let friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];
let friends = friends1.concat(friends2);

function dataHandling(input) {
    input.sort();
    return friends;
}
console.log(dataHandling(friends));

// Get the first item, the middle item and the last item of the array :

let array = ["priya", "sneha", "swetha", "rosy", "Naveen"];
let { 0: first, [array.length - 1]: last } = array;
console.log(first, last);

// Add your name to the end of the friends array, and add another name to beginning. :

let friends = ["MAri", "MarJane", "CaptianAmerica", "Munnabai", "jeff", "AAK chandran"];
friends[0] = "Rosy"
friends.push("Naveen")
console.log(friends);

// 3. Add Mr or Ms to the names in the friends array. :

let friends = ["Mari", "MarJane", "CaptianAmerica", "Munnabai", "jeff", "AAK chandran"];
let add = "Mr.";
for (i = 0; i < friends.length; i++) {
    var out = add + friends;
    console.log(out);
}

// 4. Concat all the names the friends array and return as comma “,” seperated string. :


let friends1 = ["Mari", "MarJane", "CaptianAmerica", "Munnabai", "jeff", "AAK chandran"];
let friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];
let friends = friends1.concat(friends2);
friends.toString();
return friends;

// 5. Find the friends names who has letter ‘a’ and return the list.

let friends1 = ["Mari", "MarJane", "CaptianAmerica", "Munnabai", "jeff", "AAK chandran"];

function firstName(input) {
    return input.filter((e) => e.length === "A");
}
console.log(friends);


// 8. Find the name with max characters and return the name.

let friends = ["Mari", "MarJane", "Arun", "CaptianAmerica", "Munnabai", "jeff", "AAK chandran"];
let result = friends.filter((word) => {
    word.length < 8;
})
console.log(result);