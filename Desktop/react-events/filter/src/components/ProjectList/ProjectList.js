import PropTypes from "prop-types";
import ProjectListItem from "./ProjectListItem/ProjectListItem";
import classes from './ProjectList.module.css';


const ProjectList = (props) => {
  if (props.images.length === 0) {
    return <p>К сожалению тут пусто...</p>
  }
  return (
    <div className={classes.container}>
      {props.images.map(image =>
        <ProjectListItem
          key={Math.random()}
          imgUrl={image.img}
        />)
      }
    </div>
  )
}

ProjectList.propTypes = {
  images: PropTypes.array.isRequired,
}

export default ProjectList;
