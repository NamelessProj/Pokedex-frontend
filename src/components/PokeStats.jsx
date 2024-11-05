import {Chip, Progress, Typography} from "@material-tailwind/react";

const PokeStats = ({pokemon}) => {

    const getPercent = (value) => {
        return (value * 100) / 15;
    }

    return (
        <section className="flex justify-center items-center gap-6">
            <div className="p-2 border rounded-xl border-blue-400 w-1/4">
                <div>
                    <Typography variant="lead">Default stats</Typography>
                </div>
                <div>
                    <div className="mb-2 flex items-center justify-center gap-4">
                        <Typography className="w-24" variant="paragraph">PV</Typography>
                        <Progress className="w-1/2" value={getPercent(pokemon?.pokemon_infos.pokemon_pv)} color="blue" size="md"/>
                        <Typography className="w-1/3">{pokemon?.pokemon_infos.pokemon_pv}/15</Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-center gap-4">
                        <Typography className="w-24" variant="paragraph">Attack</Typography>
                        <Progress className="w-1/2" value={getPercent(pokemon?.pokemon_infos.pokemon_attack)} color="blue" size="md"/>
                        <Typography className="w-1/3">{pokemon?.pokemon_infos.pokemon_attack}/15</Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-center gap-4">
                        <Typography className="w-24" variant="paragraph">Special attack</Typography>
                        <Progress className="w-1/2" value={getPercent(pokemon?.pokemon_infos.pokemon_special_attack)} color="blue" size="md"/>
                        <Typography className="w-1/3">{pokemon?.pokemon_infos.pokemon_special_attack}/15</Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-center gap-4">
                        <Typography className="w-24" variant="paragraph">Defense</Typography>
                        <Progress className="w-1/2" value={getPercent(pokemon?.pokemon_infos.pokemon_defense)} color="blue" size="md"/>
                        <Typography className="w-1/3">{pokemon?.pokemon_infos.pokemon_defense}/15</Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-center gap-4">
                        <Typography className="w-24" variant="paragraph">Special defense</Typography>
                        <Progress className="w-1/2" value={getPercent(pokemon?.pokemon_infos.pokemon_special_defense)} color="blue" size="md"/>
                        <Typography className="w-1/3">{pokemon?.pokemon_infos.pokemon_special_defense}/15</Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-center gap-4">
                        <Typography className="w-24" variant="paragraph">Speed</Typography>
                        <Progress className="w-1/2" value={getPercent(pokemon?.pokemon_infos.pokemon_speed)} color="blue" size="md"/>
                        <Typography className="w-1/3">{pokemon?.pokemon_infos.pokemon_speed}/15</Typography>
                    </div>
                </div>
            </div>
            <div className="w-1/4">
                <div className="flex flex-wrap justify-start mb-6">
                    <Typography className="w-full text-left mb-6" variant="lead">Type{pokemon?.pokemon_type.length > 0 && (<>s</>)}</Typography>
                    <div className="flex gap-6">
                        {pokemon?.pokemon_type.map((el) => (
                            <Chip value={el.name} key={el.name} size="sm" className="text-blue-gray-900" style={{background: el.background}} />
                        ))}
                    </div>
                </div>
                <div>
                    <Typography className="w-full text-left mb-6" variant="lead">Weakness{pokemon?.pokemon_weakness.length > 0 && (<>es</>)}</Typography>
                    <div className="flex gap-6">
                        {pokemon?.pokemon_weakness.map((el) => (
                            <Chip value={el.name} key={el.name} size="sm" className="text-blue-gray-900" style={{background: el.background}} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PokeStats;