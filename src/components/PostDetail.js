import React, {useEffect,useState} from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { url } from '../api'
import axios from 'axios'
import Post from './Post'
import Posts from './Posts'

const PostDetail = (props) => {

    const {id} = useParams()
    console.log(id)
     
    const [models, setModels] = useState([])
    const [searchModel, setSearchModel] = useState('')
    
    let history = useHistory();

    function handleClick() {
        history.push("/posts");
      }

      const filterSearch = (e) => {
        setSearchModel(e.target.value)
        axios ({
           url: `http://vtbfront.mocklab.io/api/avto/${id}`,
           method: 'get',
           headers: {
               'Authorization': `Bearer ${token}`,
               'Content-Type': 'application/json'
           }
       })
       .then ((response) => {
           // console.log(response);
           const myModels = response.data
           // console.log("cars:", myCars)
      
        const filter = myModels.filter((c)=>{
            return  c.ModelName.toLowerCase().includes((e.target.value).toLowerCase())
        })
        setModels(filter)
        console.log(models)
        console.log(e.target.value)
       })
   }

   

    const token = 'vtbaz'
    const fetchModels = () => {
        axios ({
            url: `http://vtbfront.mocklab.io/api/avto/${id}`,
            method: 'get',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then ((response) => {
            console.log(response);
            const myModels = response.data
            console.log("models:", myModels)
            setModels(myModels)
        })
    }

    useEffect(() => fetchModels(), [])

    console.log(models)
     
    const modelName= models.map(model=>(
        model.manuName
    ))[0]

    console.log(modelName)

    const modelImg= models.map(model=>(
        model.url
    ))[0]

    console.log(modelImg)
    

    return (
       <div>
        <div className="search">
            <div className="container">
               <div className="col-12">
                    <div className="search__head">
                        <button className="search__head-btn" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                        <input type="text"  placeholder="Search" value ={searchModel} onChange={filterSearch}/>
                    </div>
               </div>
            </div>
        </div>
        <section className="models-car">
            <div className="container">
                <div className="top-info">
                    <div className="left-info">
                            <div className="model-car">
                                <img src={modelImg}/>
                                <h5 className="model-name">{modelName}</h5>
                            </div>
                            <div className="icon-back">
                                <button className="icon-btn" onClick={handleClick}>
                                    <i class="fas fa-long-arrow-alt-left"></i>
                                    Geri qayit
                                </button>
                            </div>
                    </div>
                    <div className="right-info">
                        <div className="common">
                            <h2>Ümumi məlumat</h2>
                            <p>Məhsul sayi: <span>200 000</span></p>
                            <p>Bu ay yuklenen mehsul: <span>12 500</span></p>
                        </div>
                        <div className="count">
                            <p>Model sayi: <span>{models.length}</span></p>
                            <p>Mehsul kateqoriyasi: <span>350</span></p>
                        </div>
                       <div className="model-link">
                        <Link>
                            Hamisina bax
                        </Link>
                       </div>
                    </div>
                </div>
                <div >
                    <div className="row">
                        {models.map(model=>(
                                <Link to="/" key={model.manuId} className = "models-post">
                                    <div className="model-title">
                                        <h2>{model.ModelName}</h2>
                                        <i class="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                    <div className="number-product">
                                        <p>Məhsul sayı : 22 000</p>
                                    </div>
                                </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
       </div>
    )
}

export default PostDetail;


