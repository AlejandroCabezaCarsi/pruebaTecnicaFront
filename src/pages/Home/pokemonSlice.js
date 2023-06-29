import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice ({
    
    name: "Pokemon",

    initialState: { 
        datos: {
            objetoAPI: ""
        },
    

        pokemonData: { 
        name: ""
        },
    },

    reducers:{
        bringPokemons: (state,action) => { 
            let { payload } = action;
            state.credentials = { 
                objetoAPI: payload.objetoAPI
            };

            state.dataUser = { 
                name:payload.name
            }
        }
    }
})

export const pokemonData = (state) => state.pokemonData
export default pokemonSlice.reducer
export const {bringPokemons} = pokemonSlice.actions