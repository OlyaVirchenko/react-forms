import PropTypes from 'prop-types';
import classes from './ProjectListItem.module.css';


const ProjectListItem = (props) => {
  return (
    <div className={classes['image-container']}>
      <img
        className={classes['image-item']}
        src={props.imgUrl}
        alt={Math.random()}
      />
    </div>
  )
}

ProjectListItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
}

export default ProjectListItem;