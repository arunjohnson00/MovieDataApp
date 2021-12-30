import React,{useState,useEffect} from 'react'

function Action() {
    const[Data,setData]=useState();
    const movieTrailer = require( 'movie-trailer' )
const [DataMovie, setDataMovie] = useState([])
const[More,setMore]=useState(1);
const [title, setTitle] = useState()
movieTrailer(title, {id: true, multi: true} )
.then( response =>setDataMovie(response))
    
    useEffect(() => {
        const axios=require('axios');
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=300b8d50d7d2846c15b04e2ef8e76195&page='+More).then((Response)=>{
            setData(Response.data.results);
        })
        
    }, [Data,More]);
    if(!Data) return "";   
    let add=()=>{
        setMore(More+1);
    }
    let min=()=>{
        setMore(More-1);
    } 
    return (
        <div>
            <div className='container pt-2 pb-2'>
                <h3 className='headtitle'>Movies</h3>
            <div className='row jstfy myDetails'>
            {Data.map((item,index)=>{return(
            <div className="wrapper col-xl-3 col-lg-3 col-md-5 col-sm-5 col-12  mb-3 " key={index}>
                 <div >
        <div className="card">
            <img src={"https://image.tmdb.org/t/p/w500"+item.poster_path} alt=''/>
            <div className="descriptions">
                <h1>{item.title}</h1>
                <p>{item.overview.slice(0, 120)+'...'}</p>
                <a href={"https://www.youtube.com/watch?v="+[...DataMovie][0]} onMouseOver={()=>setTitle(item.title)} target="_blank" rel="noreferrer">
                <button>
                    <i className="fab fa-youtube"></i>
                    Play trailer on YouTube
                </button></a>
            </div>
        </div>
        </div>
    </div>)})}
            
            </div>
            <div className='cnter'>
    <div>
    <button className='btn btn-danger nxtbtn mr-2' onClick={min}><i class="fas fa-angle-left"></i></button>
        <button className='btn btn-danger nxtbtn ml-2' onClick={add}><i class="fas fa-angle-right"></i></button>
    </div>
        
    </div>
            </div>
        </div>
    )
}

export default Action
