const Link = ({href, img, text}) => {
    return(
        <a href={href}>
            {img ? <img src={img} alt="img"/> : ''}
            {text ? text : ''}
        </a>
    )
} 

export default Link;