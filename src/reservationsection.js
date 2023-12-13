import DOMPurify from 'dompurify';

export const reservationSection = ()=>{

    const backgroundImages = './images/images_carousel/zero.jpg'

    const bodyContainer = document.querySelector('.body');
    
  
    



    
    
        const homePageContainers = document.createElement('div');
        homePageContainers.id = "reservation"
        const carouselImageContainer = document.createElement('div');
        carouselImageContainer.classList.add(`carouselImageContainer`)
        
        const carouselTextAndTitleContainer = document.createElement('div');
        carouselTextAndTitleContainer.classList.add(`carouselTextAndTitleContainer`)
        //make the the image and text container change in the second position of the carousel




        homePageContainers.appendChild(carouselImageContainer)
        homePageContainers.appendChild(carouselTextAndTitleContainer)
    


        homePageContainers.classList.add(`containersHomePage`);
        homePageContainers.classList.add("slide");
        bodyContainer.appendChild(homePageContainers);

        const imageInCarousel = document.createElement('img');
        imageInCarousel.src = backgroundImages;
        imageInCarousel.classList = 'imageInCarousel';
        carouselImageContainer.appendChild(imageInCarousel); 
        ReservationForms(carouselTextAndTitleContainer)
}

function ReservationForms(reservationFormsContainer){
    const formsContainer = document.createElement("div");
    formsContainer.classList.add("formsContainer");
    const bookForm = document.createElement("form");
    bookForm.id = "bookForm";
    bookForm.method = "post";
   
        // Create the div with class "forms"
        const welcomeHeaderContainer = document.createElement('div');
        welcomeHeaderContainer.classList = "welcomeHeaderContainer";
        reservationFormsContainer.appendChild(welcomeHeaderContainer); 
        
        const subHeader = document.createElement('div');
        subHeader.classList = "subHeader";
        welcomeHeaderContainer.appendChild(subHeader);
        subHeader.style.alignItems = "center"
          
    
        const titleContainer = document.createElement('h2');
        titleContainer.classList = "sectionHeader";
        subHeader.appendChild(titleContainer); 
        titleContainer.textContent = "Book A Table"
        titleContainer.style.color = "rgba(227, 199, 43, 0.89)"
        titleContainer.style.padding = 0
        

        const subHeaderImage = document.createElement('img');
        subHeaderImage.classList = "subHeaderImage";
        subHeader.appendChild(subHeaderImage);
        subHeaderImage.src = "./images/welcomeImages/spoon.svg"
    
      






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
    addButton.id = "reservation"
    addButton.classList.add("reservation_button");
    addButton.classList.add("all_button");
    addButton.textContent = "Book Now";

  

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








