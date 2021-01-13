import classes from "../Dialog.module.css";
import {NavLink} from "react-router-dom";

const Participant = (props) => {
    return (
        <div className={classes.participant}>
            <NavLink to={"/dialogues/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default Participant