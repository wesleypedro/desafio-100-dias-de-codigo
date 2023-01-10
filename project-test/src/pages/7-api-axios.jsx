import pokemonInstance from '../helper/axios-instance'
import useAxios from '../hook/use-axios'

// import axios from 'axios'

function ApiAxios() {
    const [pokemonList, loading, error] = useAxios({
        axiosInstance: pokemonInstance,
        method: 'GET',
        url: 'pokemon',
    })

    // axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => console.log(res)).catch((err) => console.log(err))

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>{error}</div>
    }

    return (
        <div className='App'>
            Consumo de API com AXIOS
            <div>
                {pokemonList.results.map((pokemon, index) => (
                    <div key={index}>{pokemon.name}</div>
                ))}
            </div>
        </div>
    )
}

export default ApiAxios;