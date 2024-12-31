//  T-001: Create an array of 5 elements using the Array Constructor.
const newArr = new Array(5, 1);

// T-002: Create an array of 3 empty slots.
const epltyArr = new Array(3);

// T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
const sixElementsOfArr = ["one", "two", "three", "four", "five", "six"];
const fourthEle = sixElementsOfArr[3];
console.log(fourthEle);

// T-004: Use the for loop on the above array to print elements in the odd index.
for (let i = 1; i < sixElementsOfArr.length; i = i + 2) {
    console.log(sixElementsOfArr[i]);
}

// T-005: Add one element at the front and the end of an array.
const number = ["one", "two", "three", "four", "five", "six"];
number.push("seven");
number.unshift("zero");
console.log(number);

// T-006: Remove an element from the front and the end of an array.
const numInWord = ["one", "two", "three", "four", "five", "six"];
numInWord.shift();
numInWord.pop();
console.log(numInWord);

// T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
const fruitEmojis = [
    "🍎", // Apple
    "🍌", // Banana
    "🍇", // Grapes
    "🍊", // Orange
    "🍉", // Watermelon
    "🍓", // Strawberry
    "🍍", // Pineapple
    "🥭", // Mango
    "🍑", // Peach
    "🍈"  // Melon
];

const [, , , , , strawberry] = fruitEmojis;
console.log(strawberry);

// T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
const [, , ...rest] = fruitEmojis;
console.log(rest)