import React, {useEffect, useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl,API_KEY} from '../../Constants/Constants'
import YouTube from 'react-youtube'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data.results[0]);
            setMovies(response.data.results)
        }).catch((err)=> { console.log(err);})
    },[props.url]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    function handleMovie(id){
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            console.log(response.data.results);
            if(response.data.results.length!==0){
                setUrlId(response.data.results[1])
            } else {
                alert("no video available")
            }
        })

       
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
            {
                movies.map((obj)=>{
                    return <img onClick={()=>{ handleMovie(obj.id)}} className={props.isSmall ? 'smallPoster':'poster'} alt='poster' src={imageUrl+obj.backdrop_path } />
                })
            }
            </div>
         {urlId && <YouTube videoId={urlId.key} opts={opts} />  }   
        </div>
    )
}

export default RowPost
