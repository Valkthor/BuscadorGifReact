import React, { useState } from 'react'
import PropTypes from 'prop-types'

 function GifExpertApp(props) {

    const categoriesX = ["My Hero Academy", "Samurai X", "Dragon Ball"];

    const [categories, setCategories] = useState(categoriesX)

    const handleAdd = () => {
        //setCategories ( [...categories, "Hunter X"]);
        setCategories( cats => [...cats, "Hunter X"]);
    }
    

    return (
        <div>
            <h2>GifExpertApp</h2>
            < hr />
            <button onClick={ handleAdd } >Agregar +</button>
            <ol>
                {
                    categories.map ( (category , i) => {
                        return <li key={ category }> { category } </li>
                    })
                }
            </ol>
        </div>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp

