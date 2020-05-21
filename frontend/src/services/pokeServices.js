import axios from 'axios';

export const getPokemon = async () => {
    const response = await axios({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/'
    })

    return response.data.results;
}