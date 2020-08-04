// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.

var hacker1 = 'Johncena';

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The drivers name is ${hacker1}`)

// 1.3 Create a variable `hacker2` with the navigator's name.
var hacker2 = 'Bill';
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigators name is ${hacker2}`)



// Iteration 2: Conditionals
function namechecker() {

    if (hacker1.length > hacker2.length) {
        console.log(`the drivers name is the longest in characters, it has ${hacker1.length}`)
    } else if (hacker1.length === hacker2.length) {
        console.log(`the both have the same amount of characters in their names! ${hacker1.length}`)
    } else { console.log(`The navigater has the longest name, ${hacker2.length} characters`) }
};

namechecker(hacker1, hacker2);


// Iteration 3: Loops
// 3.1
var hacker1 = 'John';
var hacker2 = 'Cena';

var upper = hacker1.toUpperCase();
var splitten = upper.split("");
console.log(splitten);

function myFunction(hacker1) {
    var hackerOne = hacker1.toUpperCase();
    var completed = hackerOne.split("");
    console.log(completed);
}

myFunction(hacker1);

// 3.2 
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    console.log(joinArray);
}

reverseString(hacker2);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// BONUS
// 1.1+1.2
var splitString = paragraphs.split(' ').length;
console.log(splitString);

// 1.3

function myFunction(paragraphs) {

    var position = paragraphs.split(' ');
    var count = 0;
    for (let i = 0; i < position.length; i++) {
        if (position[i] === 'et') {
            count.push(count)
        }
        count++
    }
    console.log(count)
}
myFunction(paragraphs)

//   2
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            console.log(false)
        }
    }
    console.log(true)
}
palindrome("A man, a plan, a canal. Panama");