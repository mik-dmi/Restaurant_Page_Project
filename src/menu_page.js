const Data = [
    {
        name: 'Blueberry Smoothie',
        price: "5,50€",
        description: "A healthy and flavorful smoothie made with blueberries, Greek yogurt, milk, banana, lemon, and a touch of honey.",
        image:'./images/blueberry.jpg',
        category: 'Beverage',
    },
    {
        name: 'Piña Colada',
        price: "7,50€",
        description: "A tropical cocktail made with rum, coconut cream, and pineapple juice, often served with a pineapple slice and a maraschino cherry.",
        image:'./images/pina_colada.jpg',
        category: 'Beverage',
    },
    {
        name: 'Chocolate Milkshake',
        price: "7,40€",
        description: "A creamy  dessert-like drink made with milk, ice cream, and chocolate, topped with whipped cream and chocolate shavings.",
        image:'./images/chocolate_milkshake.jpg',
        category: 'Beverage',
    },
    {
        name: 'Tropical Fruit Salad',
        price: "12,80€",
        description: "A salad with a mix of tropical fruits like pineapple, mango, and kiwi, served with a citrusy dressing.",
        image:'./images/tropical_fruit_salad.jpg',
        category: 'Salad',
    }, 
    {
        name: 'Chicken Sandwich',
        price: "11,70€",
        description: "Delight in our Chicken Sandwich: a juicy, seasoned chicken breast, served in a soft bun with fresh toppings.",
        image:'./images/tost.jpg',
        category: 'Sandwich',
    },
    {
        name: 'Coconut Shrimp',
        price: '16.70€',
        description: 'Indulge in our Coconut Shrimp: crispy, golden-fried delights with a luscious coconut batter. A perfect blend of savory and tropical sweetness.' ,
        image:'./images/coconut_shrimp.jpg',
        category: 'Shrimp',

    },
    {
        name: 'Double Cheeseburger',
        price: "14,70€",
        description: "Experience our Double Cheeseburger: two patties, layers of melted cheese, and pure delight in every bite.",
        image:'./images/hamburger.jpg',
        category: 'Burger'
    },
    {
        name: 'Strawberry Cheesecake',
        price: "9,80€",
        description: "A creamy dessert-like drink made with milk, ice cream, and chocolate syrup, often topped with whipped cream and chocolate shavings.",
        image:'./images/strawberry_cheesecake.jpg',
        category: 'Desert'
    },
    {
        name: 'Chocolate Fondue',
        price: "7,80€",
        description: "A dessert option where you can dip fruits, marshmallows, or pieces of cake into a warm, melted chocolate sauce.",
        image:'./images/chocolate_fondue.jpg',
        category: 'Desert'
    },
];

function foodsContainers(data, container){
    this.name = data.name;
    this.price = data.price;
    this.description = data.description;
    this.image = data.image;
    this.category = data.category;
    
    
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
    menuContainers.appendChild(textAndPriceContainer);





    const foodCategory = document.createElement('p');
    foodCategory.classList = 'foodCategory';
    foodCategory.textContent = this.category;
    textAndPriceContainer.appendChild(foodCategory);


    const foodTitle = document.createElement('p');
    foodTitle.classList = 'foodTitle';
    foodTitle.textContent = this.name;
    textAndPriceContainer.appendChild(foodTitle);
    

    

    const priceContainer = document.createElement('div');
    priceContainer.classList = 'priceContainer';
    textAndPriceContainer.appendChild(priceContainer);

    const priceTag = document.createElement('p');
    priceTag.classList.add('priceTag');
    priceTag.textContent = 'Price:';
    priceContainer.appendChild(priceTag);

    const priceInBody = document.createElement('p');
    priceInBody.classList = 'price_in_card';
    priceInBody.textContent = this.price;
    priceContainer.appendChild(priceInBody);
/*
    const orderButton = document.createElement('button');
    orderButton.classList = 'order_button';
    orderButton.textContent = "Order";
    textAndPriceContainer.appendChild(orderButton);
 */  
}



export const menuPage = ()=>{
    
    const bodyContainer = document.querySelector('.body');

    const containerFoodsDrinks = document.createElement('div');
    containerFoodsDrinks.classList.add("containerFoodsDrinks")
    containerFoodsDrinks.id = "menu"
    bodyContainer.appendChild(containerFoodsDrinks)

    const arrProducts = [];
   






    const subHeader = document.createElement('div');
    subHeader.classList = "subHeader";

    subHeader.style.alignItems = "center";

    containerFoodsDrinks.appendChild(subHeader);

    const subHeaderText = document.createElement('p');
    subHeaderText.classList = "subHeaderText";
    subHeader.appendChild(subHeaderText);
    subHeaderText.textContent = "Menus For An Ideal Brunch"

    const subHeaderImage = document.createElement('img');
    subHeaderImage.classList = "subHeaderImage";
    subHeader.appendChild(subHeaderImage);
    subHeaderImage.src = "./images/welcomeImages/spoon.svg"
    

    const menuTitleContainer = document.createElement('div');
    menuTitleContainer.classList = "sectionHeader";
    containerFoodsDrinks.appendChild(menuTitleContainer);
    
    const spanMenuTitleContainer = document.createElement('span');
    spanMenuTitleContainer.textContent = "Our Menu";
    menuTitleContainer.appendChild(spanMenuTitleContainer);


    const ProductContainer = document.createElement('div');
    ProductContainer.classList = "product_container"
    containerFoodsDrinks.appendChild(ProductContainer);

    Data.forEach((drink, index) => {
        arrProducts[index] = new foodsContainers(drink, ProductContainer);
      });

    
    






}