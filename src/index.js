import {mainPage} from './home_page.js'
import {baseLinePage} from './base_line.js'



baseLinePage();


const menuButtons = document.querySelectorAll('.menuButton');

menuButtons.forEach(button => {
    button.addEventListener('click', (e)=>{
        menuButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');



        if(button.id == 'homeButton') mainPage();
    } )

    
});







