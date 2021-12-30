import React,{useState} from 'react';
import Nav from './Nav';
import MediaQuery from 'react-responsive'
import Footer from './Footer';
import Body from './Body';
import SearchResult from './SearchResult';
import Search from './Search';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import MovieOptin from './MovieOptin';
import TV from './TV';

function App() {

  const[Show,setShow]=useState(true);
  const[Myshow,setMyshow]=useState(false);
  const[myInput,setInput]=useState(true);
  const[Filter,setFilter]=useState();

  let btn=()=>{
       setInput(document.querySelector(".mySrch").value.toLowerCase());
       setFilter(document.querySelector("input[type=radio]:checked").value)
       setShow(false)
       setMyshow(true)
    }

    let myBtn=()=>{
      setMyshow(false)
      setShow(false)
    }

    let mBtn=()=>{
      setShow(true)
    }

  return (
    <div>
      <Nav btn={btn} myBtn={myBtn} mBtn={mBtn}/>
      <MediaQuery maxWidth={990}>
      <div className="container">
      <Router>
       <div className="pstion" style={{ paddingTop: "20px"}}>
     <center> <Link className="mr-4 txtdcr" to='/react/retro/movie' onClick={myBtn} style={{ textDecoration: 'none',fontWeight:"bold"}}>MOVIE</Link>
       <Link className="ml-2 txtdcr" to='/react/retro/tv' onClick={myBtn} style={{ textDecoration: 'none',fontWeight:"bold"}}>TV</Link>
       </center>  </div>
       <Search btn={btn} />
       {Show?<Body/>:null}
       {Myshow&&!Show?<SearchResult myInput={myInput} Filter={Filter}/>:null}
      <Routes>
      {Show?null:<Route path='/react/retro/tv' element={<TV btn={btn}/>}></Route>}
      {Show?null: <Route path='/react/retro/movie' element={<MovieOptin/>}></Route>}
          </Routes>
      </Router>
      
    
    

      </div>
      </MediaQuery>
      <MediaQuery minWidth={990}>
      {Show?<Body/>:null}
       {Myshow&&!Show?<SearchResult myInput={myInput} Filter={Filter}/>:null}
       </MediaQuery>
      <Footer/>
  </div>
  
  )
}

export default App

