const getPokemons = async (limit=10)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?${limit}&offset=0`)
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
console.log(getPokemon(1))
export {getPokemons,getPokemon,getData}