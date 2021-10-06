//import React, { useEffect, useState } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ( { category } ) => {

    const { data: images, loading } = useFetchGifs( category);

    //const [images, setimages] = useState([]);
    
    // esto es para que la peticion de ajax se ejecute solo una vez
    // useEffect(() => {
    //     getGifs( category)
    //         .then( imgs => setimages(imgs) ) 

    // }, [ category ])


    return (
        <>
        
        <h3>{ category }</h3>


        <div className="card-grid">
            
            { loading && <p>Loading</p> }

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
