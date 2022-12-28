/*
QUESTIONS:
1.
*/

// PART 1 OBJECT DESTRUCTURING EXERCISES

/*
1. Object Destructuring 1: What does the following code return/print?
*/

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


/*
2. Object Destructuring 2: What does the following code return/print?
*/

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
let {numPlanets, ...discoveryYears} = planetFacts;
  
console.log(discoveryYears);
/* {
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
    }
*/


/*
3. Object Destructuring 3: What does the following code return/print?
*/

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}
  
console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"}))
console.log(getUserData({ firstName: "Melissa" }));
console.log(getUserData({}));

/*
Your name is Alejandro and you like purple
Your name is Melissa and you like green
Your name is undefined and you like green
*/

//PART 2 ARRAY DESTRUCTURING

/*
4. Array Destructuring 1: What does the following code return/print?
*/

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi


/*
5. Array Destructuring 2: What does the following code return/print?
*/

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // Raindrops on roses
  console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings); 
/*
[
    'Bright copper kettles',
    'warm woolen mittens',
    'Brown paper packages tied up with strings'
]
*/

/*
6. Array Destructuring 3: What does the following code return/print?
*/

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // 10, 30, 20

// PART 3 ES2015 REFACTORING (refactor some ES5 code into ES2015)

/*
7. ES5 Assigning Variables to Object Properties but instead do it with Object Destructuring

var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;
*/

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
  
const { a, b } = obj.numbers;
console.log(obj.numbers);

/*
8. ES5 Array Swap but instead do it with ES2015 One-Line Array Swap with Destructuring

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
*/

arr[0], arr[1] = arr[1], arr[0];


/*
9.  Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

-first: the first element in the array
-second: the second element in the array
-third: the third element in the array
-rest: all other elements in the array

Write a one line function to make this work using
-An arrow function
-Destructuring
-‘Enhanced’ object assignment (same key/value shortcut)
*/

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})

console.log(raceResults(['a', 'b', 'c', 'd', 'e']));