import {Chip, Typography} from "@material-tailwind/react";
import {MdDoubleArrow} from "react-icons/md";

const Pokevolution = ({pokemon}) => {
    return (
        <>
            {pokemon && (
                <section className="bg-[url('/background-evolution.png')] bg-no-repeat bg-cover mx-20">
                    <Typography className="py-6 text-left pl-6" variant="lead" color="white">Evolutions</Typography>
                    <div className="flex justify-center items-center gap-4">
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="h-40 w-40 rounded-full object-cover object-center border-4 border-white shadow-md shadow-gray-600 cursor-pointer"
                                src={`/pokemon/${pokemon?.pokemon_infos.pokemon_evo_1_name.toLowerCase()}.png`}
                                alt={`${pokemon?.pokemon_infos.pokemon_evo_1_name}'s picture`}
                            />
                            <div className="flex items-center gap-4">
                                <Typography variant="h5" color="white">{pokemon?.pokemon_infos.pokemon_evo_1_name}</Typography>
                                <Typography variant="lead" className="text-gray-400">N°{pokemon?.pokemon_infos.pokemon_evo_1_num}</Typography>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                {pokemon?.pokemon_type.map((el) => (
                                    <Chip value={el.name} key={el.name} size="sm" className="text-blue-gray-900" style={{background: el.background}}/>
                                ))}
                            </div>
                        </div>
                        <i><MdDoubleArrow size={80} color="white" className="mb-28"/></i>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="h-40 w-40 rounded-full object-cover object-center border-4 border-white shadow-md shadow-gray-600 cursor-pointer"
                                src={`/pokemon/${pokemon?.pokemon_infos.pokemon_evo_2_name.toLowerCase()}.png`}
                                alt={`${pokemon?.pokemon_infos.pokemon_evo_2_name}'s picture`}
                            />
                            <div className="flex items-center gap-4">
                                <Typography variant="h5" color="white">{pokemon?.pokemon_infos.pokemon_evo_2_name}</Typography>
                                <Typography variant="lead" className="text-gray-400">N°{pokemon?.pokemon_infos.pokemon_evo_2_num}</Typography>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                {pokemon?.pokemon_type.map((el) => (
                                    <Chip value={el.name} key={el.name} size="sm" className="text-blue-gray-900" style={{background: el.background}}/>
                                ))}
                            </div>
                        </div>
                        <i><MdDoubleArrow size={80} color="white" className="mb-28"/></i>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="h-40 w-40 rounded-full object-cover object-center border-4 border-white shadow-md shadow-gray-600 cursor-pointer"
                                src={`/pokemon/${pokemon?.pokemon_infos.pokemon_evo_3_name.toLowerCase()}.png`}
                                alt={`${pokemon?.pokemon_infos.pokemon_evo_3_name}'s picture`}
                            />
                            <div className="flex items-center gap-4">
                                <Typography variant="h5" color="white">{pokemon?.pokemon_infos.pokemon_evo_3_name}</Typography>
                                <Typography variant="lead" className="text-gray-400">N°{pokemon?.pokemon_infos.pokemon_evo_3_num}</Typography>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                {pokemon?.pokemon_type.map((el) => (
                                    <Chip value={el.name} key={el.name} size="sm" className="text-blue-gray-900" style={{background: el.background}}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Pokevolution;