import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export function AdminDashboard()
{

   const[videos,setVideo]=useState([{id:null,title:null,url:null,decription:null,likes:null,views:null,dislike:null,categoryName:null,comments:[{id:null,text:null,userName:null}]}])
   const navigate=useNavigate();

   function findAllVideo()
    {
            axios.get("http://localhost:8080/video/all")
            .then(response=>setVideo(response.data))
            .catch(error=>{
                alert("video Not Found "+error)
            })
    }

    function handleLogoutClick()
    {
        window.sessionStorage.removeItem('adminName')
        navigate("/")

    }

    useEffect(()=>{
        findAllVideo()
    },[])

    return(
        <div className="w-100 m-0 bg-primary ">
            <header className="bg-black  text-white d-flex justify-content-evenly align-items-center fw-bold sticky-top " >
                <div className="p-2">
                    <h5>Admin Dashboadr</h5>
                </div>
                <div className="p-2">
                    <Link to="/add-video"><span className="fw-bold btn btn-dark text-primary bi bi-folder-plus"> Add Video </span></Link>
                </div>
                 <div className="p-2">
                    <span>All Videos</span>
                </div>
               
               
               <div className="p-2">
                   
               </div>
                
                <div className="p-2 btn-group ">
                     <span className="bi bi-person fw-bold  btn btn-dark pt-2 active">{(window.sessionStorage.getItem('adminName')).toUpperCase()}</span>
                     <button onClick={handleLogoutClick} className="bi bi-box-arrow-right btn btn-danger rounded rounded-start-0">LogOut</button>
                </div>
                
            </header>
            
            <table className="table table-bordered    table-striped table-dark  table-hover ">
                <thead>
                    <tr className="table-secondary ">
                        <th className="text-center align-middle">Title</th>
                        <th className="text-center"><span className="me-5">Video</span></th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       videos.map(video=>
                        <tr key={video.id}>
                            <td className="text-center align-middle">{video.title}</td>
                            <td className="text-center align-middle"><iframe src={video.url} className="ms-5"></iframe>
                             <Link to={`/video-details/${video.id}`}><span className="bi bi-info-circle btn btn-outline-secondary text-info border border-0 rounded rounded-3">Details</span></Link>
                            </td>
                            <td>
                            
                                <Link to={`/edit-video/${video.id}`}><span className="bi bi-pen-fill btn me-1 btn-warning">Edit</span></Link>
                                <Link to={`/delete-video/${video.id}`}><span className="bi bi-trash-fill  btn btn-dark">Delete</span></Link>
                             
                            </td>
                        </tr>
                       )
                    }

                </tbody>
            </table>
           
        </div>
    )
}