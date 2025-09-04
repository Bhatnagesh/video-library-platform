
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { UserRegister } from './user-register'
import { UserLogin } from './user-login'
import { AdminLogin } from './admin-login'
import { AdminDashboard } from './admin-dashboard'
import { DeleteVideo } from './delete-video'
import { AddVideo } from './add-video'
import { EditVideo } from './edit-video'
import { VideoDeatils } from './video-details'
import { UserDashBoard } from './user-dashbord'

export function Index() {
    return (
        <div className='banner-bg'>
            <BrowserRouter>
                <header className='   text-white d-flex justify-content-center align-items-center bg-black bg-opacity-25 '>
                    <Link to="/" className='text-decoration-none text-white'><span className=' fs-3 ms-2'>Home</span></Link>
                    
                    <div className="p-2 flex-grow-1 text-center ms-5">
                        <h4 className='bg-dark d-inline-block fs-4 p-2 rounded rounded-3 ms-5 font-monospace '> Video Libray [Java & ReactJs] </h4>
                    </div>


                    <div className="p-2  fs-5 me-5">
                        <Link to="/user-login"><span className='fw-bold btn btn-outline-danger text-white me-2'>User</span></Link>
                        <Link to="/admin-login"><span className='fw-bold btn btn-outline-danger text-white me-2'>Admin</span></Link>
                    </div>
                </header>
                
                <Routes>
                    <Route path="/user-register" element={<UserRegister />} />
                    <Route path='/user-login' element={<UserLogin />} />
                    <Route path='/admin-login' element={<AdminLogin />} />
                    <Route path='/admin-dashboard' element={<AdminDashboard />} />
                    <Route path='/delete-video/:id' element={<DeleteVideo />} />
                    <Route path='/add-video' element={<AddVideo />} />
                    <Route path='/edit-video/:id' element={<EditVideo />} />
                    <Route path='/video-details/:id' element={<VideoDeatils />}/>
                    <Route path='/user-dashboard' element={<UserDashBoard /> } />
                </Routes>

            </BrowserRouter>
           
        </div>
    )
}