//  T-001: Create an array of 5 elements using the Array Constructor.
const newArr = new Array(5, 1);

// T-002: Create an array of 3 empty slots.
const epltyArr = new Array(3);

// T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
const sixElementsOfArr = ["one", "two", "three", "four", "five", "six"];
const fourthEle = sixElementsOfArr[3];
// console.log(fourthEle);

// T-004: Use the for loop on the above array to print elements in the odd index.
for (let i = 1; i < sixElementsOfArr.length; i = i + 2) {
    // console.log(sixElementsOfArr[i]);
}

// T-005: Add one element at the front and the end of an array.
const number = ["one", "two", "three", "four", "five", "six"];
number.push("seven");
number.unshift("zero");
// console.log(number);

// T-006: Remove an element from the front and the end of an array.
const numInWord = ["one", "two", "three", "four", "five", "six"];
numInWord.shift();
numInWord.pop();
// console.log(numInWord);

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
// console.log(strawberry);

// T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
const [, , ...rest] = fruitEmojis;
// console.log(rest);

// T-009: Clone an Array(Shallow cloning)
const fruits = [
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
const cloneFruits = fruits.slice();
// console.log(cloneFruits);

// T-010: Empty an array using its length property
const arr10 = [1, 2, 3, 4, 5]
arr10.length = 0;
// console.log(arr10);

// T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.
{
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 5) {
            nums.length = 6;
            // console.log(nums[i])
            break;
        }
    }
    // console.log(nums)
}

// T-012: Create an Array of 10 elements. Use the splice() method to empty the array.
{
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    nums.splice(0);
    // console.log({nums}) 
    // nums = []
    // console.log(nums)
}

// T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?

/** =================

 * length = 0:
    Efficiency: Most efficient.
    Reason: This operation resets the array in constant time (O(1)), regardless of the size of the array.
    Use Case: Best when you simply want to clear the array without preserving references.
 * Setting to []:
    Efficiency: Very efficient.
    Reason: Assigning a new empty array is a constant time operation (O(1)), similar to length = 0. However, any references to the old array are preserved, which may not clear all memory in use.
    Use Case: Best when you want to completely replace the array.

================= */

// T-014: What happens when you concatenate two empty arrays?
//  it return a different reference empty array
{
    const arr1 = [];
    const arr2 = [];
    // console.log(arr1.concat(arr2))
}

// T-015: How can you check if a value is partially matching with any of the elements of an Array?
{
    let fruits = ["apple", "banana", "cherry", "grape"];
    const isPartialMatch = fruits.some(fruit => fruit.includes("app")); // "app" আংশিক মিল খোঁজে
    console.log(isPartialMatch);
} 