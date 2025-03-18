export async function fetchUsers() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET", 
        headers: {
          "Content-Type": "application/json", 
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      let data = await response.json();
      console.log("Users with Headers:", data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  

  export function fetchUsersWithXHR() {
    try {
      let xhr = new XMLHttpRequest();
      let url = "https://jsonplaceholder.typicode.com/users";
  
      xhr.open("GET", url, true); // true -> asynchronous request
  
      xhr.setRequestHeader("Content-Type", "application/json");
  
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log("Users with XHR:", JSON.parse(xhr.responseText));
        } else {
          console.error(`HTTP error! Status: ${xhr.status}`);
        }
      };
  
      xhr.onerror = function () {
        console.error("Network error occurred");
      };
  
      xhr.send();
    } catch (error) {
      console.error("Error fetching users with XHR:", error);
    }
  }
  