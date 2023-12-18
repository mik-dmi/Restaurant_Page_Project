
const data =[
    {image:"./images/welcomeImages/welcomeImageOne.jpg",title:"Chefs Excellency", description:"Elevate your brunch experience with our Chefs Excellency. Our culinary artisans craft each dish with passion and precision, delivering a symphony of flavors that redefine brunch excellence."},
    {image:"./images/welcomeImages/welcomeImageTwo.jpg",title:"Fresh Products", description:"Savor the essence of freshness at our seaside eatery. We meticulously select the finest, locally-sourced ingredients, expertly curating a menu that bursts with vibrant flavors and culinary delights."},
    {image:"./images/welcomeImages/welcomeImageThree.jpg",title:"Perfect Location",description: "Indulge in brunch bliss with the perfect backdrop. Nestled on the sun-kissed beaches of California, our restaurant offers panoramic views of the ocean, creating an idyllic setting for a leisurely brunch."},
]


export const welcomePage = ( ) => {
    const welcomeCards = []
    const welcomeCardsImage = []
    const welcomeCardsHeader = []
    const welcomeCardsParagraph = []
    const welcomeCardsButton = []
    const welcomeCardsImageContainer = []
    const welcomeCardsContainerButton = []
    const welcomeCardsTextContainer = []

    const mainContainer = document.querySelector('.body');
           
    const welcomeContainer = document.createElement('div');
    welcomeContainer.classList = "welcomeContainer";
    mainContainer.appendChild(welcomeContainer); 
    
    
    const welcomeHeaderContainer = document.createElement('div');
    welcomeHeaderContainer.classList = "welcomeHeaderContainer";
    welcomeContainer.appendChild(welcomeHeaderContainer); 
    
    const subHeader = document.createElement('div');
    subHeader.classList = "subHeader";
    welcomeHeaderContainer.appendChild(subHeader);

    const subHeaderText = document.createElement('p');
    subHeaderText.classList = "subHeaderText";
    subHeader.appendChild(subHeaderText);
    subHeaderText.textContent = "What Set Us Apart"

    const subHeaderImage = document.createElement('img');
    subHeaderImage.classList = "subHeaderImage";
    subHeader.appendChild(subHeaderImage);
    subHeaderImage.src = "./images/welcomeImages/spoon.svg"


    const welcomeTitleContainer = document.createElement('h2');
    welcomeTitleContainer.classList = "welcomeTitleContainer";
    welcomeHeaderContainer.appendChild(welcomeTitleContainer); 
 

    const welcomeHeaderOne = document.createElement('h2');
    welcomeHeaderOne.classList = "sectionHeader";
    welcomeTitleContainer.appendChild(welcomeHeaderOne); 
    welcomeHeaderOne.textContent = "Welcome to" 

    const restaurantIcon = document.createElement('span');
    restaurantIcon.classList.add("sectionHeader");
    restaurantIcon.classList.add("iconRestaurant");
    welcomeTitleContainer.appendChild(restaurantIcon); 

    const icon = document.createElement('svg');
    restaurantIcon.appendChild(icon);
    
    fetch('./images/welcomeImages/restaurant_icon.svg')
      .then(response => response.text())
      .then(svgContent => {
        
        icon.innerHTML = svgContent;
      })
      .catch(error => {
        console.error('Error fetching SVG file:', error);
      });

      const welcomeHeaderTwo = document.createElement('h2');
      welcomeHeaderTwo.classList = "sectionHeader";
      welcomeTitleContainer.appendChild(welcomeHeaderTwo); 
      welcomeHeaderTwo.textContent = "CaliBrunch" 

    

    const welcomeCardsContainer = document.createElement('div');
    welcomeCardsContainer.classList = "welcomeCardsContainer";
    welcomeContainer.appendChild(welcomeCardsContainer); 


    data.map((card, index)=>{
    welcomeCards[index] = document.createElement('div');
    welcomeCards[index].classList = "welcomeCards";
    welcomeCardsContainer.appendChild(welcomeCards[index]); 

    welcomeCardsImageContainer[index] = document.createElement('div');
    welcomeCardsImageContainer[index].classList = "welcomeCardsImageContainer";
    welcomeCards[index].appendChild(welcomeCardsImageContainer[index]); 
    welcomeCardsImageContainer[index].src = card.image

    welcomeCardsImage[index] = document.createElement('img');
    welcomeCardsImage[index].classList = "welcomeCardsImage";
    welcomeCardsImageContainer[index].appendChild(welcomeCardsImage[index]); 
    welcomeCardsImage[index].src = card.image

    welcomeCardsTextContainer[index] = document.createElement('div');
    welcomeCardsTextContainer[index].classList.add( "welcomeCardsTextContainer");
    welcomeCards[index].appendChild(welcomeCardsTextContainer[index]); 



    welcomeCardsHeader[index] = document.createElement('h3');
    welcomeCardsHeader[index].classList = "welcomeCardsHeader";
    welcomeCardsTextContainer[index].appendChild(welcomeCardsHeader[index]); 
    welcomeCardsHeader[index].textContent = card.title

    welcomeCardsParagraph[index] = document.createElement('p');
    welcomeCardsParagraph[index].classList = "welcomeCardsParagraph";
    welcomeCardsTextContainer[index].appendChild(welcomeCardsParagraph[index]); 
    welcomeCardsParagraph[index].textContent = card.description;


    welcomeCardsContainerButton[index] = document.createElement('div');
    welcomeCardsContainerButton[index].classList.add( "welcomeCardsContainerButton");
    welcomeCards[index].appendChild(welcomeCardsContainerButton[index]); 



    welcomeCardsButton[index] = document.createElement('button');
    welcomeCardsButton[index].classList.add( "all_button");
    welcomeCardsButton[index].classList.add( "welcomeCardsButton");
    welcomeCardsContainerButton[index].appendChild(welcomeCardsButton[index]); 
    welcomeCardsButton[index].textContent = "Read More"

    })


}


