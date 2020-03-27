import React from 'react'

export const Pokemon = ({ pokemon }) => {
    return (
        <div className='pokemon'>
                <div className='pokemon-name'>
                    <p>{pokemon.name}</p>
                </div>
                <div className='pokemon-meta'>
                    <p className='pokemon-hp'>{pokemon.maxHP}</p>
                    <p className='pokemon-cp'>{pokemon.maxCP}</p>
                </div>
                <div className='pokemon-image'>
                    <p><img src={pokemon.image} alt={pokemon.name}/></p>
                </div>
        </div>
    )
}