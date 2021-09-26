import React from 'react'
import { Link } from 'react-router-dom'
import PostDetail from './PostDetail'

const Post = (props) => {
    return (
        <div className="car-content">
            <Link to={`posts/${props.num}`}>
                <img src={props.url} />
                <h3>{props.name}</h3>
            </Link>
            
        </div>
    )
}

export default Post
