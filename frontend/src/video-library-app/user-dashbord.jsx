import axios from "axios"
import { useEffect, useState } from "react"

import { Link, useNavigate } from "react-router-dom"
export function UserDashBoard() {
    const [videos, setVideo] = useState([{ id: 0, title: null, url: null, decription: null, likes: 0, views: 0, dislike: 0, comments: [], categoryName: null }])
    const [categories, setCategory] = useState([{ id: 0, categoryName: null }])

    const navigate=useNavigate();

    function loadAllVideo() {
        axios.get('http://localhost:8080/video/all')
            .then(response => {
                console.log(response.data);
                setVideo(response.data)
            })
            .catch(error => {
                console.log(error)
                alert("video not loaded")
            })
    }
    function LoadAllCategories() {
        axios.get('http://localhost:8080/category/all')
            .then(response => {
                response.data.unshift({ id: -1, categoryName: 'All Category' })

                setCategory(response.data)
                alert("category loaded sucessufully")
            }).catch(error => {
                console.log("category not laoded " + error.data)
            })
    }

    useEffect(() => {
        loadAllVideo();
        LoadAllCategories();

    }, [])

    function LoadVideoBasedOnCategory(e) {
        let a = parseInt(e.target.value);
        if (a !== -1) {
            axios.get(`http://localhost:8080/video/category/${a}`)
                .then(response => {
                    console.log(response.data);
                    setVideo(response.data)
                    alert("based on category vidoe laoded")
                }).catch(error => {
                    console.log(error.data);
                    alert("error")
                })
        }
        else {
            loadAllVideo();
        }
    }
    function handleLogOutClick()
    {
        window.sessionStorage.removeItem('uname')
        alert("User Logout Sucessfully");
        navigate('/')
    }

    return (
        <div className="bg-dark bg-opacity-50 text-white m-2">
            <header className="bg-black   text-white d-flex justify-content-evenly align-items-center fw-bold sticky-top " >
                <div className="p-2">
                    <h5>User Dashboard</h5>
                </div>

                <div className="p-2 btn-group ">
                    <span className="bi bi-person fw-bold  btn btn-dark pt-2 active">{(window.sessionStorage.getItem('uname')).toUpperCase()}</span>
                    <button onClick={handleLogOutClick} className="bi bi-box-arrow-right btn btn-danger rounded rounded-start-0">LogOut</button>
                </div>

            </header>

            <div className="mb-3 m-2 w-50 bg">
                <span className="ms-3 fw-bolder"> Filter Video </span>
                < select onChange={LoadVideoBasedOnCategory} className="form-select w-25 bg-dark bg-opacity-75  text-white m-2">
                    {
                        categories.map(category =>
                            <option value={category.id} key={category.id}>{category.categoryName}</option>
                        )
                    }
                </select>
            </div>
            <div className="d-flex gap-2 ">
                {
                    videos.map(video =>
                        <div className="card mb-3 bg-dark text-white bg-opacity-25" key={video.id}>
                            <div className="card-header border-danger">
                                {video.title}
                            </div>
                            <div className="card-body ">

                                <iframe src={video.url} frameborder="0"></iframe>
                                <div className="card-header border-danger">
                                    {video.decription}
                                </div>
                            </div>
                            <div className="body mb-2">
                                <div className="d-flex gap-5 justify-content-start">
                                    <span className="ms-2 bi bi-eye">{video.views}</span>
                                    <span className="bi bi-hand-thumbs-up">{video.likes}</span>
                                    <span className="bi bi-hand-thumbs-down">{video.dislike}</span>
                                </div>
                            </div>

                        </div>
                    )
                }

            </div>
        </div>
    )
}