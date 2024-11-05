import {Card, CardBody, CardFooter, CardHeader, Chip, Typography} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";

const PokeCard = ({pokemon}) => {
    const navigate = useNavigate();
    return (
        <>
            <Card
                className="w-64 h-80 transition ease-in hover:transform hover:-translate-y-4 cursor-pointer"
                onClick={() => navigate(`/details/${pokemon?.pokemon_name}`)}
            >
                <CardHeader floated className="h-48 w-48 mx-auto bg-gray-200">
                    <img src={pokemon.pokemon_infos.pokemon_img} alt={`${pokemon.pokemon_name}'s picture`}/>
                </CardHeader>
                <CardBody className="text-center">
                    <Typography
                        as="span"
                        variant="small"
                        className="-mt-2 font-bold"
                    >
                        N°{pokemon.pokemon_num}
                    </Typography>
                    <Typography
                        variant="h4"
                        color="blue-gray"
                        className="mb-2"
                    >
                        {pokemon.pokemon_name}
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-2 py-2">
                    {pokemon.pokemon_type.map((type) => (
                        <Chip
                            value={type.name}
                            size="sm"
                            className="text-blue-gray-900"
                            style={{backgroundColor: type.background}}
                        />
                    ))}
                </CardFooter>
            </Card>
        </>
    );
};

export default PokeCard;