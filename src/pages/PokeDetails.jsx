import {useParams} from "react-router-dom";
import {usePokemonStore} from "../stores/pokemonStore.js";
import {useEffect} from "react";

const PokeDetails = () => {

    const { name } = useParams();
    const pokeName = name.charAt(0).toUpperCase() + name.slice(1);
    const {getSinglePokemon, singlePokemon, loading, error} = usePokemonStore();

    useEffect(() => {
        getSinglePokemon(pokeName);
    }, []);

    return (
        <div>
            <p>{pokeName}</p>
        </div>
    );
};

export default PokeDetails;