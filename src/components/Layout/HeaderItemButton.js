import classes from './HeaderItemButton.module.css';

const HeaderItemButton = (props) => {
  return (
    <button className={classes.button}>
      <span>Your Added Items</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderItemButton;
