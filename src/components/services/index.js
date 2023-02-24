const getPokemons = async (limit=10)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`)
     return await response.json()
}

const getPokemon = async (id)=>{
    const response =await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await response.json()
}
const getData = async (url) => {
    
      const response = await fetch(url)                 
      return await response.json() 
}
const getType = async (id) =>{
    const response = await fetch(`https://pokeapi.co/api/v2/type/`)
    return await response.json()
}
const getAbilities =async (id)=>{
    const response =await fetch(`https://pokeapi.co/api/v2/`)
    return await response.json()
}
 const getColor =async (id)=>{
    const response =await fetch(`https://pokeapi.co/api/v2/pokemon-color/${id}/`)
    return await response.json()
 }

export {getPokemons,getPokemon,getData,getType,getAbilities,getColor}