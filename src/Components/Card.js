import React from 'react';
import ImgMediaCard from './CardMaterial';

function Card({countryarray}){
	return(
        countryarray.map((country, i)=>{
        	return( <ImgMediaCard countrywise={country}/> )
        })
    )
}

export default Card;