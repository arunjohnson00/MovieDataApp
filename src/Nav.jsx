import React,{useState,useEffect} from 'react'
import './Nav.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import MovieOptin from './MovieOptin';
import TV from './TV';
import Banner from './Banner';
import Search from './Search';
import Login from './Login';
import Signin from './Signin';
import MediaQuery from 'react-responsive'

function Nav(props) {

  const[Data,setData]=useState();
    const[Visble,setVisble]=useState(true)
    useEffect(() => {
        const axios=require('axios');
        axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=300b8d50d7d2846c15b04e2ef8e76195').then((Response)=>{
            setData(Response.data.results);
        })
    }, [Data]);
    if(!Data) return "";
    //console.log(Data)
    let onBtn=()=>{
      setVisble(false);
    }
    let offBtn=()=>{
      setVisble(true);
    }
    return (
      <Router>
        <div className='container myBackgrd pb-2'>

        <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1" to={'/react/retro/'} onClick={props.mBtn}>
    <img src='logo.png' alt='' style={{width:"100%"}}/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse js" id="navbarNavDropdown">
    <ul className="navbar-nav" onClick={offBtn}>
      
    <MediaQuery minWidth={990}>  <li className="nav-item pstion">
      <Link className="mr-4 txtdcr" to='/react/retro/movie' onClick={props.myBtn} style={{ textDecoration: 'none',fontWeight:"bold"}}>MOVIE</Link>
          <Link className="ml-2 txtdcr" to='/react/retro/tv' onClick={props.myBtn} style={{ textDecoration: 'none',fontWeight:"bold"}}>TV</Link>
      </li></MediaQuery>
    </ul>
    

    <ul className="navbar-nav">
    <li className="nav-item">
    <MediaQuery minWidth={990}>  <Search btn={props.btn} onBtn={onBtn}/></MediaQuery>
      </li>
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item align">
      <MediaQuery minWidth={990}> 
      <div >
        <center>
      <button className='btn btn-danger btn-round mr-3' data-toggle="modal" data-target="#ab">SignIn</button>
      <button className='btn btn-danger' data-toggle="modal" data-target="#exampleModal">SignUp</button>
      </center>
      </div>

      </MediaQuery>

      <MediaQuery maxWidth={990}>
      <div style={{ paddingTop: "20px"}}>
        <center>
      <Link to='/react/retro/signin'><button className='btn btn-danger btn-round mr-3' data-toggle="modal" data-target="#ab">SignIn</button></Link>
      <Link to='/react/retro/login'><button className='btn btn-danger' data-toggle="modal" data-target="#exampleModal">SignUp</button></Link>
      </center>
      </div>


      </MediaQuery>
    

      </li>
    </ul>
  </div>
</nav>

        </div>
        <Routes>
        {Visble?<Route path='/react/retro/tv' element={<TV/>}></Route>:null}
          {Visble?<Route path='/react/retro/movie' element={<MovieOptin/>}></Route>:null}
          <Route path='/react/retro/' element={<Banner {...Data}/>}></Route>
        </Routes>
        <Login/>
          <Signin/>
        
        </Router>
    )
}

export default Nav


