const cars = [
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "Ford", model: "Focus", year: 2012 },
    { make: "Chevrolet", model: "Malibu", year: 2020 },
    { make: "Tesla", model: "Model 3", year: 2021 }
];

function sortCarsByYear(cars) {
    return cars.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);

console.log(sortedCars);