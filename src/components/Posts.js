import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import PostDetail from './PostDetail'
import Post from './Post'
import { url } from '../api'
import axios from 'axios'
import icon from '../assets/2.png'

const Posts = (props) => {
    const [cars, setCars] = useState([]);
    const [search, setSearch] = useState('')

    
    const filterSearch = (e) => {
         setSearch(e.target.value)
         axios ({
            url: `${url}`,
            method: 'get',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then ((response) => {
            // console.log(response);
            const myCars = response.data
            // console.log("cars:", myCars)
       
         const filter = myCars.filter((c)=>{
             return  c.manuName.toLowerCase().includes((e.target.value).toLowerCase())
         })
         setCars(filter)
         console.log(cars)
         console.log(e.target.value)
        })
    }
    

    
    const token = 'vtbaz'
    const getCars = () => {
        axios ({
            url: `${url}`,
            method: 'get',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then ((response) => {
            // console.log(response);
            const myCars = response.data
            // console.log("cars:", myCars)
            setCars(myCars)
        })
    }

    useEffect(() => getCars(), [])
     

    return (
        <div>
            <div className="search">
            <div className="container">
               <div className="col-12">
                    <div className="search__head">
                        <button className="search__head-btn" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                        <input type="text"  placeholder="Search" value ={search} onChange={filterSearch}/>
                    </div>
               </div>
            </div>
        </div>
            <section className="posts-part">
                    <div className="container">
                            <div className="posts-header">
                                <div className="left-side">
                                    <img src ={icon} className="icon"/>
                                </div>
                                <div className="right-side">
                                    <h2>Avtomobil kataloqu</h2>
                                    <p>Lorem ipsum dolar viverra handerit a denim</p>
                                </div>
                            </div>
                            <div className="bottom">
                                <button>Əlifbaya uyğun</button>
                                <button>Logolara uyğun</button>
                            </div>
                            <div className="row">
                                    {cars.map((car,i) => (
                                        
                                            <div key={car.manuId} className  = "col-lg-2 col-md-4 col-sm-6 cars-post">
                                                <Post i={i}  name = {car.manuName} num={car.manuId} url= {car.url}/>
                                            </div>
                                    ))}
                            </div>
                    </div>
            </section>
        </div>
    )
}

export default Posts
