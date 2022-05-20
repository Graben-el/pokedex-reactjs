import { baseUrl } from "../variables/variables";

export async function getPokemonList(limit, offset) {
    const response = await fetch(`${baseUrl}pokemon?limit=${limit}&offset=${offset}`)
    const data = await response.json()
    const names = data.results.map(result => result.name)
    return names
}

export async function getPokemon(pokemon) {
    const response = await fetch(`${baseUrl}pokemon/${pokemon}`)
    const data = await response.json()
    return data
}

export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
