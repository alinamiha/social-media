import classes from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    return (
        <div className={classes.sidebar}>
            <ul className={classes.menu}>
                <li className={classes.item}>
                    <NavLink to="/about" activeClassName={classes.active}>about</NavLink>
                </li>

                <li className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.active}>profile</NavLink>
                </li>

                <li className={classes.item}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>messages</NavLink>
                </li>

                <li className={classes.item}>
                    <NavLink to="/services" activeClassName={classes.active}>services</NavLink>
                </li>

                <li className={classes.item}>
                    <NavLink to="/estimation" activeClassName={classes.active}>estimation</NavLink>
                </li>

                <li className={classes.item}>
                    <NavLink to="/contact" activeClassName={classes.active}>contact</NavLink>
                </li>
            </ul>
            <section>
                <h2>friends</h2>
                <ul>
                    {props.state.friends.map(item => <Friends name={item.name}/>)}
                </ul>
            </section>

        </div>
    )
}
export default Sidebar