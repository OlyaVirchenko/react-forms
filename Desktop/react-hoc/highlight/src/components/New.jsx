import PropTypes from 'prop-types';

const New = ({children}) => {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {children}
        </div>
    )
}

New.propTypes = {
    children: PropTypes.node.isRequired
}

export default New;