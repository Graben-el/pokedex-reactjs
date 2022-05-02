import React from "react";



export const Input = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Pesquisar Pokémon' />
            <input type="submit" value='Pesquisar' />
        </form>
    )
}

