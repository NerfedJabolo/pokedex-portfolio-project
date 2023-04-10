import React, { useEffect } from 'react';
import Wrapper from '../Sections/Wrapper';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getInitialPokemonData } from '../app/reducers/getInitialPokemonData';
import { getPokemonData } from '../app/reducers/getPokemonData';
import PokemonCardGrid from '../components/PokemonCardGrid';
import { debounce } from '../utils/Debounce';

function Search() {
  const dispatch = useAppDispatch();
  const { allPokemon, randomPokemons } = useAppSelector(
    ({ pokemon }) => pokemon
  );
  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon];
      const randomPokemonsID = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonData(randomPokemonsID));
    }
  }, [allPokemon, dispatch]);

  const handleChange = debounce((value: string) => getPokemon(value), 300);

  const getPokemon = async (value: string) => {
    if (value.length) {
      const pokemons = allPokemon?.filter((pokemon) =>
        pokemon.name.includes(value.toLowerCase())
      );

      dispatch(getPokemonData(pokemons!));
    } else {
      const clonedPokemons = [...(allPokemon as [])];
      const randomPokemonsID = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonData(randomPokemonsID));
    }
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          className="pokemon-searchbar"
          placeholder="Search Pokemon"
          onChange={(e) => handleChange(e.target.value)}
        />
        <PokemonCardGrid pokemons={randomPokemons!} />
      </div>
    </>
  );
}

export default Wrapper(Search);
