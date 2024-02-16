import DataTime from "./DataTime";
import withDateTimePretty from "./withDateTimePretty";
import PropTypes from 'prop-types';

const Video = ({url, date}) => {
    return (
        <div>
            <iframe src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date = {date} />
        </div>
    )
}

const DateTimePretty = withDateTimePretty(DataTime);

Video.propTypes = {
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default Video;