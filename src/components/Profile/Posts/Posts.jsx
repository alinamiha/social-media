import classes from './Posts.module.css'
import Post from "./Post/Post";
import React from 'react'


const Posts = (props) => {
    let newTextarea = React.createRef()

    let createPost = () => {
        let textField = newTextarea.current.value
        props.addPost(textField)
    }
    let postTextChange = () => {
        let textField = newTextarea.current.value
        props.updatePostText(textField)
    }

    return (
        <div>
            <div className="create-post">
                <textarea
                    ref={newTextarea}
                    value={props.newPostText}
                    onChange={postTextChange}/>
                <button onClick={createPost}>Submit</button>
            </div>
            <div className={classes.posts}>
                {props.posts.map(item => <Post id={item.id} title={item.title}/>)}
            </div>
        </div>
    )
}
export default Posts