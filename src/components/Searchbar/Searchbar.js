import React from 'react';
import style from './Searchbar.module.css';

function SearchBar({ onSubmit }) {
  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          name="search"
        />
      </form>
    </header>
  );
}

export default SearchBar;
