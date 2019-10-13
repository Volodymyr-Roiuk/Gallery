class Gallery {
  constructor() {
    this.imagesArr = ['https://en.js.cx/gallery/img2-lg.jpg', 'https://en.js.cx/gallery/img3-lg.jpg', 'https://en.js.cx/gallery/img4-lg.jpg', 'https://en.js.cx/gallery/img5-lg.jpg', 'https://en.js.cx/gallery/img6-lg.jpg'];
  }

  createHtmlGallery() {
    document.body.innerHTML = `
      <section class="gallery">
        <img class="gallery__LargeImg" src="https://en.js.cx/gallery/img2-lg.jpg">
        <div class="gallery__images">
          ${this.imagesArr.map(imgSrc => `<img class="gallery__imgItem" src="${imgSrc}">`).join('')}
        </div>
      </section>
    `;
  }

  clickEvent(event) {
    const imgList = document.querySelector('.gallery__images');
    const item = event.target.closest('.gallery__imgItem');

    if(item || imgList.contains(item)) {
      const largeImg = document.querySelector('.gallery__LargeImg');
      largeImg.setAttribute('src', item.getAttribute('src'));
    }
  }

  addEvents() {
    let imgList= document.querySelector('.gallery__images');
    imgList.addEventListener('click', this.clickEvent);
  }


}

let gal = new Gallery();
gal.createHtmlGallery();
gal.addEvents();
