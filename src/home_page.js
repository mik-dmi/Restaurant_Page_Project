import DOMPurify from 'dompurify';

export const mainPage = ()=>{
    const homePageContainers = [];
    const carouselImageContainer = [];
    const carouselTextAndTitleContainer = [];
    const titleIfBody = [];
    const textInBody = [];
    const dataOfTitleInTheBody = ["","Open Hours","Location"]
    const dataTextInTheBody = ['',
    `<strong>Monday to Friday:</strong> 09:00-22:00<br>
    <strong>Saturday:</strong> 10:00-23:00<br>
    <strong>Sunday:</strong> 10:00-21:00`, `CaliBrunch is conveniently located at:<br><br>
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
        
        carouselImageContainer[i] = document.createElement('div');
        carouselImageContainer[i].classList.add(`carouselImageContainer${[i]}`)
        homePageContainers[i].appendChild(carouselImageContainer[i])

        carouselTextAndTitleContainer[i] = document.createElement('div');
        carouselTextAndTitleContainer[i].classList.add(`carouselTextAndTitleContainer${[i]}`)
        homePageContainers[i].appendChild(carouselTextAndTitleContainer[i])

        homePageContainers[i].id = i
        if ( i >0){
            titleIfBody[i] = document.createElement('p');
            titleIfBody[i].classList = 'titleInCarousel';
            textInBody[i] = document.createElement('p');
            textInBody[i].classList = `textInCarousel${[i]}`;

            titleIfBody[i].textContent = dataOfTitleInTheBody[i];
            textInBody[i].innerHTML  = dataTextInTheBody[i];
            
            carouselTextAndTitleContainer[i].appendChild(titleIfBody[i]);
            carouselTextAndTitleContainer[i].appendChild(textInBody[i]);  
        }
        homePageContainers[i].classList.add(`containersHomePage${[i]}`);
        homePageContainers[i].classList.add("slide");
        carouselContainer.appendChild(homePageContainers[i]);

        const imageInCarousel = document.createElement('img');
        imageInCarousel.src = backgroundImages[i];
        imageInCarousel.classList = 'imageInCarousel';
        carouselImageContainer[i].appendChild(imageInCarousel);
        
    };

    /*buttonReservation.classList.add('reservation_button');*/
    homePageContainers[0].setAttribute('data-active', '');
    carouselButtonLeft.addEventListener("click", ()=> {
        CarouselButtonsFunction(homePageContainers, '-1');
    })
    carouselButtonRight.addEventListener("click", ()=> {
        CarouselButtonsFunction(homePageContainers, '1');
    })
    ReservationForms(carouselTextAndTitleContainer[0])

}

function ReservationForms(reservationFormsContainer){
    const formsContainer = document.createElement("div");
    formsContainer.classList.add("formsContainer");
    const bookForm = document.createElement("form");
    bookForm.id = "bookForm";
    bookForm.method = "post";
   
        // Create the div with class "forms"

    const titleReservation = document.createElement("h1");
    titleReservation.classList.add("title_reservation");
    titleReservation.textContent = "Book a Table"

    const containerReservationForms = document.createElement("div");
    containerReservationForms.classList.add("containerReservationForms");

    const rightSideReservationForms = document.createElement("div");
    rightSideReservationForms.classList.add("SideReservationForms");
  
    const leftSideReservationForms = document.createElement("div");
    leftSideReservationForms.classList.add("SideReservationForms");


    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Full Name";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Full Name"
    nameInput.id = "name";
    nameInput.required = true;

    const phoneNumber = document.createElement("label");
    phoneNumber.setAttribute("for", "phoneNumber");
    phoneNumber.textContent = "Phone Number";
    const phoneNumberInput = document.createElement("input");
    phoneNumberInput.type = "tel";
    phoneNumberInput.placeholder= "+49..."
    phoneNumberInput.id = "phoneNumber";
    phoneNumberInput.required = true;

    const email = document.createElement("label");
    email.setAttribute("for", "email");
    email.textContent = "Email";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.required = true;
    emailInput.placeholder = "example@gmail.com"

    const numberOfPeopleLabel = document.createElement("label");
    numberOfPeopleLabel.setAttribute("for", "numberOfPeople");
    numberOfPeopleLabel.textContent = "Number of People";
    const numberOfPeopleInput = document.createElement("input");
    numberOfPeopleInput.type = "number";
    numberOfPeopleInput.placeholder = "Between 2 and 15"
    numberOfPeopleInput.id = "numberOfPeople";
    numberOfPeopleInput.required = true;

    const dateInputLabel = document.createElement("label");
    const dateInput = document.createElement("input");
    dateInputLabel.setAttribute("for", "read_date");
    dateInputLabel.textContent = "Date";
    dateInput.type = "date";
    dateInput.id = "read_date"; // Give it an ID for labeling
    dateInput.required = true;
    
    const timeInputLabel = document.createElement("label");
    const timeInput = document.createElement("input");
    timeInputLabel.setAttribute("for", "read_time");
    timeInputLabel.textContent = "Time";
    timeInput.type = "time";
    timeInput.id = "read_time"; 
    timeInput.required = true;
    
    const hourDatalist = document.createElement("datalist");
    hourDatalist.id = "hours";
    
    for (let hour = 12; hour <= 22; hour++) {
        const option = document.createElement("option");
        option.value = `${hour}:00`;
        hourDatalist.appendChild(option);
    }
    
    timeInput.setAttribute("list", "hours");

    
  

    const addButton = document.createElement("button");
    addButton.type = "submit";
    addButton.classList.add("reservation_button");
    addButton.textContent = "Book Now";

    reservationFormsContainer.appendChild(titleReservation)
    leftSideReservationForms.appendChild(nameLabel);
    leftSideReservationForms.appendChild(nameInput);
    leftSideReservationForms.appendChild(phoneNumber);
    leftSideReservationForms.appendChild(phoneNumberInput);
    leftSideReservationForms.appendChild(email);
    leftSideReservationForms.appendChild(emailInput);
    rightSideReservationForms.appendChild(numberOfPeopleLabel);
    rightSideReservationForms.appendChild(numberOfPeopleInput);
    rightSideReservationForms.appendChild(dateInputLabel)
    rightSideReservationForms.appendChild(dateInput);
    rightSideReservationForms.appendChild(timeInputLabel)
    rightSideReservationForms.appendChild(timeInput);
    rightSideReservationForms.appendChild(hourDatalist)
        
  
    containerReservationForms.appendChild(leftSideReservationForms)
    containerReservationForms.appendChild(rightSideReservationForms)
    reservationFormsContainer.appendChild(containerReservationForms)
    reservationFormsContainer.appendChild(bookForm)
    bookForm.appendChild(addButton);


    

    bookForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        console.log("aqui")
        bookForm.reset()
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

