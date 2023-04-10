
// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const gallery = document.querySelector('.gallery');


       const markup = galleryItems.map(({preview, original, description}) =>
      `<li class="gallery__item">
        <a href='${original}'class='gallery__link'>
            <img class='gallery__image' src = '${preview}' alt = '${description}' data-source = '${original}' width= '100%'>
        </a>
        </li >`);
    
    gallery.insertAdjacentHTML('beforeend', markup.join(''));
    
  
gallery.insertAdjacentHTML('beforeend', markup.join(''));
    

     new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
    });
 
