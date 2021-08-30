import React from 'react';
import ImageGalleryItems from './ImageGalleryItem';
import style from './ImageGallery.module.css';

function ImageGallery({ pages, onClick }) {
  return (
    <ul className={style.ImageGallery}>
      {pages.map(item => (
        <ImageGalleryItems item={item} key={item.id} onClick={onClick} />
      ))}
    </ul>
  );
}

export default ImageGallery;
