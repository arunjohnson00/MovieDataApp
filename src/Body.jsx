import React from 'react';
import './Body.css';
import MovieNow from './MovieNow';
import PopularTv from './PopularTv';
import 'react-multi-carousel/lib/styles.css';
import TopRated from './TopRated';
import NowPlaying from './NowPlaying';
import LatestTv from './LatestTv'

function Body(props) {
    


    return (
        <div>
            <div className='container padingtop'>
                <h3>NOW PLAYING MOVIE</h3>
                <NowPlaying/>
            </div>  
            <div className='container padingtop'>
                <h3>TRENDING MOVIES</h3>
                <MovieNow/>
            </div>  

    <div className='container padingtop'>
                <h3>TOP RATED MOVIES</h3>
                <TopRated/>
            </div>  

            <div className='container padingtop'>
                <h3>LATEST TV SHOWS</h3>
                <LatestTv/>
            </div>  
 

            <div className='container padingtop'>
                <h3>POPULAR TV SHOWS</h3>
                <PopularTv/>
    </div> 
        </div>
    )
}

export default Body