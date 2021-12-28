import Sidebar from "../../components/sidebar/Sidebar"
import "./profile.css"
import {useContext, useState} from 'react';
import {Context} from '../../context/Context';
import axios from "axios";

// Update user part doesn't work properly
function Profile() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const PF = "http://localhost:5000/images/";

    const {user, dispatch} = useContext(Context);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({type: "update_start"});
        const updatedUser = {
            userId: user._id,
            username: username,
            email: email,
            password: password
        };
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilPicture = filename;
            console.log(data)
            try{
                await axios.post("/upload", data);
            }catch(err){}
        }
        try{
            const res = await axios.put("/users/" + user._id, {updatedUser});
            setSuccess(true);
            dispatch({type: "update_success", payload: res.data});
            console.log(user._id)
        }catch(err){
            dispatch({type: "update_failure"})
            console.log(err)
        }
    };

    return (
        <div className="profile">
            <div className="profileWrapper">
                <div className="profileTitle">
                    <span className="profileUpdateTitle">Update Your Profile</span>
                </div>
                <form className="profileForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="profilePicture">
                        <img src={file ? URL.createObjectURL(file) : require("../../img/user_icon.jpg")} alt="" />
                        <label htmlFor="fileInput">
                        <i className="profilePictureIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}} onChange={(e) => setFile(e.target.files[0])}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" onChange={e=>setPassword(e.target.value)}/>
                    <button className="submit" type="submit">Update</button>
                    {success && <span style={{color: "green"}}>User has been updated</span>}
                </form>
            </div>
            <Sidebar /> 
        </div>
    )
}

export default Profile
