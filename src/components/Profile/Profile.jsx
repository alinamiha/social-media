import classes from './Profile.module.css'
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div>
            <Posts posts={props.profile.posts} newPostText={props.profile.newPostText} addPost={props.addPost} updatePostText={props.updatePostText}/>
        </div>
    )
}
export default Profile