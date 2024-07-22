function countDown(num) {
    // Ensure num is a positive integer
    if (num <= 0 || !Number.isInteger(num)) {
        console.log("Please enter a positive integer greater than zero.");
        return;
    }

    // Count down from num to 0
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}

// Example usage:
countDown(10);
