const PokemonInfo = (props) => {
    const { pokemon } = props
    console.log(pokemon)
    return (
        <>
            <div>
                <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />
                <h2>{pokemon.name}</h2>
            </div>
        </>
    )
}
export { PokemonInfo }