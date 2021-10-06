import React, { useState } from 'react'
import  PropTypes  from "prop-types";


// se obtiene la funcion de set que esta en gifExpertApp
export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
        if (inputValue.trim().length > 2) {
            // se agrega a las categorias
            setCategories( cats => [...cats, inputValue]);
            setInputValue("");
        }
        
    }
    
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input  type="text" placeholder="Ingrese categoria"

                    value = { inputValue }
                    onChange={ handleInputChange }  
                />
            </form>

        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
