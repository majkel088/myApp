//import React, { useState, useEffect } from 'react';
//import Card from './components/Card';
//import { getPokemon, getAllPokemon } from '../services/pokeServices';

import React, { Component } from 'react';
//import axios from 'axios';
import { getPokemon } from '../services/pokeServices';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';


export default class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
    }
  }

  async componentDidMount() {
    try {
      
      const pokemon = await getPokemon();
      this.setState({ 
        pokemon
      });
    } catch (err) {
      console.log(err);
    }
  }
  

  render() {
    const { pokemon } = this.state;

    const items = pokemon.map(poke => {
      const id = poke.url.split('/')[6];
      const pokemonImg = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`;
      return (
        <tr key={poke.name}>
          <td>{id}</td>
          <td><Link to={"/pokemon/" + id}>{poke.name} <img src={pokemonImg} alt="Logo" /></Link></td>
        </tr>
      )
    })
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Pokemon</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}



































/*export function Pokedex() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  return (
    <>
      <div>
        {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
          <>
            <div className="btn">
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
            </div>
            <div className="grid-container">
              {pokemonData.map((pokemon, i) => {
                return <div key={i} pokemon={pokemon} > {pokemon.id} {pokemon.name}</div>

              })}
            </div>
            <div className="btn">
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}*/
