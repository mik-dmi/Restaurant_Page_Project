import {mainPage} from './reservationsection.js'
export const baseLinePage = ( ) => {

    const mainContainer = document.querySelector('body');
    
    const navbar = document.createElement('div');
    navbar.classList = "navbar";
    mainContainer.appendChild(navbar);

    const heroContainer= document.createElement('div');
    heroContainer.classList.add('hero');

    const heroSection= document.createElement('div');
    /*heroSection.classList.add('heroSection');*/
    heroSection.classList.add('DivSvgHero');
  
    heroSection.classList.add('heroSection');

    heroSection.id ="home"


    const heroSectionContainer= document.createElement('div');
    /*heroSection.classList.add('heroSection');*/
    heroSectionContainer.classList.add('heroSectionContainer');
    heroSection.appendChild(heroSectionContainer);
    

    const callToActionContainer= document.createElement('div');
    callToActionContainer.classList.add('callToActionContainer');
    heroSectionContainer.appendChild(callToActionContainer);
    
    const saladHeroContainer= document.createElement('div');
    saladHeroContainer.classList.add('pancakeHero');
    heroSectionContainer.appendChild(saladHeroContainer);

    const imageSaladHero= document.createElement('img');
    imageSaladHero.src = '../dist/images/heroImg.png'
    imageSaladHero.classList.add('saladHeroImage');
    saladHeroContainer.appendChild(imageSaladHero);





    
    const callToActionHeader= document.createElement('h2');
    callToActionHeader.classList.add('callToActionHeader');
    callToActionContainer.appendChild(callToActionHeader);
    callToActionHeader.textContent = "Fresh & Tasty"

    const callToActionSecondHeader= document.createElement('h2');
    callToActionSecondHeader.classList.add('callToActionSecondHeader');
    callToActionContainer.appendChild(callToActionSecondHeader);
    callToActionSecondHeader.textContent = "Beach Bar"


    const callToActionParagraph= document.createElement('p');
    callToActionParagraph.classList.add('callToActionParagraph');
    callToActionContainer.appendChild(callToActionParagraph);
    callToActionParagraph.textContent = "Experience an exceptional brunch at our beach restaurant. Amazing food, scenery, and vibes await you."

    const buttonHero= document.createElement('button');
    buttonHero.classList.add('all_button');
    buttonHero.classList.add('callActionButton');
    callToActionContainer.appendChild(buttonHero);
    buttonHero.classList.add('scrollButtons')
    
  
    const buttonHeroLink = document.createElement('a');
    buttonHero.appendChild(buttonHeroLink);
    buttonHeroLink.href = "#reservation";
    buttonHeroLink.style.textDecoration = "none"
    buttonHeroLink.style.color = "white"
    buttonHeroLink.textContent = "Reservation"



    const navbarContainer = document.createElement('div');
    navbarContainer.classList.add("container_navbar");
    

    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('body');
    
   
    const footerSection = document.createElement('div');
    footerSection.classList.add('footer');

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footerContainer');
    footerSection.appendChild(footerContainer);

    const nameOfRestaurant = document.createElement('a');
    nameOfRestaurant.textContent = "CaliBrunch"
    navbarContainer.appendChild(nameOfRestaurant);
    nameOfRestaurant.classList.add("brand");
    

    const listMenu = document.createElement('ul');
    navbarContainer.appendChild(listMenu);
    listMenu.classList.add("nav_buttons")
    listMenu.classList.add('scrollButtons')

/*------------------------------------------------------------------------------------------------------*/
    const partOfListMenu = document.createElement('li');
    listMenu.appendChild(partOfListMenu);

    const containerHomeIcon = document.createElement('a');
    partOfListMenu.appendChild(containerHomeIcon);
    containerHomeIcon.href = "#home";
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
containerFoodIcon.href = "#menu";
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
containerGalleryIcon.href = "#gallery";
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
containerFormsIcon.href = "#about";
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
    mainContainer.appendChild(heroSection);
    mainContainer.appendChild(bodyContainer);
    mainContainer.appendChild(footerSection); //main page template 
    
    
  
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
      
        if (scrollY >= 100) {
            navbar.classList.add('scrolled');
            navbar.style.background = '#6b0b17';
            nameOfRestaurant.style.color = 'white';
            menuLogoIconContainer.style.color= 'white';

        } else {
            navbar.classList.remove('scrolled');
            if(!(listMenu.classList.contains('active')) ){
                navbar.style.background = 'none';
                nameOfRestaurant.style.color = '#fac562';
                menuLogoIconContainer.style.color= 'white';
                if (window.innerWidth > 600) {
                    nameOfRestaurant.style.color = 'rgb(63, 63, 70)';
                }
             

            }
        }
    });
    
    hamburgerContainer.addEventListener('click', ()=>{

        listMenu.classList.toggle('active')
       if(listMenu.classList.contains('active')) {
            navbar.style.background = '#6b0b17';
            nameOfRestaurant.style.color = 'white';
            menuLogoIconContainer.style.color= 'white';
        }
        if(!(listMenu.classList.contains('active')) && !(navbar.classList.contains('scrolled'))){
            navbar.style.background = 'none';
            nameOfRestaurant.style.color = '#e2c62be3';
            menuLogoIconContainer.style.color= 'white';
            }
     
        


    } )

    
    
    
    
    
    
    
    
    
    
    
    
    const footLinksContainer = document.createElement('div'); 
    footLinksContainer.classList.add("footLinksContainer");
    footerContainer.appendChild(footLinksContainer)
    
    const footLinksHome = document.createElement('span'); 
    footLinksHome.classList.add('footLinks')
    footLinksContainer.appendChild(footLinksHome)
    footLinksHome.textContent = "Home"

    const footLinksAbout = document.createElement('span'); 
    footLinksAbout.classList.add('footLinks')
    footLinksContainer.appendChild(footLinksAbout)
    footLinksAbout.textContent = "About"

    const footLinksMenu = document.createElement('span'); 
    footLinksMenu.classList.add('footLinks')
    footLinksContainer.appendChild(footLinksMenu)
    footLinksMenu.textContent = "Our Menu"

    const footLinksSponsors = document.createElement('span'); 
    footLinksSponsors.classList.add('footLinks')
    footLinksContainer.appendChild(footLinksSponsors)
    footLinksSponsors.textContent = "Sponsors"

    const footLinksBlog = document.createElement('span'); 
    footLinksBlog.classList.add('footLinks')
    footLinksContainer.appendChild(footLinksBlog)
    footLinksBlog.textContent = "Blog"

    




}