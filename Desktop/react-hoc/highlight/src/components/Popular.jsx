import PropTypes from "prop-types";

const Popular = ({children}) => {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {children}
        </div>
    )
}

Popular.propTypes ={
    children: PropTypes.node.isRequired
}

export default Popular;