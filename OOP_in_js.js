// Practice Questions for JavaScript Classes and Inheritance

// Question 1: Basic Class and Object
// Create a class called 'Animal' with a constructor that takes a name.
// Add a method 'speak' that logs "[name] makes a noise."
// Create an instance of the class and call the speak method.

class Animal {
    constructor(name) {
        this.name = name; // Assign the name
    }

    speak() {
        console.log(`${this.name} makes a noise.`)
    }
}

const dog = new Animal("Dog"); // Create an instance of the Animal class
// dog.speak(); // Call the speak method



// Question 2: Inheritance Basics
// Create a class 'Dog' that extends the 'Animal' class.
// Add a 'speak' method to 'Dog' that overrides the parent method and logs "[name] barks."
// Test the speak method with an instance of Dog.

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        // console.log(`${this.name} barks.`)
    }
}

const pilot = new Dog("Pilot");
pilot.speak();

{
    // Question 3: Calling Parent Methods
    // Modify the 'Dog' class to include a method 'superSpeak' that calls the 'speak' method of the parent class.
    // Test the method using an instance of Dog.

    class Animal {
        constructor(name) {
            this.name = name;
        };
        speak() {
            // console.log(`${this.name} makes a noise.`)
        }
    }

    class Dog extends Animal {
        constructor(name) {
            super(name);
        }
        superSpeak() {
            super.speak();
        }
    }

    const totko = new Dog("Totko");
    totko.superSpeak();
}

{
    // Question 4: Adding New Properties in Subclass
    // Extend the 'Animal' class to create a 'Cat' class.
    // Add a new property 'color' in the 'Cat' class constructor.
    // Create an instance of 'Cat' with a name and color, and log both properties.
    class Animal {
        constructor(name) {
            this.name = name;
        };
        speak() {
            console.log(`${this.name} makes a noise.`)
        }
    }

    class Cat extends Animal {
        constructor(name, color) {
            super(name)
            this.color = color;
        }
    }

    const mew = new Cat("Mew", "black");
    // console.log(mew.name, mew.color);
}


// Question 5: Checking Instance Type
// Create an instance of 'Dog' and check if it is an instance of 'Dog' and 'Animal' classes.
// Log the results.


// Happy Coding! Try to solve each question step-by-step and understand the concept of inheritance in JavaScript Classes.
