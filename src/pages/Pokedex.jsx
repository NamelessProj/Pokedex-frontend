import {usePokemonStore} from "../stores/pokemonStore.js";
import {useEffect} from "react";
import {Spinner, Typography} from "@material-tailwind/react";
import SearchBar from "../components/SearchBar.jsx";
import PokeCard from "../components/PokeCard.jsx";

const Pokedex = () => {
    const {pokemons, loading, getPokemons} = usePokemonStore();

    useEffect(() => {
        getPokemons();
    }, []);

    return (
        <section className="m-10">
            <div className="p-10 rounded-l-xl border border-purple-100 rounded-xl bg-gradient-to-b from-blue-gray-700 to-black">
                <div className="flex justify-center items-center gap-6">
                    <Typography
                        variant="h2"
                        color="white"
                    >
                        Catch 'em all
                    </Typography>
                </div>
                <div className="flex justify-center gap-6 border border-white p-4 mt-6">
                    <SearchBar />
                </div>
                <div className="flex justify-center pt-10">
                    {loading ? (
                        <Spinner className="h-20 w-20" color="blue"/>
                    ):(
                        <div className="flex flex-wrap justify-center gap-20 mt-17">
                            {pokemons?.map((pokemon, key) => (
                                <PokeCard pokemon={pokemon} key={key}/>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Pokedex;