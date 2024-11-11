import {usePokemonStore} from "../stores/pokemonStore.js";
import {useEffect} from "react";
import {Button, Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import AdminListItem from "../components/AdminListItem.jsx";

const Admin = () => {
    const {getPokemons, pokemons, loading, error} = usePokemonStore();

    useEffect(() => {
        getPokemons();
    }, []);

    return (
        <section className="m-10">
            <div className="p-10 rounded-xl bg-gradient-to-b from-blue-gray-700 to-black">
                <div className="flex justify-center items-center gap-6">
                    <Typography variant="h2" color="white">
                        Admin 'em all
                    </Typography>
                </div>
                <div className="text-center my-6">
                    <Button color="light-green">
                        <Link to={'/add-pokemon'}>
                            Add a Pokemon
                        </Link>
                    </Button>
                </div>
                <ul className="my-10 flex flex-col items-center gap-3">
                    {pokemons && pokemons.map((pokemon) => (
                        <li key={pokemon._id}>
                            <AdminListItem pokemon={pokemon}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Admin;