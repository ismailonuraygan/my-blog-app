import Sidebar from "../../components/sidebar/Sidebar"
import "./profile.css"

function Profile() {
    return (
        <div className="profile">
            <div className="profileWrapper">
                <div className="profileTitle">
                    <span className="profileUpdateTitle">Update Your Profile</span>
                    <span className="profileDelete">Delete Account</span>
                </div>
                <form className="profileForm">
                    <label>Profile Picture</label>
                    <div className="profilePicture">
                        <img src={require("../../img/profile.png")} alt="" />
                        <label htmlFor="fileInput">
                        <i class="profilePictureIcon fas fa-user-circle"></i>
                        <div>Update your profile</div>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Onur" />
                    <label>Email</label>
                    <input type="email" placeholder="ionuraygan@gmail.com" />
                    <label>Password</label>
                    <input type="password"/>
                    <button className="submit">Update</button>
                </form>
            </div>
            <Sidebar /> 
        </div>
    )
}

export default Profile
