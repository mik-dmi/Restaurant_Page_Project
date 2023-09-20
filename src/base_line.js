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

    const dropDown = document.createElement('div');
    dropDown.classList = "dropDown";
    dropDown.id = "dropDown";
    
    const dropDownMenu = document.createElement('div');
    dropDownMenu.classList = "dropDownMenu";
    dropDownMenu.id = "dropDownMenu";

    const menu = document.createElement('button');
    menu.classList = "menuButton";
    menu.id = "menu";

    const homeButton = document.createElement('button');
    homeButton.classList.add( "dropDownButton");
    homeButton.id = "homeButton";
    
    const foodAndDrinks =  document.createElement('button');
    foodAndDrinks.classList.add( "dropDownButton");
    foodAndDrinks.id = "foodAndDrinks";
    
    const galleryButton =  document.createElement('button');
    galleryButton.classList.add( "dropDownButton");
    galleryButton.id = "galleryButton";
    
    //const contactButton =  document.createElement('button');
    //contactButton.classList = "menuButton";
    //contactButton.id = "contactButton";
    
    const nameOfRestaurant = document.createElement('div');
    
   
    mainContainer.appendChild(headerContainer); //main page template 
    mainContainer.appendChild(sidebarContainer); 
    sidebarContainer.appendChild(dropDown);
    dropDown.appendChild(menu);
    dropDown.appendChild(dropDownMenu);
    mainContainer.appendChild(bodyContainer);   //main page template 
    mainContainer.appendChild(footerContainer); //main page template 

    headerContainer.appendChild(nameOfRestaurant);
    
    dropDownMenu.appendChild(homeButton);
    dropDownMenu.appendChild(foodAndDrinks);
    dropDownMenu.appendChild(galleryButton);
    //sidebarContainer.appendChild(contactButton);
   

   
    nameOfRestaurant.textContent = "CaliBrunch"
    nameOfRestaurant.classList.add("headerText")
    
    menu.textContent = 'Menu'
    homeButton.textContent = 'Home';
    foodAndDrinks.textContent = 'Food & Drinks';
    galleryButton.textContent = 'Gallery';
    //contactButton.textContent = 'Contact';

    footerContainer.textContent = "Images from https://unsplash.com/"

    menu.addEventListener("click", (e) => {
        dropDownMenu.classList.toggle('active');
    });





}