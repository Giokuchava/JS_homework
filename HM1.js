//TASK 1

function swapFirstAndLast(str) {
    if (str.length < 1) {
        return "String length must be at least 1.";
    }
    if (str.length === 1) {
        return str; 
    }

    
    const firstChar = str[0];
    const lastChar = str[str.length - 1];
    const middle = str.slice(1, -1);

    return lastChar + middle + firstChar;
}


const inputString = "example";
const result = swapFirstAndLast(inputString);
console.log(result);

//TASK 2

function cloneArray(arr) {
    return arr.slice(); 
}

const originalArray = [1, 2, 3, 4];
const clonedArray = cloneArray(originalArray);
console.log(clonedArray); 

//TASK 3

function insertDashes(num) {
    const numStr = num.toString();
    let result = "";

    for (let i = 0; i < numStr.length; i++) {
        result += numStr[i];
        if (i < numStr.length - 1 && numStr[i] % 2 === 0 && numStr[i + 1] % 2 === 0) {
            result += "-";
        }
    }

    return result;
}


const inputNumber = 25468;
const dashedOutput = insertDashes(inputNumber);
console.log(dashedOutput);

//TASK 4

function findMostFrequent(arr) {
    const frequency = {};
    let maxCount = 0;
    let mostFrequentItem = null;

    for (const item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;
        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequentItem = item;
        }
    }

    return `${mostFrequentItem} (${maxCount} times)`;
}


const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const mostFrequent = findMostFrequent(arr1);
console.log(mostFrequent); 

//TASK 5

function findLongestWord(str) {
    const words = str.split(" ");
    let longestWord = "";

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}


const exampleString = "Web Development Tutorial";
const longestWord = findLongestWord(exampleString);
console.log(longestWord);
