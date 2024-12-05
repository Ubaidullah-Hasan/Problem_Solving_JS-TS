const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 26 },
    { name: "Mike", age: 28 },
    { name: "Alice", age: 22 }
]

const modifyAge = (people, name, age) => {
    const person = people.find(p => p.name === name);
    if(!person) return "not found";
    person.age = age;
    return people;
}

const result = modifyAge(people, "Jane", 99);
console.log(result);
