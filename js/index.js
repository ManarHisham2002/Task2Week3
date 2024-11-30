// ---------- Exercise 1 ---------- 
function filterEvenNumbers() {
    // Get the input value
    const input = document.getElementById('numbersInput').value;

    // Convert the comma-separated string to an array of numbers and remove duplicates using Set
    const numbers = Array.from(new Set(input.split(',').map(num => parseInt(num.trim(), 10))));

    // Filter out even numbers
    const evenNumbers = numbers.filter(num => num % 2 === 0);

    // Sort the even numbers in ascending order
    const sortedEvenNumbers = evenNumbers.sort((a, b) => a - b);

    // Display the result
    if (sortedEvenNumbers.length > 0) {
        document.getElementById('evenNums').innerText = sortedEvenNumbers.join(' | ');
        document.getElementById('evenNums').className = 'col-6 text-center';
    } else {
        document.getElementById('evenNums').innerText = "No Even Numbers Found";
        document.getElementById('evenNums').className = 'col-6 text-center text-danger'; // Add error 
    }
}
// ---------- Exercise 2 ---------- 
function findLargestNumber() {
    // Get the input value
    const input = document.getElementById('numberArray').value;

    // Convert the input string to an array of numbers
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    // Check for invalid input
    if (numbers.some(isNaN)) {
        document.getElementById('largestNum').textContent = 'Please Enter Valid Numbers';
        document.getElementById('largestNum').className = 'col-6 text-center text-danger'; // Add error 
        return;
    }

    // Find the largest number in the array
    const largest = Math.max(...numbers);

    // Display the result
    document.getElementById('largestNum').textContent = largest;
    document.getElementById('largestNum').className = 'col-6 text-center'; // Remove error 
}

// ---------- Exercise 3 ----------
function reverseString() {
    // Get the input value
    const input = document.getElementById('inputString').value.trim();

    // Check if the input is empty
    if (input === '') {
        document.getElementById('reverse').textContent = 'Please enter text';
        document.getElementById('reverse').className = 'col-8 text-center text-danger'; // Add error styling
        return;
    }

    // Reverse the string
    const reversed = input.split('').reverse().join('');

    // Display the reversed string
    document.getElementById('reverse').textContent = reversed;
    document.getElementById('reverse').className = 'col-8 text-center'; // Remove error styling
}



// ---------- Exercise 4 ---------- 
function removeDuplicates() {
    // Get the input value
    const input = document.getElementById('inputArray').value;

    // Convert the input string to an array of numbers
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    // Check for invalid input
    if (numbers.some(isNaN)) {
        document.getElementById('output').textContent = 'Please enter valid numbers';
        document.getElementById('output').className = 'col-8 text-center text-danger'; // Add error
        return;
    }

    // Remove duplicates using Set
    const uniqueNumbers = [...new Set(numbers)];

    // Display the result
    document.getElementById('output').textContent = uniqueNumbers.join(', ');
    document.getElementById('output').className = 'col-8 text-center'; // Remove error
}
