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
                <div className='pokemon-attacks'>
                    {pokemon.attacks.special.slice(0, 3).map(attack => (
                        <div>
                            <span key={`${attack.name} ${attack.damage}`}>{attack.name} - </span>
                            <span key={`${attack.damage} ${attack.name}`}>{attack.damage}</span>
                        </div>
                    ))}
                </div>
        </div>
    )
}