import { Route, Routes } from "react-router-dom";
import { PokemonList } from "../components/pokemonList";
import { Pokemon } from "./pokemon";

export const AppRoutes = () => (
    <Routes>
        <Route exact path='/pokedex-reactjs' element={<PokemonList />} />
        <Route exact path='/pokemon/:name' element={<Pokemon />} />
        <Route exact path='/pokedex-reactjs' element={<home />} />
    </Routes>
)

