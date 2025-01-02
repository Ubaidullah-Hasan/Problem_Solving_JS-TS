/* ================================ 
Practice Problems: JavaScript Classes 
================================ /*

/* ================
Basic Class Concepts

1. Create a Simple Class
Write a class `Car` with a constructor that takes `make` and`model` as arguments.Add a method `getDetails` that returns "Make: [make], Model: [model]".
================ */
{
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
        }

        getDetails() {
            return `Make: ${this.make}, Model: ${this.model}`;
        }
    }
    const toyota = new Car("Toyota", "Camry");
}


/* ================
2. Adding Properties to a Class
Create a class `Person` with a constructor that takes `name` and`age`.Add a method `greet` that logs "Hello, my name is [name] and I am [age] years old."
================ */
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
        }
    }

    const sakib = new Person("Sakib", 20);
    sakib.greet();
}


/* ================
3. Default Parameters in Constructor
Create a class `Book` with a constructor that takes `title` and`author`.Set `author` to "Unknown" if not provided. Add a method to log the book's details.
================ */
{
    class Book {
        constructor(title, author = "Unknown") {
            this.title = title;
            this.author = author;
        }

        bookDetails() {
            console.log(`Book name is ${this.title} and author is ${this.author}.`)
        }
    }

    const bangla = new Book("Amar Bangla");
    bangla.bookDetails();
}

/* ================
4. Static Methods
Create a class `MathUtils` with a static method `add` that takes two numbers and returns their sum.Test the method without creating an instance of the class.
================ */
{
    class MathUtils {
        static add(a, b) {
            return a + b;
        }
    }
    console.log(MathUtils.add(2, 3))
}

/* ================
5. Getters and Setters
Create a class `Rectangle` with properties`width` and`height`.Add getter methods for `area` and`perimeter`.Add a setter for `width` that ensures it cannot be negative.
================ */
{
    class Rectangle {
        #width;
        #height;
        constructor(width, height) {
            this.#width = width;
            this.#height = height;
        }
        /* =========== 
         ## i can't access the value of width and height of the outside the class, because i am using "#", which means it is public 
            => getters: i need to a getters so that i can access which and height value outside of the class
            => Setters: i need to a setters so that i can set a new value to the outside of the class
        =========== */

        // getters
        getWidthAndHdight() {
            return {
                whith: this.#width,
                height: this.#height,
            };
        }

        // Setters
        setNewValueOfWidth(hei){
            this.#height = hei;
        }

    }
    const firstRec = new Rectangle(300, 200);
    console.log(firstRec.width) // undefined
    console.log(firstRec.getWidthAndHdight());
    firstRec.setNewValueOfWidth(1000)
    console.log(firstRec.getWidthAndHdight());
}


/* ================
Inheritance

6. Simple Inheritance
Create a parent class `Shape` with a method `getType` that logs "I am a shape." Extend it to create a class `Circle`.Test the `getType` method on an instance of`Circle`.
================ */

/* ================
 7. Overriding Methods
Create a class `Animal` with a method `speak` that logs "Animal makes a noise." Extend it to create a `Dog` class that overrides the `speak` method to log "Dog barks."
================ */

/* ================
8. Calling Parent Methods
Modify the `Dog` class to include a method `superSpeak` that calls the `speak` method of the `Animal` class.
================ */

/* ================
9. Adding New Properties in Subclass
Extend the `Animal` class to create a `Cat` class. Add a new property`color` in the constructor.Create an instance of `Cat` and log its properties.
================ */

/* ================
 10. Instance Type Check
Create an instance of `Dog` and check if it is an instance of `Dog` and `Animal` classes.Log the results.
================ */

/* ================

Advanced Concepts

11. Private Properties
Create a class `BankAccount` with a private property`balance`.Add methods to deposit, withdraw, and check the balance.Ensure the balance cannot be accessed directly.
================ */

/* ================
 12. Abstract Classes Simulation
Create a class `Vehicle` with a method `move()` that throws an error if called directly.Extend it to create `Car` and `Bike` classes that implement the `move()` method.
================ */

/* ================
 13. Method Chaining
Create a class `Counter` with a property`count`(default 0).Add methods`increment()`, `decrement()`, and`reset()`.Ensure these methods return `this` to allow method chaining.
================ */

/* ================
 14. Class Composition
Create a class `Engine` with a method`start`.Create a class `Car` that has an instance of`Engine`.Call the `start` method from the `Car` instance.
================ */

/* ================
 15. Polymorphism with Inheritance
Create a class `Employee` with a method `getRole` that returns "Employee".Extend it to create classes `Manager` and `Engineer` that override `getRole` to return "Manager" and "Engineer", respectively.Test with instances of all three classes.
================ */

