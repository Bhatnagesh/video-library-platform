import { Link, useNavigate } from "react-router-dom"
import { Formik,useFormik } from "formik"

import * as yup from "yup";

import './form.css'
import axios from "axios";
import { useEffect } from "react";


export function AdminLogin()
{
   const navigate=useNavigate();
    useEffect(()=>{
        if((window.sessionStorage.getItem('adminName')))
    {
        navigate("/admin-dashboard")
    }
    },[navigate])

 const formik=useFormik({
    initialValues:{
              userName:'',
              password:''
    },
    validationSchema:yup.object({userName:yup.string().required("User name required").min(4,"Name to short"),
                                password:yup.string().required("Password is required").min(4,"Password is short")
    }),
    onSubmit:(admin)=>{
        alert("Form submited")
                   
        axios.post('http://localhost:8080/admin/login',admin)
        .then(response=>{
            alert("Admin User name and password matched")
            console.log(response.data)
            window.sessionStorage.setItem('adminName',admin.userName);
            navigate("/admin-dashboard")
            
        }).catch(error=>{
            alert("usernamee and password is wrong")
            console.log(error.data)
        })
        
       
    }
 })

    return(
        <div className=" d-flex justify-content-center align-items-center mt-5 me-5">
           
          
                                   
           <form onSubmit={formik.handleSubmit} className="text-white shade   p-5 alert alert-dismissible">
            <Link to="/"><button className="btn-close btn-close-white" data-bs-dismiss="alert"></button></Link>
            <div className="h3 bi bi-person-square m-2"> Admin Login</div>
            <dl>
                <dt>Enter Admin Name</dt>
                <dd className="mt-1"><input onChange={formik.handleChange} name="userName" type="text" className="form-control custom-input"/></dd>
                <dd className="text-danger fw-bold">{formik.errors.userName}</dd>
                <dt className="mt-3">Enter Password</dt>
                <dd className="mt-1"><input onChange={formik.handleChange} name="password" type="text" className="form-control custom-input" /></dd>
                <dd className="text-danger fw-bold">{formik.errors.password}</dd>
            </dl>
            <div>
                <button type="submit" className="btn btn-danger w-100 mb-3">Login</button>
            </div>
           
           </form>
        </div>
    )
}