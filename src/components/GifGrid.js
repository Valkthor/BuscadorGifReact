import React, { useEffect, useState } from 'react'

export const GifGrid = ( { category } ) => {

    
    const [images, setimages] = useState([]);
    
    // esto es para que la peticion de ajax se ejecute solo una vez
    useEffect(() => {
        getGifs();

    }, [])



    const getGifs = async () => {

        // consulta get asincrona
        const url = 'https://api.giphy.com/v1/gifs/search?q=samurai+xa&limit=10&api_key=bjNfOnn51RkUAE4qr8sg8VyI1OvBM7uv';
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
        <div>
            <h3>{ category }</h3>
            <ol>
            {
                images.map( (img) => {
                    return <li key={ img.id }>{ img.title }</li>
                })
            }
                
            </ol>
        </div>
    )
}
