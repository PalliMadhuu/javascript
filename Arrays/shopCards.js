export function getShopCards(shopDiv){
    const shopCardElement=document.getElementById(shopDiv);
    const shops = [
        { name: "Fresh Mart", location: "Downtown", rating: "4.5/5" },
        { name: "Fruit World", location: "Market Street", rating: "4.7/5" },
        { name: "Veggie Hub", location: "Green Valley", rating: "4.2/5" },
        { name: "Farm Fresh", location: "Countryside", rating: "4.8/5" },
        { name: "Dairy Store", location: "Central Park", rating: "4.6/5" },
        { name: "Organic Oasis", location: "Riverbend", rating: "4.9/5" },
        { name: "Harvest Market", location: "East Side", rating: "4.3/5" },
        { name: "Nature's Basket", location: "West End", rating: "4.4/5" },
        { name: "Green Grocer", location: "North Hill", rating: "4.1/5" },
        { name: "Local Produce", location: "Southtown", rating: "4.5/5" },
        { name: "The Fruit Stand", location: "Sunnyvale", rating: "4.6/5" },
        { name: "Veggie Delight", location: "Maplewood", rating: "4.2/5" },
        { name: "Farm to Table", location: "Cedar Grove", rating: "4.8/5" },
        { name: "Purely Organic", location: "Lakeside", rating: "4.7/5" },
        { name: "The Greenhouse", location: "Hilltop", rating: "4.3/5" },
        { name: "Fresh Fields", location: "Pine Valley", rating: "4.5/5" },
        { name: "Nature's Bounty", location: "Oakwood", rating: "4.6/5" },
        { name: "The Berry Patch", location: "Meadowlands", rating: "4.9/5" },
        { name: "Healthy Harvest", location: "Springfield", rating: "4.4/5" },
        { name: "The Market Place", location: "Seaside", rating: "4.2/5" },
        { name: "Wholesome Foods", location: "Forest Hill", rating: "4.8/5" },
    ];
    
    if(shopCardElement){
        shops.forEach((shopInfo)=>{
        const shopCard=document.createElement('div');
        shopCard.classList.add("shop-card");

        shopCard.innerHTML = `
          <h3>${shopInfo.name}</h3>
          <p>Location: ${shopInfo.location}</p>
          <p>Rating: ${shopInfo.rating}</p>
          <button>View Shop</button>
        `;
      
        shopCardElement.appendChild(shopCard);
        })

    }
    

}