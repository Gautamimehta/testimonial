import React,{useState,useEffect} from 'react'
import axios from'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';


function FetchData() {
    
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://testimonialapi.toolcarton.com/api')
        .then(res=>{
             console.log(res);
             setData(res.data)
        })
        .catch(err=>{
            console.log(err);
        })

    })
    
        const settings = {
          dots: true,
          fade:true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          arrows:true,
          slidesToScroll: 1,
          className:"sildes"
          
        }
        
    return (
        <div className="cardItem"  >
        
            <Slider {...settings}>
                {data.map((photo)=>{
                    return(
                        <div className="card"> 
                        <img className="photo" width="14%" src={photo.avatar}/>
                        
                        <p className="text"> 
                        {photo.message}<br></br> <br></br>
                        “ {photo.lorem} ”
                        </p>
                        <p className="rating">Ratings: {photo.rating}/10<br></br> </p>
                        <p className="name">{photo.name}<br></br> </p>
                        <p className="designation">{photo.designation} <br></br></p>
                        <p className="location">{photo.location}  </p>
                        
                        <div className="sound"> 
                           <audio controls autoplay unmuted>
                           <source src={photo.audio} type="audio/mpeg"/>
                        </audio>
                        </div>
                        </div>
                    )
                })}
                {/* data.map(data=><li key={data.id}>{data.name}</li>) */}
            </Slider>
                
        </div>
    )
                            
}

export default FetchData
