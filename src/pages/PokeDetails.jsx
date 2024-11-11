import {Link, useParams} from "react-router-dom";
import {usePokemonStore} from "../stores/pokemonStore.js";
import {useEffect} from "react";
import {Button, Typography} from "@material-tailwind/react";
import PokeDescription from "../components/PokeDescription.jsx";
import PokeStats from "../components/PokeStats.jsx";
import Pokevolution from "../components/Pokevolution.jsx";

const PokeDetails = () => {

    const { name } = useParams();
    const pokeName = name.charAt(0).toUpperCase() + name.slice(1);
    const {getSinglePokemon, singlePokemon, loading, error} = usePokemonStore();

    useEffect(() => {
        getSinglePokemon(pokeName);
    }, []);

    return (
        <section className="m-10 text-center">
            <div className="py-16 px-40 rounded-xl bg-gradient-to-b from-blue-gray-700 to black">
                <div className="bg-white rounded-xl">
                    {singlePokemon && (
                        <>
                            <Typography variant="h1">
                                {singlePokemon?.pokemon_name}
                            </Typography>
                            <Typography variant="h2" className="text-gray-600">
                                {singlePokemon?.pokemon_num}
                            </Typography>
                        </>
                    )}
                </div>
                <div className="flex justify-center items-start gap-6 mt-10">
                    <img className="w-1/4 bg-gray-300 rounded-xl" src={singlePokemon?.pokemon_infos.pokemon_img} alt={`${singlePokemon?.pokemon_name}'s picture`} />
                    <PokeDescription pokemon={singlePokemon} />
                </div>
                <div className="mt-10">
                    <PokeStats pokemon={singlePokemon} />
                </div>
                <div className="mt-10">
                    <Pokevolution pokemon={singlePokemon} />
                </div>
                <div className="mt-10 pb-10">
                    <Button>
                        <Link to={"/pokedex"}>More Pokemon</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PokeDetails;