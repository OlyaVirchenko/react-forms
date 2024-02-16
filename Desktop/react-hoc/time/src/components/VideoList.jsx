import shortid from 'shortid';
import PropTypes from 'prop-types'
import Video from './Video';

const VideoList = ({list}) => {
    return list.map(item => <Video key={shortid.generate()} url={item.url} date={item.date}/>);
}

VideoList.propTypes = {
    list: PropTypes.array.isRequired
  }
  
export default VideoList;