import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getUserPokemons } from '../app/reducers/getUserPokemons';
import Login from '../components/Login';
import PokemonCardGrid from '../components/PokemonCardGrid';
import Wrapper from '../Sections/Wrapper';

function MyList() {
  const { userInfo } = useAppSelector(({ app }) => app);
  const { userPokemons } = useAppSelector(({ pokemon }) => pokemon);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserPokemons());
  }, [userInfo, dispatch]);

  useEffect(() => {
    console.log(userPokemons);
  }, [userPokemons]);
  return (
    <div className="list">
      {userInfo ? <PokemonCardGrid pokemons={userPokemons} /> : <Login />}
    </div>
  );
}

export default Wrapper(MyList);
