export const baseLinePage = ( ) => {

    const mainContainer = document.getElementById('content');

    const headerContainer = document.createElement('div');
    headerContainer.classList = 'header';

    const bodyContainer = document.createElement('div');
    bodyContainer.classList = 'body';

    const footerContainer = document.createElement('div');
    footerContainer.classList = 'footer';
    
    const sidebarContainer = document.createElement('div');
    sidebarContainer.classList = "sidebar";

    const homeButton = document.createElement('button');
    homeButton.classList = "menuButton";
    homeButton.id = 'homeButton';
    
    const menuButton =  document.createElement('button');
    menuButton.classList = "menuButton";
    menuButton.id = "menuButton";
    
    const galleryButton =  document.createElement('button');
    galleryButton.classList = "menuButton";
    galleryButton.id = "galleryButton";
    
    //const contactButton =  document.createElement('button');
    //contactButton.classList = "menuButton";
    //contactButton.id = "contactButton";
    
    const nameOfRestaurant = document.createElement('div');
    
   
    mainContainer.appendChild(headerContainer); //main page template 
    mainContainer.appendChild(sidebarContainer); 
    mainContainer.appendChild(bodyContainer);   //main page template 
    mainContainer.appendChild(footerContainer); //main page template 
    
    headerContainer.appendChild(nameOfRestaurant);
    sidebarContainer.appendChild(homeButton);
    sidebarContainer.appendChild(menuButton);
    sidebarContainer.appendChild(galleryButton);
    //sidebarContainer.appendChild(contactButton);
   

   
    nameOfRestaurant.textContent = "Snacks on the Plate"

    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    galleryButton.textContent = 'Gallery';
    //contactButton.textContent = 'Contact';

    footerContainer.textContent = "Images from https://unsplash.com/"

}