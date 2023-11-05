import {mainPage} from './home_page.js'
export const baseLinePage = ( ) => {

    const mainContainer = document.querySelector('body');
    
    const navbar = document.createElement('div');
    navbar.classList = "navbar";
    mainContainer.appendChild(navbar);

    const heroContainer= document.createElement('div');
    heroContainer.classList.add('hero');

    const heroSection= document.createElement('div');
    heroSection.classList.add('heroSection');
    heroContainer.appendChild(heroSection);

    const callToActionContainer= document.createElement('div');
    callToActionContainer.classList.add('callToActionContainer');
    heroSection.appendChild(callToActionContainer);
    
    const callToActionHeader= document.createElement('h2');
    callToActionHeader.classList.add('callToActionHeader');
    callToActionContainer.appendChild(callToActionHeader);
    callToActionHeader.textContent = "CaliBrunch"

    const callToActionParagraph= document.createElement('p');
    callToActionParagraph.classList.add('callToActionParagraph');
    callToActionContainer.appendChild(callToActionParagraph);
    callToActionParagraph.textContent = "Experience exceptional brunch at our beach restaurant. Amazing food, scenery, and vibes await you."

    const buttonHero= document.createElement('button');
    buttonHero.classList.add('all_button');
    buttonHero.classList.add('callActionButton');
    callToActionContainer.appendChild(buttonHero);
    buttonHero.textContent = "Reservation"


    const navbarContainer = document.createElement('div');
    navbarContainer.classList.add("container_navbar");
    

    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('body');
    
   
    const footerContainer = document.createElement('div');
    footerContainer.classList = 'footer';
    
    const nameOfRestaurant = document.createElement('a');
    nameOfRestaurant.textContent = "CaliBrunch"
    navbarContainer.appendChild(nameOfRestaurant);
    nameOfRestaurant.classList.add("brand");
    

    const listMenu = document.createElement('ul');
    navbarContainer.appendChild(listMenu);
    listMenu.classList.add("nav_buttons")

/*------------------------------------------------------------------------------------------------------*/
    const partOfListMenu = document.createElement('li');
    listMenu.appendChild(partOfListMenu);

    const containerHomeIcon = document.createElement('a');
    partOfListMenu.appendChild(containerHomeIcon);
    containerHomeIcon.href = "#";
    containerHomeIcon.classList.add('pageButtons')
    containerHomeIcon.id = 'homeButton'
/*
    const homeIcon = document.createElement('i');
    homeIcon.classList.add('foodIcon')   
    homeIcon.classList.add('bx')
    homeIcon.classList.add('bxs-home-alt-2')  
    containerHomeIcon.appendChild(homeIcon)
*/
        
    const home = document.createElement('span');
    home.textContent = "Home"
    containerHomeIcon.appendChild(home)
    home.classList.add('nav_item')

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

const partOfListMenuSecond = document.createElement('li');
listMenu.appendChild(partOfListMenuSecond);

const containerFoodIcon = document.createElement('a');
partOfListMenuSecond.appendChild(containerFoodIcon);
containerFoodIcon.href = "#";
containerFoodIcon.classList.add('pageButtons')
containerFoodIcon.id = 'foodAndDrinks'

/*
const foodIcon = document.createElement('i');
foodIcon.classList.add('iconButton')
foodIcon.classList.add('bx')
foodIcon.classList.add('bxs-bowl-hot')  
containerFoodIcon.appendChild(foodIcon)
*/
    
const food = document.createElement('span');
food.textContent = "Menu"
containerFoodIcon.appendChild(food)
food.classList.add('nav_item')

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

const partOfListMenuThird = document.createElement('li');
listMenu.appendChild(partOfListMenuThird);

const containerGalleryIcon = document.createElement('a');
partOfListMenuThird.appendChild(containerGalleryIcon);
containerGalleryIcon.href = "#";
containerGalleryIcon.classList.add('pageButtons')
containerGalleryIcon.id = 'galleryButton'
/*
const galleryIcon = document.createElement('i');
galleryIcon.classList.add('iconButton')
galleryIcon.classList.add('bx')
galleryIcon.classList.add('bxs-camera')  
containerGalleryIcon.appendChild(galleryIcon)
*/

const gallery = document.createElement('span');
gallery.textContent = "Gallery"
containerGalleryIcon.appendChild(gallery)
gallery.classList.add('nav_item')

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
  
const partOfListMenuFourth = document.createElement('li');
listMenu.appendChild(partOfListMenuFourth);

const containerFormsIcon = document.createElement('a');
partOfListMenuFourth.appendChild(containerFormsIcon);
containerFormsIcon.href = "#";
containerFormsIcon.classList.add('pageButtons')
/*
const aboutUsIcon = document.createElement('i');
aboutUsIcon.classList.add('iconButton')
aboutUsIcon.classList.add('bx')
aboutUsIcon.classList.add('bxs-info-circle')  
containerFormsIcon.appendChild(aboutUsIcon)
containerFormsIcon.id = 'aboutUsButton'
*/
const aboutUs = document.createElement('span');
aboutUs.textContent = "About"
containerFormsIcon.appendChild(aboutUs)
aboutUs.classList.add('nav_item')

  
/*------------------------------------------------------------------------------------------------------*/

    const hamburgerContainer = document.createElement('div');
    hamburgerContainer.classList.add('hamburger')
   
    navbarContainer.appendChild(hamburgerContainer)

    const hamburgerIcon = document.createElement('span');
    hamburgerIcon.classList.add('logo')
    hamburgerContainer.appendChild(hamburgerIcon)

    const menuLogoIconContainer = document.createElement('div');
    menuLogoIconContainer.classList.add('bx')
    menuLogoIconContainer.classList.add('bx-menu')
    //menuLogoIconContainer.style.opacity = 1  
    menuLogoIconContainer.id = "menuBurgerIcon"
    hamburgerContainer.appendChild(menuLogoIconContainer) 
    

   
     
     
    //mainContainer.appendChild(mainSectionContainer)
    navbar.appendChild(navbarContainer);
    mainContainer.appendChild(heroContainer);
    mainContainer.appendChild(bodyContainer);
    mainContainer.appendChild(footerContainer); //main page template 
    
    
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
      
        if (scrollY >= 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    hamburgerContainer.addEventListener('click', ()=>{

        listMenu.classList.toggle('active')

    } )

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    footerContainer.textContent = "Images from https://unsplash.com/";




}