import axios from "axios";
import {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";



export function DeleteVideo()
{
    let param=useParams();

    let [video,setVideo]=useState({id:0,title:null,url:null})
    const navigate=useNavigate();
    
    function LoadVideo()
    {
        axios.get(`http://localhost:8080/video/${param.id}`)
        .then(response=>{
            setVideo(response.data)
        })
    }
    function hadleDeleteClcik()
    {
        axios.delete(`http://localhost:8080/video/${param.id}`)
        .then(response=>{
            console.log(response.data)
            alert("video deleted successfully")
            navigate('/admin-dashboard')
        }).then(error=>{
            console.log(error.data)
        }
            
        )
    }
    useEffect(()=>{
       LoadVideo();
    },[])
   return(
    <div className="container-fluid">
       
       
        <div className="card mt-5 rounded-3 bg-opacity-50  bg-dark text-white w-25 alert   alert-dismissible">
          <div className="card-header   border-danger">
              <h5>Are You sure want to delete</h5>
          </div>
          <div className="card-body ">
              <iframe src={video.url} ></iframe>
              <h5>{video.title}</h5>
          </div>
          <div className="card-footer border-danger ">
             
             <div className="d-flex justify-content-end  mb-2">
                 <Link to="/admin-dashboard"><button className="btn btn-close btn-close-white  "></button></Link>
                <button onClick={hadleDeleteClcik}  className="btn btn-success">Yes</button>
              
             </div>
          </div>
        </div>
        

     
        
    </div>
   )
}