import React,{useState,useEffect} from 'react';
import Carousel from 'react-multi-carousel';

function PopularTv() {
    const[More,setMore]=useState(1);
    const[Data,setData]=useState();
    const movieTrailer = require( 'movie-trailer' )
const [DataMovie, setDataMovie] = useState([])

const [title, setTitle] = useState()
movieTrailer(title, {id: true, multi: true} )
.then( response =>setDataMovie(response))

    useEffect(() => {
        const axios=require('axios');
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=300b8d50d7d2846c15b04e2ef8e76195&language=en-US&page='+More).then((Response)=>{
            setData(Response.data.results);
        })
    }, [Data,More]);
    if(!Data) return ""; 

    let add=()=>{
        setMore(More+1);
    }
    let min=()=>{
        setMore(More-1)
    }
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

     
    return (
        <div>
            <Carousel responsive={responsive}>
            {Data.map((item,index)=>{return(<div className="wrapper ml-2 p-3" key={index}>
        <div className="card">
            <img src={"https://image.tmdb.org/t/p/w500"+item.poster_path} alt=''/>
            <div className="descriptions">
                <h1>{item.original_name}</h1>
                <p>{item.overview.slice(0, 120)+'...'}</p>
                <a href={"https://www.youtube.com/watch?v="+[...DataMovie][0]} onMouseOver={()=>setTitle(item.original_name)} target="_blank" rel="noreferrer">
                <button>
                    <i className="fab fa-youtube"></i>
                    Play trailer on YouTube
                </button></a>
            </div>
        </div>
    </div>)})}
    </Carousel>
    <div className='cnter'>
    <div>
    <button className='btn btn-danger nxtbtn mr-2' onClick={min}><i class="fas fa-angle-left"></i></button>
        <button className='btn btn-danger nxtbtn ml-2' onClick={add}><i class="fas fa-angle-right"></i></button>
    </div>
        
    </div>
        </div>
    )
}

export default PopularTv
