import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ( { category } ) => {

    
    const [images, setimages] = useState([]);
    
    // esto es para que la peticion de ajax se ejecute solo una vez
    useEffect(() => {
        getGifs( category)
            .then( imgs => setimages(imgs) ) 

    }, [ category ])


    return (
        <>
        
        <h3>{ category }</h3>
        <div className="card-grid">
            

            {
                images.map( (img) => (
                    <GiftGridItem 
                        key= { img.id }   
                        {...img}
                         
                    />
                ))
            }
                

        </div>
        </>
    )
}
