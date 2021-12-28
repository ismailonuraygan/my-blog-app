import { useEffect, useState, useContext } from "react"
import { useLocation } from "react-router"
import "./singlePost.css"
import axios from 'axios'
import {Link} from 'react-router-dom';
import {Context} from '../../context/Context';


function SinglePost() {
    const location = useLocation()
    const path = (location.pathname.split("/")[2])
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    useEffect(()=> {
        const getPost = async ()=> {
            const res = await axios.get("/posts/" + path)
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc)
        }
        getPost()
    },[path])

    const handleCategory = ()=> {
        user.data.categories = [];
    }
    const handleDelete = async ()=> {
        try{
        await axios.delete(`/posts/${post._id}` , {
            data: {username: user.username}})
        window.location.replace("/");

        }catch(err) {
        };
    }

    const handleUpdate = async () => {
        try{
            await axios.put(`/posts/${post._id}` , {
                
                    username: user.username,
                    title: title,
                    desc: desc,
                })
            setUpdateMode(false)
                console.log("post has been updated")
            }catch(err) {
            };
    }
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                <img 
                   src={PF + post.photo}
                   alt=""
                   className="singlePostImage" />
                )}{
                    updateMode ? ( <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="singlePostTitleInput" autoFocus/>) : (

                        <h1 className="singlePostTitle">
                    {title}
                    {post.username === user?.username && ( 
                        <div className="edit">
                        <i className="singlePostIcon far fa-edit" onClick={()=> setUpdateMode(true)}></i>
                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                    </div>
                    )}
                    
                </h1>
                     )}
                <div className="info">
                    <span className="author">
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                        </span>
                    <span className="date">{new Date(post.createdAt).toDateString()}</span>
                </div> 
                {updateMode ? (
                    <textarea className="singlePostDescriptionInput" value={desc} onChange={(e)=>setDesc(e.target.value)} />
                ): (
                    <p className="singlePostDescription">
                    {desc}
                    </p>
                    )}  
                    {updateMode && (
                        <button className="singlePostButton" onClick={()=>{handleUpdate(); handleCategory();} }>Update</button>
                    )}
            </div>
        </div>
    )
}

export default SinglePost
