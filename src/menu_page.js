const drinksData = [
    {
        name: 'Blueberry Smoothie',
        price: "5€",
        description: "A healthy and flavorful smoothie made with blueberries, yogurt, banana, and a touch of honey.",
        image:'./images/blueberry.jpg'
    },
    {
        name: 'Pina Colada',
        price: "7€",
        description: "A tropical cocktail made with rum, coconut cream, and pineapple juice, often served with a pineapple slice and a maraschino cherry.",
        image:'./images/pina_colada.jpg'
    },
    {
        name: 'Chocolate Milkshake',
        price: "7€",
        description: "A creamy and indulgent dessert-like drink made with milk, ice cream, and chocolate syrup, often topped with whipped cream and chocolate shavings.",
        image:'./images/chocolate_milkshake.jpg'
    },
];
const foodData = [
    {
        name: 'Tropical Fruit Salad',
        price: "12€",
        description: "A refreshing salad with a mix of tropical fruits like pineapple, mango, and kiwi, served with a citrusy dressing. It pairs well with drinks like Mango Lassi and Pina Colada.",
        image:'./images/tropical_fruit_salad.jpg'
    },
    {
        name: 'Coconut Shrimp',
        price: "16€",
        description: "A creamy and decadent dessert featuring a strawberry topping on a rich cheesecake base. It makes for a sweet ending to a meal, especially after sipping on a Strawberry Daiquiri.",
        image:'./images/coconut_shrimp.jpg'
    },
    {
        name: 'Strawberry Cheesecake',
        price: "9€",
        description: "A creamy and indulgent dessert-like drink made with milk, ice cream, and chocolate syrup, often topped with whipped cream and chocolate shavings.",
        image:'./images/strawberry_cheesecake.jpg'
    },
    {
        name: 'Chocolate Fondue',
        price: "7€",
        description: "A dessert option where you can dip fruits, marshmallows, or pieces of cake into a warm, melted chocolate sauce. It's a delightful treat to enjoy alongside a Chocolate Milkshake.",
        image:'./images/chocolate_fondue.jpg'
    },
];

function foodsContainers(data){
    this.name = data.name;
    this.price = data.price;
    this.description = data.description;
    this.image = data.image;
    
    const bodyContainer = document.querySelector('.body');
  

    const menuContainers = document.createElement('div');
    menuContainers.classList = "containersMenuPage";      
    bodyContainer.appendChild(menuContainers);

    const titleIfBody = document.createElement('p');
    titleIfBody.classList = 'titleInBody';
    titleIfBody.textContent = this.name;
    menuContainers.appendChild(titleIfBody);

    const textAndPriceContainer = document.createElement('div');
    textAndPriceContainer.classList = 'textAndPriceContainer';
    menuContainers.appendChild(textAndPriceContainer);

    const textInBody = document.createElement('p');
    textInBody.classList = 'textInBodyMenu';
    textInBody.textContent = this.description;
    textAndPriceContainer.appendChild(textInBody);
    
    const priceInBody = document.createElement('p');
    priceInBody.classList = 'priceInBody';
    priceInBody.textContent = this.price;
    textAndPriceContainer.appendChild(priceInBody);

    const imageContainer = document.createElement('div');
    imageContainer.classList = 'imageContainer';
    menuContainers.appendChild(imageContainer);
    

// Create an image element
    const imageInBody = document.createElement('img');
    imageInBody.src = this.image;
    imageInBody.classList = 'imageInTheMenu';
    imageInBody.loading = 'lazy';
    imageContainer.appendChild(imageInBody);
}



export const menuPage = ()=>{
    
    const bodyContainer = document.querySelector('.body');
    while (bodyContainer.firstChild) {
        bodyContainer.removeChild(bodyContainer.firstChild);
    }
    const arrDrink = [];
    const arrFood = [];

    const drinksTitleContainer = document.createElement('div');
    drinksTitleContainer.classList = "titleMenu"  
    drinksTitleContainer.textContent = "Beverages"
    bodyContainer.appendChild(drinksTitleContainer);


    drinksData.forEach((drink, index) => {
        arrDrink[index] = new foodsContainers(drink);
      });

      const foodTitleContainer = document.createElement('div');
      foodTitleContainer.classList = "titleMenu"  
      foodTitleContainer.textContent = "Food"
      bodyContainer.appendChild(foodTitleContainer);

      foodData.forEach((food, index) => {
        arrFood[index] = new foodsContainers(food);
      });

      
    
    






}