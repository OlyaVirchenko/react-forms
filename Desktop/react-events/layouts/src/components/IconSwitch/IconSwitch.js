import classes from './IconSwitch.module.css'

const IconSwitch = (props) => {
    return (
        <div className={classes.container}>
            <span className="material-icons"
            onClick={props.onClick}>
                {props.icon}
            </span>
        </div>
    )
}
export default IconSwitch;