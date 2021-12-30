import React,{useState,useEffect} from 'react'

function Body1(props) {
    const[Search,setSerch]=useState();
    const movieTrailer = require( 'movie-trailer' )
const [DataMovie, setDataMovie] = useState([])
const[More,setMore]=useState(1);
const [title, setTitle] = useState()
movieTrailer(title, {id: true, multi: true} )
.then( response =>setDataMovie(response))
    
    useEffect(() => {
        const axios=require('axios');
        axios.get('https://api.themoviedb.org/3/search/'+props.Filter+'?api_key=300b8d50d7d2846c15b04e2ef8e76195&query='+props.myInput+'&page='+More).then((Response)=>{
            setSerch(Response.data.results);
        })
    }, [Search,More,props.Filter,props.myInput]);
    if(!Search) return "";
    let add=()=>{
        setMore(More+1);
    }
    let min=()=>{
        setMore(More===0?0:More-1);
     
    }
    
   
    
    return (
        <div className='container padingtop'><h6>Result for Search</h6>
        <h3>{props.myInput}</h3>
        <div className='row jstfy myDetails'>
        {Search.map((Data)=>{
                return(<div className="wrapper col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" >
                        <div  >
                <div className="card">
                    
                <img src={"https://image.tmdb.org/t/p/w500"+Data.poster_path} alt=''/>
                    <div className="descriptions">
                        <h1>{props.Filter==='movie'?Data.original_title:Data.original_name}</h1>
                        <p>{Data.overview.slice(0, 120)+'...'}</p>
                        <a href={"https://www.youtube.com/watch?v="+[...DataMovie][0]} onMouseOver={()=>setTitle(Data.title)} target="_blank" rel="noreferrer">
                <button>
                    <i className="fab fa-youtube"></i>
                    Play trailer on YouTube
                </button></a>
                    </div>
                </div>
                </div>
                </div>
                )
            })}
        
        </div>
        <div className='cnter'>
    <div>
    <button className='btn btn-danger nxtbtn mr-2' onClick={min}><i class="fas fa-angle-left"></i></button>
        <button className='btn btn-danger nxtbtn ml-2' onClick={add}><i class="fas fa-angle-right"></i></button>
    </div>
        
    </div>
        </div>
    )
}

export default Body1
