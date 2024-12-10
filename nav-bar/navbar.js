import { displayTabBasedOnTab } from "../Arrays/arrays.js";
import { getGroceryCards } from "../Arrays/groceryCards.js";
import { getShopCards } from "../Arrays/shopCards.js";

export function renderNavBar(appContainer) {
  const loginPage = `
<div class='nav-bar' role='navigation'>
     <ul class='nav-tab'>
      <li><a href='#' aria-label='Home' id='homeNav'>Home</a></li>
      <li><a href='#' aria-label='Groceries' id='groceriesNav'>Groceries</a></li>
      <li><a href='#' aria-label='Shops' id='shopsNav'>Shops</a></li>
     </ul>
  <div class='journey-tab' id="home-page-tab">
    <div>
        <div class="stats-container">
            <div class="stat-item">
              <i class="fas fa-truck"></i>
                <div class="stat-text">
                   <h2>1000+ Orders Delivered</h2>
                  <p>We deliver groceries right to your doorstep.</p>
                </div>
        </div>
        <div class="stat-item">
             <i class="fas fa-store"></i>
                <div class="stat-text">
                    <h2>200+ Shops Integrated</h2>
                    <p>Partnering with the best local stores.</p>
                </div>
        </div>
        <div class="stat-item">
                  <i class="fas fa-users"></i>
                   <div class="stat-text">
                     <h2>5000+ Happy Customers</h2>
                     <p>Your satisfaction is our priority.</p>
                  </div>
        </div>
       </div>
    </div>
      <div class='delivery-gif'>
      <img src='Assets/delivery.gif'></img>
      </div>

  </div>
  <div>
  </div>
    <div class='groceries-tab' id='groceries-tab'>
    <div id="groceries-container" class="cards-container"></div>

  </div>
      <div class='shops-tab' id='shops-tab'>
      <div id="shops-container" class="shops-container"></div>

  </div>


</div>
  `;

  //preventing right click option to open DOM
  document.addEventListener("contextmenu",(e)=>e.preventDefault());


  //Disabled DOM using Shorcuts like ctrl+shift+i ,ctrl+shift+j ,ctrl+shift+c
  document.addEventListener('keydown',(e)=>{
    if(e.key==='F12' || e.ctrlKey && e.shiftKey && e.key==='I' || e.ctrlKey && e.shiftKey && e.key === 'J' || e.ctrlKey && e.shiftKey && e.key=== 'C'){
      e.preventDefault();
    }
  })


  

  let divElement = document.createElement("div");
  divElement.innerHTML = loginPage;

  if (divElement.firstElementChild) {
    appContainer.appendChild(divElement.firstElementChild);
  } else {
    console.error("No child elements to append from loginPage.");
  }

  const groceriesNavElement = document.getElementById("groceriesNav");
  groceriesNavElement.addEventListener("click", () => {
    displayTabBasedOnTab("groceries-tab");
  });

  const homeNavElement = document.getElementById("homeNav");
  homeNavElement.addEventListener("click", () => {
    displayTabBasedOnTab("home-page-tab");
  });

  const shopNavElement = document.getElementById("shopsNav");
  shopNavElement.addEventListener("click", () => {
    displayTabBasedOnTab("shops-tab");
  });

  displayTabBasedOnTab("home-page-tab");
  getGroceryCards("groceries-container");
  getShopCards("shops-container");
}
