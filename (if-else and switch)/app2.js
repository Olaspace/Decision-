function getTicketPrice(age) {
    if (age <= 12) {
        return "$10";
    } else if (age >= 13 && age <= 17) {
        return "$15";
    } else {
        return "$20";
    }
}

// Example usage:
let age = 15;
console.log(`The ticket price for age ${age} is ${getTicketPrice(age)}`);
