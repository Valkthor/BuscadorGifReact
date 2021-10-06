import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

 function GifExpertApp(props) {

    const categoriesX = [ "Rurouni"];

    const [categories, setCategories] = useState(categoriesX)

    // const handleAdd = () => {
    //     //setCategories ( [...categories, "Hunter X"]);
    //     setCategories( cats => [...cats, "Hunter X"]);
    // }
    

    return (
        <div>
            <h2>GifExpertApp</h2>
            < AddCategory setCategories= { setCategories } />
            < hr />
            {/* <button onClick={ handleAdd } >Agregar +</button> */}
            <ol>
                {
                    categories.map ( (category , i) => {
                        return <li key={ category }> { category } </li>
                    })
                }

                {
                    categories.map ( (category ) => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                            />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp

