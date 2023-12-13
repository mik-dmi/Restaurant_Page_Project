import {reservationSection} from './reservationsection.js'
import {baseLinePage} from './base_line.js'
import {menuPage} from './menu_page.js'
import {galleryPage} from './gallery_page.js'
import {aboutUsPage} from './about_us_page.js'
import {welcomePage} from './welcomePage.js'

/*----------------------------------- Set up when the page is loaded --------------------------------- */
baseLinePage();
welcomePage();
menuPage();
reservationSection();
galleryPage();
aboutUsPage();
const menuButtons = document.querySelectorAll('.pageButtons');
const homeButton = document.getElementById('homeButton');
homeButton.classList.toggle('active');                           

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".scrollButtons a");

  navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              const yOffset = -64; // You can adjust this value for proper scrolling position
              const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

              window.scrollTo({
                  top: y,
                  behavior: "smooth"
              });
          }
      });
  });
});






/*
menuButtons.forEach(button => {
  button.addEventListener('click', (e)=>{
    menuButtons.forEach(b => b.classList.remove('active'));
      button.classList.toggle('active');
      if(button.id == 'homeButton') mainPage();
      if(button.id == 'foodAndDrinks') menuPage();
      if(button.id == 'galleryButton') galleryPage();
      if(button.id == 'aboutUsButton') aboutUsPage();
} )

  
}); */ 







