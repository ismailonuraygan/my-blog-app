import "./write.css"
import {useState, useContext} from 'react';
import axios from 'axios';
import {Context} from '../../context/Context'
function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context)
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const newPost = {
    //         username: user.username,
    //         title,
    //         desc
    //     };
    //     if(file) {
    //         const data = new FormData();
    //         const filename = Date.now() + file.name;
    //         data.append("name", filename);
    //         data.append("file", file);
    //         newPost.photo = filename;
    //         console.log(data)
    //         try{
    //             await axios.post("/upload", data);
                
    //         }catch(err) {}
    //     }
    //     try{
    //         const res = await axios.post("/posts", newPost );
    //         window.location.replace("/post/" + res.data._id)
    //     }catch(err){
    //     }
    // }
const [data, setData] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(file);
        const formData = new FormData();
        formData.append("photo", file);
        formData.append("title", title);
        formData.append("desc", desc);
        formData.append("username", user.username);
        console.log(formData)
        try {
          const res = await axios({
            method: "post",
            url: "/posts",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },  
            })
        window.location.replace("/post/" + res.data._id);
        setData(res.data)
        } catch (err) {
          console.log(err);
        }
       
      };



    return (
        <div className="write">
            {file && ( 
            <img 
                className="writeImage" 
                src={URL.createObjectURL(file)}
                 alt="" 
            />
            )}
            <form className="writeForm" onSubmit={(e)=>handleSubmit(e)}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="icon fas fa-plus" style={{cursor: "pointer"}}></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
                    <input type="text" placeholder="Title" onChange={e=> setTitle(e.target.value)} className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder="What's happening?"
                        type= "text"
                        className="writeInput writePost"
                        onChange={e=>setDesc(e.target.value)}
                    >
                    </textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}

export default Write
   




