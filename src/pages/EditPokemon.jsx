import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {usePokemonStore} from "../stores/pokemonStore.js";
import {Button, Input, Spinner, Typography} from "@material-tailwind/react";

const EditPokemon = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {getPokemonById, getPokemons, editPokemon, pokemonById, loading, error} = usePokemonStore();

    const [num, setNum] = useState("");
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        getPokemonById(id);
    }, []);

    useEffect(() => {
        setNum(pokemonById?.pokemon_num);
        setName(pokemonById?.pokemon_name);
        setImg(pokemonById?.pokemon_infos.pokemon_img);
    }, [pokemonById]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMsg("");
        if(!num || !name || !img || num === "" || name === "" || img === ""){
            setErrorMsg("Please fill in all the fields!");
            return;
        }
        const formData = {
            num,
            name,
            img
        }
        editPokemon(id, formData);
        getPokemons();
        navigate("/admin");
    }

    return (
        <section className="m-10">
            {pokemonById && (
                <div className="p-10 rounded-xl bg-gradient-to-b from-blue-gray-700 to-black">
                    {loading && (
                        <Spinner className="w-40 h-40 mx-auto" color="light-green"/>
                    )}
                    <div className="flex justify-center items-center gap-6 mb-8">
                        <Typography variant="h2" color="white">
                            Edit: {pokemonById?.pokemon_name}
                        </Typography>
                    </div>
                    <div className="flex flex-col items-center gap-6 p-2">
                        <div className="flex items-center gap-6 w-full">
                            <Typography color="white">Num</Typography>
                            <Typography color="light-green">{pokemonById?.pokemon_num}</Typography>
                            <Input
                                variant="outlined"
                                color="white"
                                label="Num"
                                name="num"
                                type="text"
                                value={num || ""}
                                onChange={(e) => setNum(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-6 w-full">
                            <Typography color="white">Name</Typography>
                            <Typography color="light-green">{pokemonById?.pokemon_name}</Typography>
                            <Input
                                variant="outlined"
                                color="white"
                                label="Name"
                                name="name"
                                type="text"
                                value={name || ""}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-6 w-full">
                            <Typography color="white">Image</Typography>
                            <Typography color="light-green">{pokemonById?.pokemon_infos.pokemon_img}</Typography>
                            <Input
                                variant="outlined"
                                color="white"
                                label="Image"
                                name="img"
                                type="text"
                                value={img || ""}
                                onChange={(e) => setImg(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="text-center my-6">
                        <Typography variant="lead" color="red" className="mb-6 text-center mx-auto">{errorMsg}</Typography>
                        <Button color="yellow" onClick={handleSubmit}>Save</Button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default EditPokemon;