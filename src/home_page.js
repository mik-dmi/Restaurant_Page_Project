import DOMPurify from 'dompurify';
import {reservationPage} from './reservation_page.js'

export const mainPage = ()=>{
    const homePageContainers = [];
    const carouselTextAndTitleContainer = [];
    const titleIfBody = [];
    const textInBody = [];
    const dataOfTitleInTheBody = ["","Open Hours","Location"]
    const dataTextInTheBody = ['',
    `<strong>Monday to Friday:</strong> 11:00-22:00<br>
    <strong>Saturday:</strong> 12:00-23:00<br>
    <strong>Sunday:</strong> 12:00-21:00`, `CaliBrunch is conveniently located at:<br><br>
    <strong>123 Main Street,</strong><br>
    <strong>Los Santos, US, 1823-23 </strong><br>
    We are situated in the heart of Los Santos, making it easy for you to find us and enjoy our delicious cuisine. We look forward to welcoming you to our restaurant!
    ` ];
    const backgroundImages = ['./images/images_carousel/zero.jpg','./images/images_carousel/one.jpg','./images/images_carousel/two.jpg',]

    const bodyContainer = document.querySelector('.body');
    bodyContainer.classList.add("body_home_page")
    
    const carouselContainer = document.createElement('section')  
    carouselContainer.ariaLabel = "Information about restaurant"
    carouselContainer.classList.add('carousel')

    const carouselButtonLeft = document.createElement('button')
    carouselButtonLeft.classList.add('carousel_button');
    carouselButtonLeft.classList.add('prev');
    const spanContainerLeft = document.createElement('span')
    spanContainerLeft.innerHTML ='&#10151;'
    spanContainerLeft.classList.add('flipped-arrow')
    const carouselButtonRight = document.createElement('button')
    carouselButtonRight.classList.add('carousel_button');
    carouselButtonRight.classList.add('next');
    const spanContainerRight = document.createElement('span')
    spanContainerRight.innerHTML  ='&#10151;'

    const aboutSection = document.createElement('div')
    aboutSection.classList.add("about_section")

    carouselButtonLeft.appendChild(spanContainerLeft)
    carouselButtonRight.appendChild(spanContainerRight)

  
    
    while (bodyContainer.firstChild) {
        bodyContainer.removeChild(bodyContainer.firstChild);
    };  
    bodyContainer.appendChild(carouselContainer)
    /*bodyContainer.appendChild(aboutSection)*/

    aboutSection.textContent= "ajsnjkaszxjk wsajkznkjscdx kjascjk acjkxz,k ascxzcjkn "

    carouselContainer.appendChild(carouselButtonLeft)
    carouselContainer.appendChild(carouselButtonRight)
    
    for(let i = 0; i < 3; i++ ){
        homePageContainers[i] = document.createElement('li');
        carouselTextAndTitleContainer[i] = document.createElement('div');
        carouselTextAndTitleContainer[i].classList.add(`carouselTextAndTitleContainer${[i]}`)
        homePageContainers[i].appendChild(carouselTextAndTitleContainer[i])
        homePageContainers[i].id = i
        titleIfBody[i] = document.createElement('p');
        titleIfBody[i].classList = 'titleInCarousel';
        textInBody[i] = document.createElement('p');
        textInBody[i].classList = `textInCarousel${[i]}`;
        homePageContainers[i].classList.add(`containersHomePage${[i]}`);
        homePageContainers[i].classList.add("slide");
        titleIfBody[i].textContent = dataOfTitleInTheBody[i];
        textInBody[i].innerHTML  = dataTextInTheBody[i];
        carouselContainer.appendChild(homePageContainers[i]);
        carouselTextAndTitleContainer[i].appendChild(titleIfBody[i]);
        carouselTextAndTitleContainer[i].appendChild(textInBody[i]);
        homePageContainers[i].style.backgroundImage = `url(${backgroundImages[i]})`;   
    };

    const buttonReservation = document.createElement('button');
    buttonReservation.classList.add('reservation_button');
    carouselTextAndTitleContainer[0].appendChild(buttonReservation)
    buttonReservation.textContent = 'Make a Reservation'
    homePageContainers[0].setAttribute('data-active', '');
    carouselButtonLeft.addEventListener("click", ()=> {
        CarouselButtonsFunction(homePageContainers, '-1');
    })
    carouselButtonRight.addEventListener("click", ()=> {
        CarouselButtonsFunction(homePageContainers, '1');
    })
    buttonReservation.addEventListener("click", ()=>{
        reservationPage()
    });
}

function CarouselButtonsFunction(carouselContainers, offset) {
    const activeSlide = document.querySelector("[data-active]");
    
    // Check if activeSlide is defined
    if (activeSlide) {
        let newIndex = parseInt(activeSlide.id) + parseInt(offset);
        if (newIndex < 0) newIndex = carouselContainers.length - 1;
        if (newIndex >= carouselContainers.length) newIndex = 0;

        carouselContainers[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    }
}

