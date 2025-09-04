import { Link, useNavigate } from "react-router-dom"

import './form.css'
import { useFormik } from "formik"
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";



export function UserRegister()
{

    const navigate=useNavigate();
    const[checkingEmail,setCheckingEmail]=useState(false);

   async function validateUser(user) {
  const errors = {};

  // ✅ Skip async validation if email is missing or already invalid
  if (!user.email) {
    return errors; // Let Yup handle the "required" or "invalid email"
  }

  try {
    setCheckingEmail(true);
    const response = await axios.get(
      `http://localhost:8080/user/email/${user.email}`
    );

    if (response.data.exists) {
      errors.email = "Email is already registered";
    }
  } catch (error) {
    console.error("Error checking email:", error);
  } finally {
    setCheckingEmail(false);
  }

  return errors;
}


    const formik=useFormik({
        initialValues:{
          userName:'',
          email:'',
          password:''
        },
        validate:validateUser,
        validationSchema:yup.object({userName:yup.string().required('user name is required'),
                                     email:yup.string().email("Invalid email").required('email is required'),
                                     password:yup.string().required('password is required')
        }),
        onSubmit:(user)=>{
            alert("from is sumited"),
            axios.post('http://localhost:8080/user/register',user).then(
                response=>{
                    alert("user register "+response.data);
                    navigate('/user-login');
                }
            ).catch(error=>{
                console.log(error.data)
                alert("user not regitserd")
            })
           
        }
    })

    return(
        <div className=" d-flex justify-content-center align-items-center mt-5 me-5">
           
                                                      
           <form onSubmit={formik.handleSubmit} className="text-white shade   p-5 alert alert-dismissible">
            <Link to="/"><button className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button></Link>
            <div className="h3 bi bi-person-circle m-2"> User Registartion</div>
            <dl>
                <dt>Enter user Name</dt>
                <dd className="mt-1"><input type="text" onChange={formik.handleChange} name="userName" className="form-control custom-input"/></dd>
                <dd>{formik.errors.userName}</dd>

                <dt>Enter Email</dt>
                <dd className="mt-1"><input type="text" onChange={formik.handleChange} name="email" className="form-control custom-input"/></dd>
                <dd> {checkingEmail ? "Checking email..." : formik.errors.email}</dd>

                <dt className="mt-3">Enter Password</dt>
                <dd className="mt-1"><input type="password" onChange={formik.handleChange} name="password" className="form-control custom-input" /></dd>
                <dd>{formik.errors.password}</dd>

            </dl>
            <div>
                <button type="submit" className="btn btn-danger w-100 mb-3">Register</button>
            </div>
            <span>Already have an account? </span><Link to="/user-login">Login</Link>
           </form>
        </div>
    )
}