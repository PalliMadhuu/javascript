// Perform the following tasks:

// Create a new array containing only the positive numbers.
// Find the first negative number in the array.
// Check if all numbers in the array are non-negative.
// Add a new number at the start and end of the array.
// Remove the first and last number from the array.
// Reverse the array.
// Create a new array where each number is squared.
// Sort the array in ascending order.
// Remove duplicate numbers from the array.
// Find the sum of all numbers greater than 5.


export function arrayMethodsInJs(){
    const numbers=[10, -5, 0, 25, -30, 15, 5, -10];
    let arrayWithPstiveNums=numbers.filter((number)=>number>=0);
    let firstNegativeNumberInArray=numbers.find((num)=>num<0);
    let isAllNumsAreNonNegative=numbers.every((num)=>num>=0);
    let randomNum=11;
    numbers.push(randomNum);
    numbers.unshift(randomNum);
    numbers.reverse();
    let squareNums=numbers.map((number)=>num*num);
    let sortedNums=numbers.sort((a,b)=>a-b);

    //Removing Duplicates from the array
    let arrayWithoutDuplicates = [];
    numbers.forEach((num, index) => {
        let isDuplicate = false;
        for (let startIndex = 0; startIndex < index; startIndex++) {
            if (numbers[startIndex] === num) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            arrayWithoutDuplicates.push(num);
        }
    });
    
    console.log(arrayWithoutDuplicates);


   //used to calculate the sum greater than 5 
   let sum= arrayWithoutDuplicates.filter((number)=>number>5).reduce((sumValue,number)=>sumValue+number,0);
    

}


// Write a function called chunkArray that takes two arguments:

// arr (an array of elements),
// size (a positive integer representing the chunk size).
// The function should divide the input array into smaller subarrays, where each subarray has exactly size elements, except the last subarray, which may contain fewer elements if there aren't enough values.
// Handle edge cases like an empty array or invalid chunk size (size <= 0).

// Ex:  chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
 // Output: [[1, 2, 3], [4, 5, 6], [7]]


    export function chunkArray(sizeOfSubArray,arrayOfElements){
        let tempArrayOfElememts=arrayOfElements;
        if(tempArrayOfElememts.length<=0 || sizeOfSubArray <=0 ){
            return arrayOfElements;
        }
        let chunkArray=[];
       while (tempArrayOfElememts.length >0) {
        let slicedArray= arrayOfElements.slice(0,sizeOfSubArray);
        arrayOfElements.splice(0,sizeOfSubArray);
        if(slicedArray.length>0){
        chunkArray.push(slicedArray);
        }
        }
        console.log(chunkArray);
    }
