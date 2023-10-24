const drinksData = [
    {
        name: 'Blueberry Smoothie',
        price: "5,50€",
        description: "A healthy and flavorful smoothie made with blueberries, yogurt, banana, and a touch of honey.",
        image:'./images/blueberry.jpg'
    },
    {
        name: 'Pina Colada',
        price: "7,50€",
        description: "A tropical cocktail made with rum, coconut cream, and pineapple juice, often served with a pineapple slice and a maraschino cherry.",
        image:'./images/pina_colada.jpg'
    },
    {
        name: 'Chocolate Milkshake',
        price: "7,40€",
        description: "A creamy and indulgent dessert-like drink made with milk, ice cream, and chocolate syrup, often topped with whipped cream and chocolate shavings.",
        image:'./images/chocolate_milkshake.jpg'
    },
];
const foodData = [
    {
        name: 'Tropical Fruit Salad',
        price: "12,80€",
        description: "A refreshing salad with a mix of tropical fruits like pineapple, mango, and kiwi, served with a citrusy dressing. It pairs well with drinks like Mango Lassi and Pina Colada.",
        image:'./images/tropical_fruit_salad.jpg'
    }, 
    {
        name: 'Chicken Sandwich',
        price: "11,70€",
        description: "Delight in our Chicken Sandwich: a juicy, seasoned chicken breast, served in a soft bun with fresh toppings, for a mouthwatering bite.",
        image:'./images/tost.jpg'
    },
    {
        name: 'Coconut Shrimp',
        price: "16,70€",
        description: "A creamy and decadent dessert featuring a strawberry topping on a rich cheesecake base. It makes for a sweet ending to a meal, especially after sipping on a Strawberry Daiquiri.",
        image:'./images/coconut_shrimp.jpg'
    },
    {
        name: 'Double Cheeseburger',
        price: "14,70€",
        description: "Experience burger perfection with our Double Cheeseburger: two succulent patties, layers of melted cheese, and pure delight in every bite.",
        image:'./images/hamburger.jpg'
    },
    {
        name: 'Strawberry Cheesecake',
        price: "9,80€",
        description: "A creamy and indulgent dessert-like drink made with milk, ice cream, and chocolate syrup, often topped with whipped cream and chocolate shavings.",
        image:'./images/strawberry_cheesecake.jpg'
    },
    {
        name: 'Chocolate Fondue',
        price: "7,80€",
        description: "A dessert option where you can dip fruits, marshmallows, or pieces of cake into a warm, melted chocolate sauce. It's a delightful treat to enjoy alongside a Chocolate Milkshake.",
        image:'./images/chocolate_fondue.jpg'
    },
];

function foodsContainers(data, container){
    this.name = data.name;
    this.price = data.price;
    this.description = data.description;
    this.image = data.image;
    
    
    const menuContainers = document.createElement('div');
    
    menuContainers.classList = "containersMenuPage";
          
    container.appendChild(menuContainers);

    const imageContainer = document.createElement('div');
    imageContainer.classList = 'imageContainer';
    menuContainers.appendChild(imageContainer);
    

// Create an image element
    const imageInBody = document.createElement('img');
    imageInBody.src = this.image;
    imageInBody.classList = 'imageInTheMenu';
    imageInBody.loading = 'lazy';
    imageContainer.appendChild(imageInBody);

    const cardBody = document.createElement('div');
    cardBody.classList.add("card_body")
    menuContainers.appendChild(cardBody);


    const titleIfBody = document.createElement('h1');
    titleIfBody.classList = 'title_card';
    titleIfBody.textContent = this.name;
    cardBody.appendChild(titleIfBody);


    const textInBody = document.createElement('div');
    textInBody.classList = 'description_menu_card';
    textInBody.textContent = this.description;
    cardBody.appendChild(textInBody);

    const textAndPriceContainer = document.createElement('div');
    textAndPriceContainer.classList = 'textAndPriceContainer';
    cardBody.appendChild(textAndPriceContainer);




    
    const priceInBody = document.createElement('p');
    priceInBody.classList = 'price_in_card';
    priceInBody.textContent = this.price;
    textAndPriceContainer.appendChild(priceInBody);

    const orderButton = document.createElement('button');
    orderButton.classList = 'order_button';
    orderButton.textContent = "Order";
    textAndPriceContainer.appendChild(orderButton);
   
}



export const menuPage = ()=>{
    
    const bodyContainer = document.querySelector('.body');
    while (bodyContainer.firstChild) {
        bodyContainer.removeChild(bodyContainer.firstChild);
    }
    const containerFoodsDrinks = document.createElement('div');
    containerFoodsDrinks.classList.add("containerFoodsDrinks")
    bodyContainer.appendChild(containerFoodsDrinks)

    const arrDrink = [];
    const arrFood = [];

    const drinksTitleContainer = document.createElement('div');
    drinksTitleContainer.classList = "HeaderOfPages"  
    drinksTitleContainer.textContent = "Beverages"
    containerFoodsDrinks.appendChild(drinksTitleContainer);


    const drinksContainer = document.createElement('div');
    drinksContainer.classList = "drinks_container"
    containerFoodsDrinks.appendChild(drinksContainer);

    drinksData.forEach((drink, index) => {
        arrDrink[index] = new foodsContainers(drink, drinksContainer);
      });

      const foodTitleContainer = document.createElement('div');
      foodTitleContainer.classList = "HeaderOfPages"  
      foodTitleContainer.textContent = "Food"
      containerFoodsDrinks.appendChild(foodTitleContainer);

      const foodContainer = document.createElement('div');
      foodContainer.classList = "food_container"
      containerFoodsDrinks.appendChild(foodContainer);

      foodData.forEach((food, index) => {
        arrFood[index] = new foodsContainers(food, foodContainer);
      });

      
    
    






}