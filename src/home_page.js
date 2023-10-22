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
    We are situated in the heart of Los Santos, making it easy for you to find us and enjoy our delicious cuisine!
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
        
        carouselTextAndTitleContainer[i] = document.createElement('div');
        carouselTextAndTitleContainer[i].classList.add(`carouselTextAndTitleContainer${[i]}`)
        //make the the image and text container change in the second position of the carousel
        if( i === 1){
            homePageContainers[i].appendChild(carouselTextAndTitleContainer[i])
            homePageContainers[i].appendChild(carouselImageContainer[i])  
        }else{
            homePageContainers[i].appendChild(carouselImageContainer[i])
            homePageContainers[i].appendChild(carouselTextAndTitleContainer[i])
        }

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

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("input");
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Full Name";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = " "
    nameInput.id = "name";
    nameInput.required = true;

    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("input");
    const phoneNumber = document.createElement("label");
    phoneNumber.setAttribute("for", "phoneNumber");
    phoneNumber.textContent = "Phone Number";
    const phoneNumberInput = document.createElement("input");
    phoneNumberInput.type = "tel";
    phoneNumberInput.placeholder= " "
    phoneNumberInput.id = "phoneNumber";
    phoneNumberInput.required = true;
    phoneNumberInput.pattern ="\\+?[0-9]{9,12}";

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("input");
    const email = document.createElement("label");
    email.setAttribute("for", "email");
    email.textContent = "Email";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.required = true;
    emailInput.placeholder = " "

    const numbPeopleDiv = document.createElement("div");
    numbPeopleDiv.classList.add("input");
    const numberOfPeopleLabel = document.createElement("label");
    numberOfPeopleLabel.setAttribute("for", "numberOfPeople");
    numberOfPeopleLabel.textContent = "Number of People";
    const numberOfPeopleInput = document.createElement("input");
    numberOfPeopleInput.type = "number";
    numberOfPeopleInput.placeholder = " "
    numberOfPeopleInput.id = "numberOfPeople";
    numberOfPeopleInput.required = true;

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("input");
    const dateInputLabel = document.createElement("label");
    const dateInput = document.createElement("input");
    dateInputLabel.setAttribute("for", "read_date");
    dateInputLabel.textContent = "Date (DD/MM/20YY)";
    dateInput.type = "text";
    dateInput.id = "read_date"; // Give it an ID for labeling
    dateInput.placeholder= " "
    dateInput.required = true;
    dateInput.pattern = "\\d{2}/\\d{2}/202\\d";
    
    const timeDiv = document.createElement("div");
    timeDiv.classList.add("input");
    const timeInputLabel = document.createElement("label");
    const timeInput = document.createElement("input");
    timeInputLabel.setAttribute("for", "read_time");
    timeInputLabel.textContent = "Time (10h to 22h)";
    timeInput.type = "text";
    timeInput.placeholder = " "
    timeInput.id = "read_time"; 
    timeInput.required = true;
    timeInput.pattern = "^([1][0-9]|2[0-2]):00$";
    
    const hourDatalist = document.createElement("datalist");
    hourDatalist.id = "hours";
    
    for (let hour = 22; hour >= 10; hour--) {
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

    leftSideReservationForms.appendChild(nameDiv);
    leftSideReservationForms.appendChild(phoneDiv);
    leftSideReservationForms.appendChild(emailDiv);
    rightSideReservationForms.appendChild(numbPeopleDiv);
    rightSideReservationForms.appendChild(dateDiv);
    rightSideReservationForms.appendChild(timeDiv);

    nameDiv.appendChild(nameInput);
    nameDiv.appendChild(nameLabel);
    phoneDiv.appendChild(phoneNumberInput);
    phoneDiv.appendChild(phoneNumber);
    emailDiv.appendChild(emailInput);
    emailDiv.appendChild(email);
    numbPeopleDiv.appendChild(numberOfPeopleInput);
    numbPeopleDiv.appendChild(numberOfPeopleLabel);
    dateDiv.appendChild(dateInput);
    dateDiv.appendChild(dateInputLabel);
    timeDiv.appendChild(timeInput);
    timeDiv.appendChild(timeInputLabel)
    
    timeDiv.appendChild(hourDatalist)
        
  
    containerReservationForms.appendChild(leftSideReservationForms)
    containerReservationForms.appendChild(rightSideReservationForms)
    bookForm.appendChild(containerReservationForms)
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

