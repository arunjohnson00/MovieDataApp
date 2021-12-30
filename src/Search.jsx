import React,{useState} from 'react'

function Serch(props) {

  const[Active,setActive]=useState(true);
  const[Inactive,setInactive]=useState(false);
  const[Placehold,setPlacehold]=useState('Search movie title');
  

  const[Name,setName]=useState();
  let Movie=(e)=>{
    setActive(true);
    setInactive(false);
    setName('Mov');
    setPlacehold('Search movie title');
  }
  let Series=()=>{
    setActive(false);
    setInactive(true);
    setName('Tv');
    setPlacehold('Search series title');
  }
  //if(!Data) return "";   
    

    return (
        <div>
            <div className='col-xl-12 serch'>
  <form className="form-inline my-2 ">
  <ul className="navbar-nav " >
      <li className="nav-item dropdown">
          
        <button id='opt' className=" dropdown-toggle btn btn-danger pl-2 pr-2 ht" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {Name?Name:'Filter'}
        </button>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <div className='option'>
        <input type="radio" className='in' id="in" name="fav_language" value="movie" checked={Active} onClick={Movie}/><label htmlFor="bus" >Movie</label>
        </div >
        <div className='option'>
        <input type="radio" className='in' id="on" name="fav_language" value="tv" checked={Inactive} onClick={Series}/><label htmlFor="bus" >Tv</label>
        </div>
        </div>
      </li>
      </ul>
      <input className="form-control col-8 mySrch abs"  type="search" placeholder={Placehold} aria-label="Search" style={{ paddingLeft:"10px"}} />
      <button className="btn btn-danger  my-2 my-sm-0 myBtn" type="button" onClick={props.btn} onMouseUp={props.onBtn}><i className="fas fa-search"></i></button>
      
    </form>
    
  </div>

  
        </div>
    )
}

export default Serch
