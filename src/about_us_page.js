 

const aboutUsData = [
    { 
        title: "Your Beachside Oasis",
        description: "CaliBrunch is a beachside haven on the west coast, fusing sun, sea, and cuisine for a Los Santos inspired escape."

    },
    {
        title: "Culinary Journey by the Coast",
        description: "Taste California with us - fresh salads, juicy burgers, and more, all crafted from top-quality, local ingredients."
    },
    {
        title: "Experience Los Santos",
        description: "CaliBrunch is the beachside lifestyle of waves, coastal cuisine, and unforgettable memories."
    }
    







]






export const aboutUsPage = () => {

    
    const bodyContainer = document.querySelector('.body');


    const containerAboutUs = document.createElement('div');
    containerAboutUs.classList.add("containerAboutUs");
    containerAboutUs.id= "about"
    bodyContainer.appendChild(containerAboutUs)


    const aboutUsLeftContainer = document.createElement('div');
    aboutUsLeftContainer.classList.add("aboutUsLeftContainer");
    containerAboutUs.appendChild(aboutUsLeftContainer)    



    const aboutUsRightContainer = document.createElement('div');
    aboutUsRightContainer.classList.add("aboutUsRightContainer");
    containerAboutUs.appendChild(aboutUsRightContainer) 


   


/*-------------------------------------------- Left Side of the Page ---------------------------------------------------------*/    
  
  

    const headerContainer = document.createElement('div');
    headerContainer.classList = "headerContainer";
    aboutUsRightContainer.appendChild(headerContainer); 
    headerContainer.style.alignItems = "center"

    const subHeader = document.createElement('div');
    subHeader.classList = "subHeader";
    headerContainer.appendChild(subHeader);

    const subHeaderText = document.createElement('p');
    subHeaderText.classList = "subHeaderText";
    subHeader.appendChild(subHeaderText);
    subHeaderText.textContent = "Contact"

    const subHeaderImage = document.createElement('img');
    subHeaderImage.classList = "subHeaderImage";
    subHeader.appendChild(subHeaderImage);
    subHeaderImage.src = "./images/welcomeImages/spoon.svg"
  

    const titleContainer = document.createElement('h2');
    titleContainer.classList = "sectionHeader";
    headerContainer.appendChild(titleContainer); 
    titleContainer.textContent = "Find Us";









      


/*------------------------------------------------------------ Right Side of the Page ---------------------------------------------------------*/


const chefsImageContainer = document.createElement('div'); 
chefsImageContainer.classList.add("chefsImagesContainer");
aboutUsLeftContainer.appendChild(chefsImageContainer);

const chefOneContainer = document.createElement('div'); 
chefOneContainer.classList.add("ContainerForChef");
chefsImageContainer.appendChild(chefOneContainer);

const cardChefOne = document.createElement('div');
cardChefOne.classList.add("card_body_chefs")
chefOneContainer.appendChild(cardChefOne);

const chefOneName = document.createElement('div');
chefOneName.classList.add("chefsNames")
cardChefOne.appendChild(chefOneName);
chefOneName.textContent = "Chef Franklin";

const firstChefImage = document.createElement('img'); 
firstChefImage.classList.add("chefImage");
chefOneContainer.appendChild(firstChefImage);
firstChefImage.loading = 'lazy';
firstChefImage.src ='./images/about_us_photos/chef_1.jpg'

const chefTwoContainer = document.createElement('div'); 
chefTwoContainer.classList.add("ContainerForChef");
chefsImageContainer.appendChild(chefTwoContainer);

const cardChefTwo = document.createElement('div');
cardChefTwo.classList.add("card_body_chefs")
chefTwoContainer.appendChild(cardChefTwo);

const chefTwoName = document.createElement('div');
chefTwoName.classList.add("chefsNames")
cardChefTwo.appendChild(chefTwoName);
chefTwoName.textContent = "Chef Michael";

const secondChefImage = document.createElement('img'); 
secondChefImage.classList.add("chefImage");
chefTwoContainer.appendChild(secondChefImage);
secondChefImage.loading = 'lazy';
secondChefImage.src ='./images/about_us_photos/chef_2.jpg'


const containerGroupImage = document.createElement('div');
containerGroupImage.classList.add("groupImage")
containerGroupImage.classList.add("groupImageContainer")
aboutUsLeftContainer.appendChild(containerGroupImage);

const groupImage = document.createElement('img'); 
groupImage.classList.add("groupImage");
containerGroupImage.appendChild(groupImage);
groupImage.loading = 'lazy';
groupImage.src ='./images/about_us_photos/group_pic.jpg'


const cardGroupImage = document.createElement('div');
cardGroupImage.classList.add("card_body_group_image")
containerGroupImage.appendChild(cardGroupImage);


const crewName = document.createElement('div');
crewName.classList.add("chefsNames")
cardGroupImage.appendChild(crewName);
crewName.textContent = "Our Team";

const locationHeader = document.createElement('h3'); 
locationHeader.classList.add("subHeaderAboutUs");
aboutUsRightContainer.appendChild(locationHeader)
locationHeader.textContent = "Location";

const descriptionOne = document.createElement('p'); 
descriptionOne.classList.add("aboutUsDescription");
aboutUsRightContainer.appendChild(descriptionOne)
descriptionOne.textContent = "123 Main Street, Los Santos, US, 1823-23";

const openHourHeader = document.createElement('h3'); 
openHourHeader.classList.add("subHeaderAboutUs");
aboutUsRightContainer.appendChild(openHourHeader)
openHourHeader.textContent = "Opening Hours";

const descriptionTwo = document.createElement('p'); 
descriptionTwo.classList.add("aboutUsDescription");
aboutUsRightContainer.appendChild(descriptionTwo)
descriptionTwo.textContent = "Mon - Fri: 09:00 Am - 10:00 Pm";

const descriptionThree = document.createElement('p'); 
descriptionThree.classList.add("aboutUsDescription");
aboutUsRightContainer.appendChild(descriptionThree)
descriptionThree.textContent = "Sat - Sun: 10:00 Am - 11:00 Pm";



}