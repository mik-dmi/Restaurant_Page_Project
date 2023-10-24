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
    const titles = [];
    const description = [];
    
    const bodyContainer = document.querySelector('.body');
    while (bodyContainer.firstChild) {
        bodyContainer.removeChild(bodyContainer.firstChild);
    }

    const containerAboutUs = document.createElement('div');
    containerAboutUs.classList.add("containerAboutUs");
    bodyContainer.appendChild(containerAboutUs)

    const aboutUsLeftContainer = document.createElement('div');
    aboutUsLeftContainer.classList.add("aboutUsLeftContainer");
    containerAboutUs.appendChild(aboutUsLeftContainer)    

    const aboutUsRightContainer = document.createElement('div');
    aboutUsRightContainer.classList.add("aboutUsRightContainer");
    containerAboutUs.appendChild(aboutUsRightContainer) 

/*-------------------------------------------- Left Side of the Page ---------------------------------------------------------*/    
    const headerContainer = document.createElement('div');
    headerContainer.classList.add("HeaderOfPages");
    aboutUsLeftContainer.appendChild(headerContainer) 
    headerContainer.textContent = "About Us"

    for(let i = 0;  i < 3; i++){
        titles[i] = document.createElement('h1'); 
        titles[i].classList.add("titlesAboutUs");
        aboutUsLeftContainer.appendChild(titles[i])
        titles[i].textContent = aboutUsData[i].title;

        description[i] = document.createElement('p'); 
        description[i].classList.add("aboutUsDescription");
        aboutUsLeftContainer.appendChild(description[i])
        description[i].textContent = aboutUsData[i].description;

    }


    const socialMediaTitle = document.createElement('h1'); 
    socialMediaTitle.classList.add("titlesAboutUs");
    aboutUsLeftContainer.appendChild(socialMediaTitle)
    socialMediaTitle.textContent = "Follow us on Social Media";

    const socialMediaIconsContainer = document.createElement('div'); 
    socialMediaIconsContainer.classList.add("socialMediaIconsContainer");
    aboutUsLeftContainer.appendChild(socialMediaIconsContainer)
    
  /*  const instagramIconContainer = document.createElement('a'); 
    instagramIconContainer.classList.add("socialMediaIcons");
    socialMediaIconsContainer.appendChild(instagramIconContainer)*/
    
    const instagram = document.createElement('i'); 
    instagram.classList.add('socialMediaIcons')
    instagram.classList.add('bx')
    instagram.classList.add('bxl-instagram') 
    socialMediaIconsContainer.appendChild(instagram)

    const twitter = document.createElement('i');
    twitter.classList.add('socialMediaIcons')
    twitter.classList.add('bx')
    twitter.classList.add('bxl-twitter') 
    socialMediaIconsContainer.appendChild(twitter)

    const facebook = document.createElement('i'); 
    facebook.classList.add('socialMediaIcons')
    facebook.classList.add('bx')
    facebook.classList.add('bxl-meta') 
    socialMediaIconsContainer.appendChild(facebook)

/*------------------------------------------------------------ Right Side of the Page ---------------------------------------------------------*/


const chefsImageContainer = document.createElement('div'); 
chefsImageContainer.classList.add("chefsImagesContainer");
aboutUsRightContainer.appendChild(chefsImageContainer);

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
aboutUsRightContainer.appendChild(containerGroupImage);

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


}