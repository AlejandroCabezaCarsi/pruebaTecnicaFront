import React, { useEffect, useState } from "react";
import './Home.css'
import { Card } from "../../common/Card/Card";
import { pokemonList} from "../../services/apiCalls";
import axios from "axios";

export const Home = () => {


const [result, setResult] = useState([]);
const [poke, setPoke] = useState([]);
const [load, setLoad] = useState('true');
const arr = [];

useEffect(() => {

    pokemonList()

      .then((response) => {
          
        setResult(

          response.data.results.map((item) => {

            return axios.get(item.url)

            .then((res) => {

              arr.push(res.data);

              setPoke(arr);
            });
          })
        );
      })

      .catch((error) => {

        console.error(error);

      })

      .finally(() => {

        setLoad(false);

      });
  }, []);


  return (
    <div className="homeDesign">
      
        {load ? (
          <p>Loading...</p>
        ) : (
          poke.map((pokemon, i) => (
            <div id={pokemon.id} key={pokemon.id}>
              <Card
                name={pokemon.name}
                type={pokemon.types[0].type.name}
                image={pokemon.sprites.front_default}
              />
            </div>
          ))
        )}
      </div>
    
  );
};

