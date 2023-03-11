import React, { Fragment } from 'react';
import foodImage from '../../assets/foodImage.jpg';
import classes from './Header.module.css';
import HeaderItemButton from './HeaderItemButton';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Shopping App</h1>
        <HeaderItemButton />
      </header>
      <div className={classes['main-image']}>
        <img src={foodImage} alt="A food online order" />
      </div>
    </Fragment>
  );
};

export default Header;
