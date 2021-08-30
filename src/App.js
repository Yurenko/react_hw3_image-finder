import React, { Component } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/Searchbar/Searchbar';
import Button from './components/Button/Button';
import * as API from './servises/pixabey-api';
import style from './App.module.css';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    pages: [],
    query: '',
    numberPage: 1,
    modalImg: '',
    isOpen: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.search;
    this.setState({ query: value }, () => {
      API.imageAPI(this.state.query)
        .then(res => this.setState({ pages: [...res] }))
        .catch(console.error);
    });
  };

  handleLoading = e => {
    e.preventDefault();
    this.setState(
      state => ({ numberPage: state.numberPage + 1 }),
      () => {
        API.imageAPI(this.state.query, this.state.numberPage)
          .then(res =>
            this.setState(state => ({
              pages: [...state.pages, ...res],
            })),
          )
          .catch(console.error);
      },
    );
  };

  handleClick = e => {
    e.preventDefault();
    const { currentSrc } = e.target;
    this.setState({ modalImg: currentSrc, isOpen: true });
  };

  handleClose = () => {
    this.setState({ modalImg: '', isOpen: false });
  };

  render() {
    const { pages, modalImg, isOpen } = this.state;
    return (
      <div className={style.App}>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery pages={pages} onClick={this.handleClick} />
        {pages.length > 0 && <Button onLoadClick={this.handleLoading} />}
        {isOpen && <Modal url={modalImg} onClose={this.handleClose} />}
      </div>
    );
  }
}

export default App;
