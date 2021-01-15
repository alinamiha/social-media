import classes from './Profile.module.css'
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div>
            <Posts posts={props.profile.posts}
                   newPostText={props.profile.newPostText}
                   dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile