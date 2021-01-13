import classes from "../Dialog.module.css";

const Message = (props) => {
    return (
        <div className={classes.message}>
            <span>{props.title}</span>
        </div>
    )
}
export default Message