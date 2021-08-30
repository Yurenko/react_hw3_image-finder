import React from 'react';
import style from './ImageGallery.module.css';

function ImageGalleryItem({ item, onClick }) {
  const { webformatURL, tags, largeImageURL } = item;
  return (
    <li className={style.ImageGalleryItem}>
      <a href={largeImageURL} onClick={onClick}>
        <img
          src={webformatURL}
          alt={tags}
          className={style.ImageGalleryItemImage}
          srcSet={largeImageURL}
        />
      </a>
    </li>
  );
}

export default ImageGalleryItem;
