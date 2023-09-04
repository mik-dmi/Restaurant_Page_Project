export const mainPage = ()=>{

    const mainContainer = document.getElementById('content');
    const headerContainer = document.createElement('div');
    const bodyContainer = document.createElement('div');
    const footerContainer = document.createElement('div');
    const homePageContainers = [];
   
    const homeButton = document.createElement('button');
    homeButton.classList = "menuButton";
    
    const menuButton =  document.createElement('button');
    menuButton.classList = "menuButton";
    
    const galleryButton =  document.createElement('button');
    galleryButton.classList = "menuButton";
    
    const contactButton =  document.createElement('button');
    contactButton.classList = "menuButton";
    
    const nameOfRestaurant = document.createElement('div');
    nameOfRestaurant.classList = "menuButton";

    mainContainer.appendChild(headerContainer); //main page template 
    mainContainer.appendChild(bodyContainer);   //main page template 
    mainContainer.appendChild(footerContainer); //main page template 

    headerContainer.appendChild(homeButton);
    headerContainer.appendChild(menuButton);
    headerContainer.appendChild(galleryButton);
    headerContainer.appendChild(contactButton);
    bodyContainer.appendChild(nameOfRestaurant);

    for(let i = 0; i < 3; i++ ){
        homePageContainers[i] = document.createElement('div');
        homePageContainers[i].classList = "containersHomePage";
        homePageContainers[i].textContent = "wsadcv"
        bodyContainer.appendChild(homePageContainers[i])
    };
     
    nameOfRestaurant.textContent = "Snacks on the Plate"

    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    galleryButton.textContent = 'Gallery';
    contactButton.textContent = 'Contact';

    console.log("coococ")


}