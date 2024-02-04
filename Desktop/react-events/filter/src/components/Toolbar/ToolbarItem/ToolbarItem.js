import PropTypes from "prop-types";
import classes from './ToolbarItem.module.css';

const ToolbarItem = (props) => {
  let classButton = classes.filterButton;
  if (props.selected === props.title) {
    classButton = `${classes.filterButton} ${classes.active}`;
  }
  return (
    <div>
      <button
        className={classButton}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  )
}

ToolbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ToolbarItem;