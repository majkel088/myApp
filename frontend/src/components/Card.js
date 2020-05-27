import React from 'react';
import typeColors from './services/typeColors';

function Card({ pokemon }) {
    return (
        <tr>
            <td>{pokemon.id}</td>
            <td><img src={pokemon.sprites.front_default} alt="" /> {pokemon.name}</td>
            <td>                {
                pokemon.types.map(type => {
                    return (
                        <div className="Card__type" style={{ color: typeColors[type.type.name] }}>
                            {type.type.name}
                        </div>
                    )
                })
            }</td>
        </tr>
    );
}

export default Card;
