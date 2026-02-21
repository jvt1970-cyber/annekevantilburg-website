/* ============================================================
   ANNEKE VAN TILBURG — Gallery (PhotoSwipe 5)
   ============================================================ */

import PhotoSwipeLightbox from 'https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe-lightbox.esm.min.js';

const lightbox = new PhotoSwipeLightbox({
  gallery:    '#gallery',
  children:   'a.carousel-painting',
  pswpModule: () => import('https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe.esm.min.js'),

  /* Styling */
  bgOpacity:  0.96,
  spacing:    0.08,

  /* Captions via data-pswp-caption */
  addCaptionHTMLFn: (slide) => {
    const caption = slide.data.element?.querySelector('.masonry-caption')?.textContent;
    if (caption) {
      slide.captionElement.textContent = caption;
    }
  }
});

lightbox.init();
