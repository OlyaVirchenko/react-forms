import PropTypes from 'prop-types';
import shortid from 'shortid';
import Video from "./Video";
import Article from "./Article";
import withHighLightPost from "./withHighLightPost";

function List({list}) {
  return list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <VideoHOC key={shortid.generate()} {...item} />
        );

      case 'article':
        return (
          <ArticleHOC key={shortid.generate()} {...item} />
        );
      default:
        return <p>Empty</p>
    }
  });
}

const VideoHOC = withHighLightPost(Video);
const ArticleHOC = withHighLightPost(Article);

List.propTypes = {
  list: PropTypes.array.isRequired
}

export default List;