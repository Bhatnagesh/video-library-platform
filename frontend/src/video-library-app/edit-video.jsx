import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";



export function EditVideo() {


    const param=useParams();
    const navigate=useNavigate();

    const [video, setVideo] = useState({
        id: 0, title: null, url: null, decription: null, likes: 0, views: 0, dislike: 0, categoryName: null
    });

    const[categoryies,setCategory]=useState([{
        id:0,
        categoryName:null
    }]
    )

    const formik=useFormik({
        initialValues:{
            id:video.id,
            title:video.title,
            url:video.url,
            decription:video.decription,
            category:video.categoryName
        },
        onSubmit:(video)=>{
                   axios.put(`http://localhost:8080/video/edit/${param.id}`,video)
                  .then(response=>{
                    console.log(response.data);
                    alert("video updated "+param.id)
                    navigate('/admin-dashboard')

                  })
        },
        enableReinitialize:true,
    })

    function LoadCategory()
    {
        axios.get('http://localhost:8080/category/all')
        .then(response=>{
            setCategory(response.data)
            console.log(response.data)
            alert("category loaded")
    })
    }

   function LoadVideo()
   {
     axios.get(`http://localhost:8080/video/${param.id}`) 
     .then(response=>{
        setVideo(response.data);
        alert("data loaded")
     }).catch(error=>{
        alert("data unlaoded "+error.data)
     })
   }
   useEffect(()=>{
       LoadVideo();  
       LoadCategory();
   },[])

    return (
        <div className="d-flex  mt-5 me-5 w-50">
            <form onSubmit={formik.handleSubmit}  className="text-white shade   p-5 alert alert-dismissible">
            <Link to="/admin-dashboard"><button className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button></Link>
            <div className="h3 m-2 text-center mb-4">Edi Video</div>
            <dl className="row">

                <dt className="col-3 mt-3">video Id</dt>
                <dd className="mt-1 col-9"><input name="title"  onChange={formik.handleChange} type="text" value={formik.values.id} className="form-control col-sm-2 custom-input border-0 border-bottom border-primary rounded-0 bg-black " disabled  /></dd>

                <dt className="col-3 mt-3">video title</dt>
                <dd className="mt-1 col-9"><input name="title"  onChange={formik.handleChange} type="text" value={formik.values.title} className="form-control col-sm-2 custom-input border-0 border-bottom border-primary rounded-0 "/></dd>
               

                <dt className="col-3 mt-3">video url</dt>
                <dd className="mt-1 col-9"><input name="url"  onChange={formik.handleChange} type="text" value={formik.values.url} className="form-control col-sm-2 custom-input border-0 border-bottom border-primary rounded-0"/></dd>
               

                <dt className="col-3 mt-3">video decription</dt>
                <dd className="mt-1 col-9"><input  name="decription"  onChange={formik.handleChange} value={formik.values.decription}  className="form-control col-sm-2 custom-input border-0 border-bottom border-primary rounded-0 "/></dd>

                <dt className="col-3 mt-3">Select Category</dt>
                <dd className="mt-1 col-9"> 
                    <select name="category" value={formik.values.category} onChange={formik.handleChange} className="form-select mt-1 custom-input border-primary">
                    {
                        categoryies.map(category=><option className="bg-dark">{category.categoryName}</option>)
                    }
                    </select>
                </dd>
               

                
                
               
            </dl>
            <div>
                <button type="submit"  className="btn btn-danger w-100 mb-3">Save</button>
            </div>
           
           </form>
           
        </div>
    )
}