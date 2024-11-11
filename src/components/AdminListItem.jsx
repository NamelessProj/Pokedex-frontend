import {IconButton, Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import {FaRegEdit, FaRegEye} from "react-icons/fa";
import {TfiTrash} from "react-icons/tfi";
import {usePokemonStore} from "../stores/pokemonStore.js";

const AdminListItem = ({pokemon}) => {
    const {deletePokemon, loading, message, error} = usePokemonStore();

    const handleDelete = (id) => {
        if(id && confirm("Are you sure you want to delete this pokemon?")){
            deletePokemon(id);
        }
    }

    return (
        <div className="flex items-center gap-6 border p-2 rounded-md">
            <div className="flex gap-6">
                <Typography color="white">
                    N°{pokemon.pokemon_num}
                </Typography>
                <Typography color="white">
                    {pokemon.pokemon_name} :
                </Typography>
            </div>
            <div className="flex gap-6">
                <IconButton variant="text" color="blue" aria-label="View the pokemon">
                    <Link to={`/details/${pokemon.pokemon_name}`}>
                        <FaRegEye size={24}/>
                    </Link>
                </IconButton>
                <IconButton variant="text" color="yellow" aria-label="Edit the pokemon">
                    <Link to={`edit/${pokemon?._id}`}>
                        <FaRegEdit size={24}/>
                    </Link>
                </IconButton>
                <IconButton variant="text" color="red" aria-label="delete the pokemon" onClick={() => handleDelete(pokemon?._id)}>
                    <TfiTrash size={24}/>
                </IconButton>
            </div>
        </div>
    );
};

export default AdminListItem;