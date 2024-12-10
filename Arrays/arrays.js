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


