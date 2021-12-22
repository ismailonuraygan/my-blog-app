import "./write.css"

function Write() {
    return (
        <div className="write">
            <img 
                className="writeImage" 
                src={require("../../img/pexels-photo-1066176.jpeg")}
                 alt="" 
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="icon fas fa-plus" style={{cursor: "pointer"}}></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder="What's happening?"
                        type= "text"
                        className="writeInput writePost" >
                    </textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write
   