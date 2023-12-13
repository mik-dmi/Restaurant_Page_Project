const pathForImages = ['./images/galleryImages/image_4.jpg','./images/galleryImages/image_6.jpg','./images/galleryImages/image_8.jpg'];

export const galleryPage = ()=>{
    const bodyContainer = document.querySelector('.body');
    /*while (bodyContainer.firstChild) {
        bodyContainer.removeChild(bodyContainer.firstChild);
    };*/
    
    const arrDivForImage = [];
    const arrImage = [];

    const sectionContainer = document.createElement('div');
    sectionContainer.classList = 'gallerySectionContainer';
    sectionContainer.id = "gallery"
    bodyContainer.appendChild(sectionContainer);

    const leftSide = document.createElement('div');
    leftSide.classList = 'galleryLeftSideContainer';
    leftSide.id = "gallery"
    sectionContainer.appendChild(leftSide);

    const headerContainer = document.createElement('div');
    headerContainer.classList = "headerContainer";
    leftSide.appendChild(headerContainer); 
    headerContainer.style.alignItems = "center"

    const subHeader = document.createElement('div');
    subHeader.classList = "subHeader";
    headerContainer.appendChild(subHeader);

    const subHeaderText = document.createElement('p');
    subHeaderText.classList = "subHeaderText";
    subHeader.appendChild(subHeaderText);
    subHeaderText.textContent = "Social Media"



  

    const subHeaderImage = document.createElement('img');
    subHeaderImage.classList = "subHeaderImage";
    subHeader.appendChild(subHeaderImage);
    subHeaderImage.src = "./images/welcomeImages/spoon.svg"
   

    const welcomeTitleContainer = document.createElement('h2');
    welcomeTitleContainer.classList = "welcomeTitleContainer";
    headerContainer.appendChild(welcomeTitleContainer); 
 

    const welcomeHeaderOne = document.createElement('h2');
    welcomeHeaderOne.classList = "sectionHeader";
    welcomeTitleContainer.appendChild(welcomeHeaderOne); 
    welcomeHeaderOne.textContent = "Photo Gallery"
    welcomeTitleContainer.style.justifyContent = "start";


    const paragraphGallery = document.createElement('p');
    paragraphGallery.classList = "paragraphGallery";
    leftSide.appendChild(paragraphGallery); 
    paragraphGallery.textContent = "Follow us on our Social Media to find out more about our Brunch Experience"
    paragraphGallery.style.alignItems = "center"

    const socialMediaIconsContainer = document.createElement('div'); 
    socialMediaIconsContainer.classList.add("socialMediaIconsContainer");
    leftSide.appendChild(socialMediaIconsContainer)
    
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




    const rightSide = document.createElement('div');
    rightSide.classList = 'galleryRightSideContainer';
    sectionContainer.appendChild(rightSide);
    
    
    

    pathForImages.forEach((image, index) =>{
        arrDivForImage[index] = document.createElement('div');
        arrDivForImage[index].classList.add(`galleryGridCell${index}`);
        
        arrImage[index] = document.createElement('img');
        arrImage[index].classList = 'galleryGridCell';
        arrImage[index].loading = 'lazy';
        arrImage[index].src = image; 
        
        arrDivForImage[index].appendChild(arrImage[index]);
        rightSide.appendChild(arrDivForImage[index]);

    })
}