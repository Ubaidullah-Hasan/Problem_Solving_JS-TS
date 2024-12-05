type TPeople = {
    name: string;
    age: number;
    gender: "male" | "female";
}

const people: TPeople[] = [
    { name: "John", age: 30, gender: "male" },
    { name: "Jane", age: 25, gender: "female" },
    { name: "Mike", age: 28, gender: "male" },
    { name: "Alice", age: 22, gender: "female" },
    { name: "Bob", age: 35, gender: "male" }
];

const nameOfMalePeople = (people: TPeople[]) => {
    const male = people.filter(p => p.gender !== "female");
    return male.map(m => m.name);
}

console.log(nameOfMalePeople(people));