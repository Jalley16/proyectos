'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './fondo.css';

export default function Page() {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=50'
        );

        const detailedPokemons = await Promise.all(
          response.data.results.map(async (pokemon: any) => {
            const details = await axios.get(pokemon.url);
            const species = await axios.get(details.data.species.url);

            return {
              id: details.data.id,
              name: details.data.name,
              species: species.data.name,
              isBaby: species.data.is_baby,
              types: details.data.types.map(
                (t: any) => t.type.name
              ),
            };
          })
        );

        setPokemons(detailedPokemons);
      } catch (error) {
        console.error(error);
      }
    };

    getPokemons();
  }, []);

  return (
    <div>
      <h1>Lista de Pokémon</h1>

      {pokemons.map((pokemon) => (
        <div className="card" key={pokemon.id}>
          <div className="info">
            <h2>{pokemon.name}</h2>

            <p>
              <strong>ID:</strong> {pokemon.id}
            </p>

            <p>
              <strong>Especie:</strong> {pokemon.species}
            </p>

            <p>
              <strong>¿Es bebé?:</strong>{' '}
              {pokemon.isBaby ? 'Sí ' : 'No'}
            </p>

            <p>
              <strong>Tipo(s):</strong>{' '}
              {pokemon.types.join(', ')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
