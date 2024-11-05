import {IconButton, Tooltip, Typography} from "@material-tailwind/react";
import {IoIosFemale, IoIosMale} from "react-icons/io";
import {useState} from "react";
import {CgPokemon} from "react-icons/cg";

const PokeDescription = ({pokemon}) => {
    const [textButton, setTextButton] = useState(false);

    return (
        <>
            {pokemon ? (
                <section className="flex flex-col items-center">
                    <div className="p-2 rounded-xl bg-blue-400 w-96 h-52 flex flex-wrap">
                        <div className="w-1/3">
                            <Typography variant="lead" color="white">Width</Typography>
                            <Typography variant="paragraph" className="font-bold">
                                {pokemon?.pokemon_infos.pokemon_width}m
                            </Typography>
                        </div>
                        <div className="w-1/3">
                            <Typography variant="lead" color="white">Category</Typography>
                            <Typography variant="paragraph" className="font-bold">
                                {pokemon?.pokemon_infos.pokemon_category}
                            </Typography>
                        </div>
                        <div className="w-1/3">
                            <Typography variant="lead" color="white">Weight</Typography>
                            <Typography variant="paragraph" className="font-bold">
                                {pokemon?.pokemon_infos.pokemon_weight}kg
                            </Typography>
                        </div>
                        <div className="w-1/3">
                            <Typography variant="lead" color="white">Talent</Typography>
                            <Typography variant="paragraph" className="font-bold cursor-pointer">
                                <Tooltip
                                    placement="top-start"
                                    animate={{mount: {scale: 1, y: 0}, unmount: {scale: 0, y: 25}}}
                                    content={pokemon?.pokemon_infos.pokemon_tooltip}
                                    className="w-64 cursor-pointer"
                                >
                                    {`${pokemon?.pokemon_infos.pokemon_talent}*`}
                                </Tooltip>
                            </Typography>
                        </div>
                        <div className="flex flex-col flex-wrap items-center w-1/3">
                            <Typography variant="lead" color="white">Gender</Typography>
                            <div className="flex">
                                <>
                                    {pokemon?.pokemon_infos.pokemon_gender.length > 0 ? (
                                        <>
                                            {pokemon?.pokemon_infos.pokemon_gender.includes('male') && (
                                                <IoIosMale size={24} />
                                            )}
                                            {pokemon?.pokemon_infos.pokemon_gender.includes('female') && (
                                                <IoIosFemale size={24} />
                                            )}
                                        </>
                                    ):(
                                        <Typography variant="lead">Undefined</Typography>
                                    )}
                                </>
                            </div>
                        </div>
                    </div>
                    <div className="w-96 mt-6">
                        <Typography variant="paragraph" className="text-left">
                            {textButton ? pokemon?.pokemon_infos.pokemon_blue_text : pokemon?.pokemon_infos.pokemon_red_text}
                        </Typography>
                        <div className="text-left flex items-center mt-6 gap-3">
                            <Typography variant="lead">Versions:</Typography>
                            <IconButton className="bg-blue-900" onClick={() => setTextButton(false)}>
                                <i><CgPokemon size={20} /></i>
                            </IconButton>
                            <IconButton className="bg-red-900" onClick={() => setTextButton(true)}>
                                <i><CgPokemon size={20} /></i>
                            </IconButton>
                        </div>
                    </div>
                </section>
            ):(
                <Typography>
                    No pokemon found.
                </Typography>
            )}
        </>
    );
};

export default PokeDescription;