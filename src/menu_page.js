const drinks = {
    name: 'Blueberry Smoothie',
    price: "5€",
    description: "A healthy and flavorful smoothie made with blueberries, yogurt, banana, and a touch of honey.",
    image:'../images/blueberry.jpg'
  };

function foodsConainers(data){
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
    textInBody.classList = 'textInBody';
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
    imageContainer.appendChild(imageInBody);
}



export const menuPage = ()=>{
    
    const bodyContainer = document.querySelector('.body');
    while (bodyContainer.firstChild) {
        bodyContainer.removeChild(bodyContainer.firstChild);
    }

    const firstDrink = new foodsConainers(drinks);
    






}