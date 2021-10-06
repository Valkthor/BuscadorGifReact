import React, { useEffect, useState } from 'react'
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ( { category } ) => {

    
    const [images, setimages] = useState([]);
    
    // esto es para que la peticion de ajax se ejecute solo una vez
    useEffect(() => {
        getGifs();

    }, [])



    const getGifs = async () => {

        // consulta get asincrona
        const url = 'https://api.giphy.com/v1/gifs/search?q=kenshin&limit=10&api_key=bjNfOnn51RkUAE4qr8sg8VyI1OvBM7uv';
        const resp = await fetch(url);
        const {data} = await resp.json();

        // se lee la respuesta y retorna objeto con los datos que se necesitan

        const gifs =  data.map( img => {
            return {
                id: img.id,
                title: img.title,
                // si trae el elemento lo carga
                url: img.images?.downsized_medium.url
            }
        });
        setimages(gifs);
    
    }

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
