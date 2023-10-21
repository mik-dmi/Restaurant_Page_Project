import {mainPage} from './home_page.js'
import {baseLinePage} from './base_line.js'
import {menuPage} from './menu_page.js'
import {galleryPage} from './gallery_page.js'


/*----------------------------------- Set up when the page is loaded --------------------------------- */
baseLinePage();
mainPage();
const menuButtons = document.querySelectorAll('.pageButtons');
const homeButton = document.getElementById('homeButton');
homeButton.classList.toggle('active');                           


menuButtons.forEach(button => {
  button.addEventListener('click', (e)=>{
    menuButtons.forEach(b => b.classList.remove('active'));
      button.classList.toggle('active');
      if(button.id == 'homeButton') mainPage();
      if(button.id == 'foodAndDrinks') menuPage();
      if(button.id == 'galleryButton') galleryPage();
      /*if(button.id == 'reservationButton') reservationPage();*/
} )

    
});







