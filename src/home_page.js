import DOMPurify from 'dompurify';
export const mainPage = ()=>{
    const homePageContainers = [];
    const titleIfBody = [];
    const textInBody = [];
    const dataOfTitleInTheBody = ["Welcome","Oppen Hours","Location"]
    const dataTextInTheBody = ['Discover culinary excellence at Snacks on the Plate.Our restaurant offers a delightful array of globally inspired snacks and dishes. Experience the perfect blend of comfort and flavor with us today.',
    `<strong>Monday</strong> to Friday: 11:00 AM - 10:00 PM<br>
    <strong>Saturday</strong>: 12:00 PM - 11:00 PM<br>
    <strong>Sunday</strong>: 12:00 PM - 9:00 PM
    `, `Snacks on the Plate is conveniently located at:<br>
    123 Main Street,<br>
    City, State, ZIP Code<br><br>
    We are situated in the heart of [City], making it easy for you to find us and enjoy our delicious cuisine. We look forward to welcoming you to our restaurant!
    ` ];





    const mainContainer = document.getElementById('content');

    const headerContainer = document.createElement('div');
    headerContainer.classList = 'header';

    const bodyContainer = document.createElement('div');
    bodyContainer.classList = 'body';

    const footerContainer = document.createElement('div');
    footerContainer.classList = 'footer'
    
    const sidebarContainer = document.createElement('div');
    sidebarContainer.classList = "sidebar" 

    const homeButton = document.createElement('button');
    homeButton.classList = "menuButton";
    
    const menuButton =  document.createElement('button');
    menuButton.classList = "menuButton";
    
    const galleryButton =  document.createElement('button');
    galleryButton.classList = "menuButton";
    
    const contactButton =  document.createElement('button');
    contactButton.classList = "menuButton";
    
    const nameOfRestaurant = document.createElement('div');
    

    
    mainContainer.appendChild(headerContainer); //main page template 
    mainContainer.appendChild(sidebarContainer); 
    mainContainer.appendChild(bodyContainer);   //main page template 
    mainContainer.appendChild(footerContainer); //main page template 
    
    headerContainer.appendChild(nameOfRestaurant);
    sidebarContainer.appendChild(homeButton);
    sidebarContainer.appendChild(menuButton);
    sidebarContainer.appendChild(galleryButton);
    sidebarContainer.appendChild(contactButton);
   

    for(let i = 0; i < 3; i++ ){
        homePageContainers[i] = document.createElement('div');
        titleIfBody[i] = document.createElement('p');
        titleIfBody[i].classList = 'titleInBody';
        textInBody[i] = document.createElement('p');
        textInBody.classList = 'textInBody';
        homePageContainers[i].classList = "containersHomePage";
        titleIfBody[i].textContent = dataOfTitleInTheBody[i];
        textInBody[i].innerHTML  = dataTextInTheBody[i];
        bodyContainer.appendChild(homePageContainers[i]);
        homePageContainers[i].appendChild(titleIfBody[i]);
        homePageContainers[i].appendChild(textInBody[i]);
    };

        
  



     
    nameOfRestaurant.textContent = "Snacks on the Plate"

    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    galleryButton.textContent = 'Gallery';
    contactButton.textContent = 'Contact';

    footerContainer.textContent = "Copy Rights"
    console.log("coococ")


}