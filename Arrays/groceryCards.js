export function getGroceryCards(groceryCardId) {
    const groceries = [
      {
        id: 1,
        name: "Apple",
        shopId: 1,
        shopName: "Fresh Mart",
        price: "$2.5/kg",
      },
      {
        id: 2,
        name: "Banana",
        shopId: 2,
        shopName: "Fruit World",
        price: "$1.2/kg",
      },
      {
        id: 3,
        name: "Carrot",
        shopId: 3,
        shopName: "Veggie Hub",
        price: "$1.8/kg",
      },
      {
        id: 4,
        name: "Tomato",
        shopId: 4,
        shopName: "Farm Fresh",
        price: "$2.0/kg",
      },
      {
        id: 5,
        name: "Milk",
        shopId: 5,
        shopName: "Dairy Store",
        price: "$1.5/L",
      },
      {
        id: 6,
        name: "Bread",
        shopId: 6,
        shopName: "Bakery Bliss",
        price: "$2.0/loaf",
      },
      {
        id: 7,
        name: "Eggs",
        shopId: 4,
        shopName: "Farm Fresh",
        price: "$3.0/dozen",
      },
      {
        id: 8,
        name: "Chicken",
        shopId: 7,
        shopName: "Meat Market",
        price: "$5.0/kg",
      },
      {
        id: 9,
        name: "Rice",
        shopId: 8,
        shopName: "Grain Depot",
        price: "$1.0/kg",
      },
      {
        id: 10,
        name: "Pasta",
        shopId: 9,
        shopName: "Italian Grocer",
        price: "$1.5/500g",
      },
      {
        id: 11,
        name: "Cheese",
        shopId: 5,
        shopName: "Dairy Store",
        price: "$4.0/kg",
      },
      {
        id: 12,
        name: "Yogurt",
        shopId: 5,
        shopName: "Dairy Delight",
        price: "$1.0/500g",
      },
      {
        id: 13,
        name: "Potato",
        shopId: 3,
        shopName: "Veggie Hub",
        price: "$0.8/kg",
      },
      {
        id: 14,
        name: "Onion",
        shopId: 3,
        shopName: "Veggie Hub",
        price: "$1.0/kg",
      },
      {
        id: 15,
        name: "Garlic",
        shopId: 10,
        shopName: "Spice Corner",
        price: "$0.5/100g",
      },
      {
        id: 16,
        name: "Lettuce",
        shopId: 1,
        shopName: "Fresh Mart",
        price: "$1.5/head",
      },
      {
        id: 17,
        name: "Cucumber",
        shopId: 3,
        shopName: "Veggie Hub",
        price: "$1.0/kg",
      },
      {
        id: 18,
        name: "Orange",
        shopId: 2,
        shopName: "Fruit World",
        price: "$1.5/kg",
      },
      {
        id: 19,
        name: "Grapes",
        shopId: 2,
        shopName: "Fruit World",
        price: "$3.0/kg",
      },
      {
        id: 20,
        name: "Strawberries",
        shopId: 11,
        shopName: "Berry Farm",
        price: "$4.5/kg",
      },
      {
        id: 21,
        name: "Peppers",
        shopId: 3,
        shopName: "Veggie Hub",
        price: "$2.0/kg",
      },
      {
        id: 22,
        name: "Zucchini",
        shopId: 3,
        shopName: "Veggie Hub",
        price: "$1.5/kg",
      },
      {
        id: 23,
        name: "Spinach",
        shopId: 12,
        shopName: "Green Grocer",
        price: "$2.0/kg",
      },
      {
        id: 24,
        name: "Broccoli",
        shopId: 12,
        shopName: "Green Grocer",
        price: "$2.5/kg",
      },
      {
        id: 25,
        name: "Cauliflower",
        shopId: 12,
        shopName: "Green Grocer",
        price: "$2.5/kg",
      },
      {
        id: 26,
        name: "Cabbage",
        shopId: 3,
        shopName: "Veggie Hub",
        price: "$1.0/kg",
      },
      {
        id: 27,
        name: "Bell Pepper",
        shopId: 3,
        shopName: "Veggie Hub",
        price: "$2.0/kg",
      },
      {
          id: 27,
          name: "Salty Pepper",
          shopId: 3,
          shopName: "Veggie Hub",
          price: "$4.0/kg",
        },
    
    ];
  
    const groceryCardElement = document.getElementById(groceryCardId);
    if (groceryCardElement) {
      groceries.forEach((item) => {
        const groceryCard = document.createElement("div");
        groceryCard.classList.add("card");
  
        groceryCard.innerHTML = `
        <h3>${item.name}</h3>
        <p>Shop: ${item.shopName}</p>
        <p class="price">${item.price}</p>
        <button>Add to Cart</button>
      `;
      groceryCardElement.appendChild(groceryCard);
      });
    }
  }
  
  
  