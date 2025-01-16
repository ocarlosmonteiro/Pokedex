function convertPokemonToLi(Pokemon) 
{
    return `
        <li class="pokemon">
            <span class="number">#${Pokemon.number}</span>
            <span class="name">${Pokemon.name}</span>
                
            <div class="detail">
                <ol class="types">
                    ${Pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>
                <img src="${Pokemon.photo}" alt=${Pokemon.name}">
            </div>                
        </li> `
}

const pokemonList= document.getElementById("pokemonList")


//=> representa um função

pokeApi.getPokemons().then((pokemons = []) => 
{
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
})