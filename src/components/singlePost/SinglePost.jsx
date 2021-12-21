import "./singlePost.css"

function singlePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                   src={require("../../img/pexels-photo-1066176.jpeg")}
                   alt=""
                   className="singlePostImage" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="edit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                    
                </h1>
                <div className="info">
                    <span className="author"><b>Onur</b></span>
                    <span className="date">2 hour ago</span>
                </div>   
                <p className="singlePostDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni placeat magnam nam ab rerum error itaque quos! Fugit id illum ullam! Quidem autem saepe repudiandae quibusdam id non delectus animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ab ducimus provident dolorum quis aut omnis officia maxime, fugit culpa deserunt corporis vero excepturi atque fuga itaque ut? Beatae, ea. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, pariatur. Eligendi vel ipsa sunt possimus laudantium? Soluta cumque reprehenderit repellendus necessitatibus ducimus mollitia aspernatur assumenda ad temporibus? Harum, vero explicabo? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus enim, impedit odit quibusdam sed deserunt non rem quae veritatis architecto optio nobis aliquam consectetur, explicabo dolores eligendi id pariatur? Nesciunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam fuga veniam fugiat amet ab eius voluptates sit et cum pariatur nesciunt mollitia perspiciatis cupiditate id repellendus, recusandae doloribus illum saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eum, et quia pariatur unde deserunt, odio excepturi iure, illo possimus beatae similique corporis? Maiores, cumque! Quisquam delectus aperiam eius fuga.</p>

            </div>
        </div>
    )
}

export default singlePost
