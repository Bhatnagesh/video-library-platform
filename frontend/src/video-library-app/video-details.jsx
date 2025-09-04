import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";



export function VideoDeatils() {
    const param = useParams();

    const [video, setVideo] = useState({ id: 0, title: '', url: '', decription: null, likes: 0, views: 0, dislike: '', categoryName: null, comments: [{ id: 0, text: null, userName: '' }] })

    function LoadVideo() {
        axios.get(`http://localhost:8080/video/${param.id}`)
            .then(response => {
                console.log(response.data)
                setVideo(response.data)
                alert("video details are fethed")
            }).catch(error => {
                console.log(error.data)
                alert("video details are not fethed")
            })
    }
    useEffect(() => {
        LoadVideo();
    }, [])

    return (
        <div>
            <div className="m-5 row text-white fw-medium bg-dark bg-opacity-50 w-50 p-2 alert alert alert-dismissible ">
                <Link to="/admin-dashboard"><button className="btn btn-close btn-close-white" data-bs-dismiss="alert"></button></Link>
                  <div className="row">
                   <span className="col-2">Video</span>
                   <span className="col-2"><iframe src={video.url} frameborder="0"></iframe></span>
                </div>
                <div className="row">
                    <span className="col-2">Video Id</span>
                    <span className="col-1">{video.id}</span>
                </div>

                <div className="row">
                    <span className="col-2"> title</span>
                    <span className="col-4">{video.title}</span>
                </div>

                 <div className="row">
                    <span className="col-2"> Category</span>
                    <span className="col-3">{video.categoryName}</span>
                </div>

                 <div className="row">
                   <span className="col-2">Description</span>
                   <span className="col-3">{video.decription}</span>
                </div>

                 <div className="row">
                   <span className="col-2">Likes</span>
                   <span className="col-3">{video.likes}</span>
                </div>

                 <div className="row">
                   <span className="col-2">Dislike</span>
                   <span className="col-3">{video.dislike}</span>
                </div>

               
                <div className="row">
                     <div className="col-2">
                        <span>Commenst</span>
                     </div>
                     <div className="col-3">
                       
                        <div className="row">
                           <ol>
                            {
                                video.comments.map(comment=>
                                    <li key={comment.id}>{comment.text}  <span>user {comment.userName}</span></li>
                                )
                            }
                           </ol>
                        </div>

                     </div>
                     
                </div>



            </div>
        </div>
    )
}