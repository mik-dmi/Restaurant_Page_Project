import DOMPurify from 'dompurify';
export const mainPage = ()=>{
    const homePageContainers = [];
    const titleIfBody = [];
    const textInBody = [];
    const dataOfTitleInTheBody = ["Welcome","Oppen Hours","Location"]
    const dataTextInTheBody = ['Discover culinary excellence at Snacks on the Plate.Our restaurant offers a delightful array of globally inspired snacks and dishes. Experience the perfect blend of comfort and flavor with us today.',
    `<strong>Monday to Friday</strong> : 11:00 AM - 10:00 PM<br>
    <strong>Saturday</strong>: 12:00 PM - 11:00 PM<br>
    <strong>Sunday</strong>: 12:00 PM - 9:00 PM
    `, `Snacks on the Plate is conveniently located at:<br>
    <strong>123 Main Street,</strong><br>
    <strong>City, State, ZIP Code</strong><br><br>
    We are situated in the heart of [City], making it easy for you to find us and enjoy our delicious cuisine. We look forward to welcoming you to our restaurant!
    ` ];

    const bodyContainer = document.querySelector('.body');
       
    
    while (bodyContainer.firstChild) {
        bodyContainer.removeChild(bodyContainer.firstChild);
    }

    for(let i = 0; i < 3; i++ ){
        homePageContainers[i] = document.createElement('div');
        titleIfBody[i] = document.createElement('p');
        titleIfBody[i].classList = 'titleInBody';
        textInBody[i] = document.createElement('p');
        textInBody[i].classList = 'textInBody';
        homePageContainers[i].classList = "containersHomePage";
        titleIfBody[i].textContent = dataOfTitleInTheBody[i];
        textInBody[i].innerHTML  = dataTextInTheBody[i];
        bodyContainer.appendChild(homePageContainers[i]);
        homePageContainers[i].appendChild(titleIfBody[i]);
        homePageContainers[i].appendChild(textInBody[i]);
    };

        
  




  


}