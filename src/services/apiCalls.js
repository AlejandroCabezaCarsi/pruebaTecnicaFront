import axios from "axios";

export const pokemonList = async() => { 

    return await axios.get('https://pokeapi.co/api/v2/pokemon')

}
