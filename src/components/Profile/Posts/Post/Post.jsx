import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.post}>
            <h4>№{props.id}</h4>
            <h1 className={classes.title}>{props.title}</h1>
            <img className={classes.avatar}
                 src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.internazionale.it%2Fnotizie%2F2016%2F02%2F05%2Fdiversita&psig=AOvVaw1w_TTpyafZq4Re-7f8tt6k&ust=1608384672568000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCd4vvR1-0CFQAAAAAdAAAAABAD"
                 alt=""/>
        </div>
    )
}
export default Post