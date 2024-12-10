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



    const expandedArray = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 30 },
        { name: 'Diana', age: 25 },
        { name: 'Edward', age: 25 },
        { name: 'Fiona', age: 30 },
        { name: 'George', age: 30 },
        { name: 'Hannah', age: 25 },
        { name: 'Ian', age: 30 },
          { name: 'Ian', age: 31},
      
      ];
      
      //group by function which groups based on keys
      function groupBy(array,key){
          let groups={};
          
          array.forEach((obj)=>{
              let groupKey=obj[key];
              if(!groups[groupKey]){
                  groups[groupKey]=[];
              }
              groups[groupKey].push(obj)
              
          })
          console.log(groups);
      }
      
      groupBy(expandedArray,'age')


//finding consequetive sequence
const sortedArray = [100, 4, 200, 1, 3, 2,5,6,7,8,101,102,103,104,105,106,107,108,206,207,209];

let array=sortedArray.sort((a,b)=>a-b);
let longestSequence=1;
let templongestsequence=1;
for(let i=0;i<array.length-1;i++){
    if(array[i]==array[i+1]-1){
        longestSequence++;
    }
    else{
        if(longestSequence>templongestsequence)
        {
        templongestsequence=longestSequence;
        }
        longestSequence=1;
    }
    
}
templongestsequence=Math.max(templongestsequence,longestSequence) 
console.log(templongestsequence)

// const array = [1, 2, 3, 4, 5, 6];
// const target = 7;
// pair the values  according to sum

function targetPair(){
    let array = [1, 2, 3, 4, 5, 6];
    let target=7;
    let pairs=[];
    array.forEach((num,index)=>{
        for(let i=index=1;i<array.length;i++){
            if(num+array[i]===target){
               pairs.push([num,array[i]]);
            }

        }
    })
}


//used to reverse by k
function revByRight(){
const array = [1, 2, 3, 4, 5, 6];

let revArray=array.reverse();
let k=3;
console.log(revArray.splice(0,k).reverse().concat(array.reverse()));
}






