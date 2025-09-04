import { Link, useNavigate } from "react-router-dom"

import './form.css'
import * as yup from "yup";
import { useFormik } from "formik"
import axios from "axios";
import { useEffect } from "react";

export function UserLogin()
{
    const navigate=useNavigate();
    useEffect(()=>{
             if(window.sessionStorage.getItem('uname'))
             {
                navigate('/user-dashboard')
             }
    },[])



  const formik=useFormik({
    initialValues:{
        email:'',
        password:''
    },
    validationSchema:yup.object({email:yup.string().required("Email is required").email("Enter valid eamil"),
                                 password:yup.string().required("Password is required") 
    }),
    onSubmit:(user)=>{
        alert("from submited");
        axios.post('http://localhost:8080/user/login',user)
        .then(response=>{
            alert(response.data);
            window.sessionStorage.setItem('uname',response.data);
            navigate('/user-dashboard')
        })
        
    }
  })
  

    return(
        <div className=" d-flex justify-content-center align-items-center mt-5 me-5">
           
                                                      
           <form onSubmit={formik.handleSubmit} className="text-white shade   p-5 alert alert-dismissible">
            <Link to="/"><button className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button></Link>
            <div className="h3 bi bi-person-circle m-2"> User Login</div>
            <dl>
                <dt>Enter Email</dt>
                <dd className="mt-1"><input type="text" onChange={formik.handleChange} name="email" className="form-control custom-input"/></dd>
                <dd>{formik.errors.email}</dd>
                <dt className="mt-3">Enter Password</dt>
                <dd className="mt-1"><input type="text" name="password" onChange={formik.handleChange} className="form-control custom-input" /></dd>
                <dd>{formik.errors.password}</dd>
            </dl>
            <div>
                <button type="submit" className="btn btn-danger w-100 mb-3">Login</button>
            </div>
           <span>Don't have an account?</span> <Link to="/user-register">Register</Link>
           </form>
        </div>
    )
}