function resetScreen(bodyContainer,formsContainer, buttonReservationContainer,bookForm){

    
    
    bodyContainer.removeChild(formsContainer);
    buttonReservationContainer.style.display = 'flex'
    bookForm.reset()
  }




export const reservationPage = ()=>{
    
    const bodyContainer = document.querySelector('.body');
    while (bodyContainer.firstChild) {
        bodyContainer.removeChild(bodyContainer.firstChild);
    };

    const buttonReservationContainer = document.createElement('div');
    buttonReservationContainer.classList.add('buttonReservationContainer')
    bodyContainer.appendChild(buttonReservationContainer)

    const buttonReservation = document.createElement('button');
    buttonReservation.classList.add('reservation_button');
    buttonReservationContainer.appendChild(buttonReservation)
    buttonReservation.textContent = 'Fill this Form to make a Reservation'
    
    const formsContainer = document.createElement("div");
    formsContainer.classList.add("formsContainer");
    const bookForm = document.createElement("form");
    bookForm.id = "bookForm";
    bookForm.method = "post";
        // Create the div with class "forms"
        const formsDiv = document.createElement("div");
        formsDiv.classList.add("forms");

        // Create labels and inputs
        const nameLabel = document.createElement("label");
        nameLabel.setAttribute("for", "name");
        nameLabel.textContent = "First Name";
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.id = "name";
        nameInput.required = true;

        const secondNameLabel = document.createElement("label");
        secondNameLabel.setAttribute("for", "secondName");
        secondNameLabel.textContent = "Second Name";
        const secondNameInput = document.createElement("input");
        secondNameInput.type = "text";
        secondNameInput.id = "secondName";
        secondNameInput.required = true;

        const numberOfPeopleLabel = document.createElement("label");
        numberOfPeopleLabel.setAttribute("for", "numberOfPeople");
        numberOfPeopleLabel.textContent = "Number of People";
        const numberOfPeopleInput = document.createElement("input");
        numberOfPeopleInput.type = "number";
        numberOfPeopleInput.id = "numberOfPeople";
        numberOfPeopleInput.required = true;

        // Create the checkBoxContainer div
        const dateInputLabel = document.createElement("label");
        const dateInput = document.createElement("input");
        dateInputLabel.setAttribute("for", "read_date");
        dateInputLabel.textContent = "Date";
        dateInput.type = "date";
        dateInput.id = "read_date"; // Give it an ID for labeling
        
        // Create the time input element
        const timeInputLabel = document.createElement("label");
        const timeInput = document.createElement("input");
        timeInputLabel.setAttribute("for", "read_time");
        timeInputLabel.textContent = "Time";
        timeInput.type = "time";
        timeInput.id = "read_time"; 
        
        const hourDatalist = document.createElement("datalist");
        hourDatalist.id = "hours";
        
        for (let hour = 12; hour <= 22; hour++) {
          const option = document.createElement("option");
          option.value = `${hour}:00`;
          hourDatalist.appendChild(option);
        }
        
        timeInput.setAttribute("list", "hours");


        // Create the submit button
        const addButton = document.createElement("button");
        addButton.type = "submit";
        addButton.classList.add("create_a_book_card");
        addButton.textContent = "Add";

    buttonReservation.addEventListener("click", function () {
            // Append elements to their respective parents
        formsDiv.appendChild(nameLabel);
        formsDiv.appendChild(nameInput);
        formsDiv.appendChild(secondNameLabel);
        formsDiv.appendChild(secondNameInput);
        formsDiv.appendChild(numberOfPeopleLabel);
        formsDiv.appendChild(numberOfPeopleInput);
        formsDiv.appendChild(dateInputLabel)
        formsDiv.appendChild(dateInput);
        formsDiv.appendChild(timeInputLabel)
        formsDiv.appendChild(timeInput);
        formsDiv.appendChild(hourDatalist)
            
        formsDiv.appendChild(addButton);

        bookForm.appendChild(formsDiv);
        formsContainer.appendChild(bookForm);

        // Append the formsContainer to the document body or another desired location
        bodyContainer.appendChild(formsContainer);

        buttonReservationContainer.style.display = 'none'
       
    });

    bookForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        console.log("aqui")
    
        resetScreen(bodyContainer,formsContainer, buttonReservationContainer , bookForm); 
      });






}