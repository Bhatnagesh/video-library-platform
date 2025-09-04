import axios from "axios"
import {  useEffect, useState } from "react"
import './form.css'
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik"

import * as yup from "yup";


export function AddVideo()
{
   
   const[categories,setCategory]=useState([{id:0,categoryName:null}])
   
   const navigate=useNavigate();

   function LoadCategories()
   {
    axios.get('http://localhost:8080/category/all')
    .then(response=>{
         console.log(response.data)
         response.data.unshift({ id: -1,categoryName: 'select categor' })
         //response.data.unshift({id:-1,categoryName:'dd'})
         setCategory(response.data)
         alert("category loaded")
    }).catch(error=>{
        console.log(error.data)
        alert("category not loaded")
    })
   }
   
   const formik=useFormik({
    initialValues:{
        title:'',
        url:'',
        decription:'',
        category:''
    },
    validationSchema:yup.object({title:yup.string().required("titile is required"),
                                url:yup.string().required("url is required"),
                                decription:yup.string().required("description is required"),
                                category:yup.string().required("plz select category")          
    }),
    onSubmit:(video)=>{
        alert("video submited")
        axios.post('http://localhost:8080/video/upload',video).then(response=>{
            console.log(response.data);
            alert("video Added")
            navigate('/admin-dashboard')
        }).catch(error=>{
            console.log(error.data)
            alert("something wen wrong")
        })
    }
    
   })

   useEffect(()=>{
    LoadCategories();
   },[])
    
    return(
        <div className="d-flex  mt-5 me-5 w-50">
            <form onSubmit={formik.handleSubmit} className="text-white shade   p-5 alert alert-dismissible">
            <Link to="/admin-dashboard"><button className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button></Link>
            <div className="h3 m-2 text-center mb-4">Uplaod Video</div>
            <dl className="row">
                <dt className="col-3 mt-3">video title</dt>
                <dd className="mt-1 col-9"><input onChange={formik.handleChange} name="title" type="text" className="form-control col-sm-2 custom-input border-0 border-bottom border-primary rounded-0 "/></dd>
                <dd className="text-danger fw-bold">{formik.errors.title}</dd>

                <dt className="col-3 mt-3">video url</dt>
                <dd className="mt-1 col-9"><input onChange={formik.handleChange} name="url" type="text" className="form-control col-sm-2 custom-input border-0 border-bottom border-primary rounded-0"/></dd>
                <dd className="text-danger fw-bold">{formik.errors.url}</dd>

                <dt className="col-3 mt-3">video decription</dt>
                <dd className="mt-1 col-9"><input onChange={formik.handleChange} name="decription" type="text" className="form-control col-sm-2 custom-input border-0 border-bottom border-primary rounded-0 "/></dd>
                <dd className="text-danger fw-bold">{formik.errors.decription}</dd> 

                <dt className="col-3 mt-3">Select Category</dt>
                <dd className="mt-1 col-9">
                    <select name="category" onChange={formik.handleChange} className="form-select mt-1 custom-input  border-primary  ">
                        {
                           categories.map(category=>
                            <option value={category.categoryName}  className="bg-dark">{category.categoryName}</option>
                           )  
                        }
                    </select>
                </dd>
                 <dd className="text-danger fw-bold">{formik.errors.category}</dd>
                
               
            </dl>
            <div>
                <button type="submit"  className="btn btn-danger w-100 mb-3">Add</button>
            </div>
           
           </form>
           
        </div>
    )
}