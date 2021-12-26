import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import "./singlePost.css"
import axios from 'axios'

function SinglePost() {
    const location = useLocation()
    const path = (location.pathname.split("/")[2])
    const [post, setPost] = useState({});
    useEffect(()=> {
        const getPost = async ()=> {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
        }
        getPost()
    },[path])
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                <img 
                   src={post.photo}
                   alt=""
                   className="singlePostImage" />
                )}
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="edit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                    
                </h1>
                <div className="info">
                    <span className="author"><b>{post.username}</b></span>
                    <span className="date">{new Date(post.createdAt).toDateString()}</span>
                </div>   
                <p className="singlePostDescription">
                    {post.desc}
                </p>

            </div>
        </div>
    )
}

export default SinglePost
