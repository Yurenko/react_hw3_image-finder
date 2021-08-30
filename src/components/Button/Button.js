import React from 'react';
import style from './Button.module.css';

function Button({ onLoadClick }) {
  return (
    <button type="button" onClick={onLoadClick} className={style.Button}>
      Load more
    </button>
  );
}

export default Button;
