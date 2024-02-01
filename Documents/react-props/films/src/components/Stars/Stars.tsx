import Star from "../Star/Star";
import classes from "./Stars.module.css"
type filmStars = {
    count: number,
}

const Stars = ({count}: filmStars) => {
    if (count < 1 || count > 5) {
        return null
    }

    const arrStar = new Array(count).fill(<Star />);

    return(
        <ul className = "card-body-stars">
            {arrStar.map((el, i) =>
             <li key ={i}>
                {el}
             </li>
            )}
        </ul>
    )
}

export default Stars;