export function displayTabBasedOnTab(navigatingTab) {
  const tabsInApplication = [
    "home-page-tab",
    "groceries-tab",
    "shops-tab",
  ];

  //filtering array based on navigationTab
  const remainingTabs = tabsInApplication.filter(
    (tabName) => tabName !== navigatingTab
  );

  //using maps in array to iterate and return the element based on navIds
  const tabElements = remainingTabs.map((tabName) =>
    document.getElementById(tabName)
  );

  //using forEach in arrays to iterate and change the properties of elements in DOM
  tabElements.forEach((element) => {
    element.style.display = "none";
  });

  const navigatingTabElement = document.getElementById(navigatingTab);
  if (navigatingTabElement) {
    navigatingTabElement.style.display = "block";
  } else {
    console.error(`Element with ID "${navigatingTab}" not found.`);
  }
}



// Write a program to process the following array of numbers:
// const numbers = [10, -5, 0, 25, -30, 15, 5, -10];


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
