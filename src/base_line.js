import {mainPage} from './home_page.js'
export const baseLinePage = ( ) => {

    const mainContainer = document.querySelector('body');

    const headerContainer = document.createElement('div');
    headerContainer.classList = 'header';

    const bodyContainer = document.createElement('div');
    bodyContainer.classList = 'body';
    
    const mainSectionContainer = document.createElement('div');
    mainSectionContainer.classList = 'mainSection';
    
    const footerContainer = document.createElement('div');
    footerContainer.classList = 'footer';
    
    const sidebarContainer = document.createElement('div');
    sidebarContainer.classList = "sidebar";

    const dropDown = document.createElement('div');
    dropDown.classList = "dropDown";
    dropDown.id = "dropDown";
    
    const topOfSideBar = document.createElement('div');
    topOfSideBar.classList.add('top_side_bar')
    sidebarContainer.appendChild(topOfSideBar)
    
    const menuLogo = document.createElement('div');
    menuLogo.classList.add('logo')
    topOfSideBar.appendChild(menuLogo)
 

    const logo = document.createElement('i');
    logo.classList.add('bx')
    logo.classList.add('bxl-mongodb')  
    menuLogo.appendChild(logo)
    
    const smallTitle = document.createElement('span');
    smallTitle.textContent = "CaliBrunch"
    menuLogo.appendChild(smallTitle)

    const menuLogoIconContainer = document.createElement('div');
    menuLogoIconContainer.classList.add('bx')
    menuLogoIconContainer.classList.add('bx-menu')
    //menuLogoIconContainer.style.opacity = 1  
    menuLogoIconContainer.id = "menuBurgerIcon"
    topOfSideBar.appendChild(menuLogoIconContainer)


    const listMenu = document.createElement('ul');
    sidebarContainer.appendChild(listMenu);

/*------------------------------------------------------------------------------------------------------*/
    const partOfListMenu = document.createElement('li');
    listMenu.appendChild(partOfListMenu);

    const containerHomeIcon = document.createElement('a');
    partOfListMenu.appendChild(containerHomeIcon);
    containerHomeIcon.href = "#";
    containerHomeIcon.classList.add('pageButtons')
    containerHomeIcon.id = 'homeButton'

    const homeIcon = document.createElement('i');
    homeIcon.classList.add('bx')
    homeIcon.classList.add('bxs-home-alt-2')  
    containerHomeIcon.appendChild(homeIcon)

        
    const home = document.createElement('span');
    home.textContent = "Home"
    containerHomeIcon.appendChild(home)
    home.classList.add('nav_item')


   
/*------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------*/
const partOfListMenuSecond = document.createElement('li');
listMenu.appendChild(partOfListMenuSecond);

const containerFoodIcon = document.createElement('a');
partOfListMenuSecond.appendChild(containerFoodIcon);
containerFoodIcon.href = "#";
containerFoodIcon.classList.add('pageButtons')
containerFoodIcon.id = 'foodAndDrinks'


const foodIcon = document.createElement('i');
foodIcon.classList.add('bx')
foodIcon.classList.add('bxs-bowl-hot')  
containerFoodIcon.appendChild(foodIcon)

    
const food = document.createElement('span');
food.textContent = "Menu"
containerFoodIcon.appendChild(food)
food.classList.add('nav_item')

  
/*------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------*/
const partOfListMenuThird = document.createElement('li');
listMenu.appendChild(partOfListMenuThird);

const containerGalleryIcon = document.createElement('a');
partOfListMenuThird.appendChild(containerGalleryIcon);
containerGalleryIcon.href = "#";
containerGalleryIcon.classList.add('pageButtons')
containerGalleryIcon.id = 'galleryButton'

const galleryIcon = document.createElement('i');
galleryIcon.classList.add('bx')
galleryIcon.classList.add('bxs-camera')  
containerGalleryIcon.appendChild(galleryIcon)


const gallery = document.createElement('span');
gallery.textContent = "Gallery"
containerGalleryIcon.appendChild(gallery)
gallery.classList.add('nav_item')

  
/*------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------*/
const partOfListMenuFourth = document.createElement('li');
listMenu.appendChild(partOfListMenuFourth);

const containerFormsIcon = document.createElement('a');
partOfListMenuFourth.appendChild(containerFormsIcon);
containerFormsIcon.href = "#";
containerFormsIcon.classList.add('pageButtons')

const reservationIcon = document.createElement('i');
reservationIcon.classList.add('bx')
reservationIcon.classList.add('bxs-calendar-plus')  
containerFormsIcon.appendChild(reservationIcon)
containerFormsIcon.id = 'reservationButton'

const reservation = document.createElement('span');
reservation.textContent = "Reservations"
containerFormsIcon.appendChild(reservation)
reservation.classList.add('nav_item')

  
/*------------------------------------------------------------------------------------------------------*/

     
    
    const nameOfRestaurant = document.createElement('div');
    
   
     
     
    //mainContainer.appendChild(mainSectionContainer)
    mainContainer.appendChild(headerContainer); //main page template
    mainContainer.appendChild(sidebarContainer);
    mainContainer.appendChild(bodyContainer);
    mainContainer.appendChild(footerContainer); //main page template 
    headerContainer.appendChild(nameOfRestaurant);
    
    
    nameOfRestaurant.textContent = "CaliBrunch"
    nameOfRestaurant.classList.add("headerText")


    footerContainer.textContent = "Images from https://unsplash.com/";



    menuLogoIconContainer.onclick = function(){
        sidebarContainer.classList.toggle('active')
        headerContainer.classList.toggle('header_width_adjustment')

    }
/* ------------------------------------------- Scroll -------------------------------------------------------- */

// Define a variable to track whether the transition is in progress



// Define a variable to track whether the transition is in progress
let isTransitioning = false;



// Add a 'transitionend' event listener to the headerContainer
headerContainer.addEventListener('transitionend', () => {
    // When the transition ends, remove the 'smaller_header' class
    isTransitioning = false;
});

window.addEventListener("scroll", () => {
    if (scrollY > 200 && !isTransitioning) {
        // Add a class to the header container only when at the top
        headerContainer.classList.add('smaller_header');
        // Set the transition flag to true to prevent further additions
        isTransitioning = true;
    }
    if (scrollY < 200) {
        // If you want to remove 'smaller_header' without waiting for the transition, you can do it here.
        headerContainer.classList.remove('smaller_header');
    }
});























/*
window.addEventListener("scroll", () => {

    const animationThreshold = 100;
    
    if (scrollY >200 ) {
      
        headerContainer.classList.add('smaller_header');
        
    }
    if (scrollY >300 ) {
        nameOfRestaurant.classList.add('headerText_small_heder');
    }
    if (scrollY < 200 ) {
       
        headerContainer.classList.remove('smaller_header');
        nameOfRestaurant.classList.remove('headerText_small_heder');

    }
});*/






/*
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const newHeight = Math.max(3, 10 - scrollY/60);   
    const newFontSize = Math.max(2.3, 7 - scrollY/80 );    
    
    headerContainer.style.height = newHeight + "rem";
    headerContainer.style.fontSize = newFontSize + "rem"
    
    const widthStyle = getComputedStyle(headerContainer).width;
    const baseFontSize = 16; 

    const remValueHeaderWidth = parseFloat(widthStyle) / baseFontSize;   
    console.log(parseFloat(widthStyle))
    
    const textPosition = Math.max(0, 0 + scrollY/15 - 30 );
    console.log(textPosition)
    if(textPosition <  ((remValueHeaderWidth/2) - 4) ) nameOfRestaurant.style.right = textPosition + "rem";  
    */
    /*
    if(newHeight === 3.1 ) aux = scrollY;
    if (newHeight === 3 || textPosition <  (remValue- 2)){
        const textPosition = Math.max(0, 0 + scrollY/5 - (aux ) );
        nameOfRestaurant.style.right = textPosition + "rem";
    }

});

*/




    mainPage()

    




}