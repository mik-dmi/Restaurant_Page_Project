const pathForImages = ['./images/galleryImages/image_1.jpg','./images/galleryImages/image_2.jpg','./images/galleryImages/image_3.jpg','./images/galleryImages/image_4.jpg','./images/galleryImages/image_5.jpg','./images/galleryImages/image_6.jpg','./images/galleryImages/image_7.jpg','./images/galleryImages/image_8.jpg','./images/galleryImages/image_9.jpg'];

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



    const galleryTitleContainer = document.createElement('div');
    galleryTitleContainer.classList = "HeaderOfPages";
    sectionContainer.appendChild(galleryTitleContainer);

    const spanMTitleContainer = document.createElement('span');
    spanMTitleContainer.classList.add("text-gold-gradient" )
    spanMTitleContainer.textContent = "Gallery";
    galleryTitleContainer.appendChild(spanMTitleContainer);

    const gridContainer = document.createElement('div');
    gridContainer.classList = 'galleryGridContainer';
    sectionContainer.appendChild(gridContainer);

    
    

    pathForImages.forEach((image, index) =>{
        arrDivForImage[index] = document.createElement('div');
        arrDivForImage[index].classList.add(`galleryGridCell${index}`, 'blurImage');
        
        arrImage[index] = document.createElement('img');
        arrImage[index].classList = 'galleryGridCell';
        arrImage[index].loading = 'lazy';
        arrImage[index].src = image; 
        
        arrDivForImage[index].appendChild(arrImage[index]);
        gridContainer.appendChild(arrDivForImage[index]);

    })
}