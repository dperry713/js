// Function to generate Fibonacci sequence
function generateFibonacci() {
    // Prompt the user to enter the number of terms
    const numTerms = parseInt(prompt("Enter the number of terms for the Fibonacci sequence:"));

    // Check if the input is a valid number
    if (isNaN(numTerms) || numTerms <= 0) {
        console.log("Please enter a positive integer.");
        return;
    }

    // Initialize the first two terms
    let firstTerm = 0;
    let secondTerm = 1;

    // Display the first two terms if the number of terms is at least 1
    if (numTerms >= 1) {
        console.log(firstTerm);
    }
    if (numTerms >= 2) {
        console.log(secondTerm);
    }

    // Loop to calculate and display the remaining terms
    for (let i = 3; i <= numTerms; i++) {
        const nextTerm = firstTerm + secondTerm; // Calculate the next term
        console.log(nextTerm); // Display the next term
        
        // Update the values of firstTerm and secondTerm
        firstTerm = secondTerm;
        secondTerm = nextTerm;
    }
}

// Call the function to generate the Fibonacci sequence
generateFibonacci();
