import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true

    });
    
        // esto es para que la peticion de ajax se ejecute solo una vez
        useEffect(() => {
            getGifs( category)
                .then( imgs => {
                    setstate({
                        data: imgs, 
                        loading: false
                    })
                } ) 
    
        }, [ category ])


    return state;
}
