import {Card, CardBody, CardFooter, CardHeader, Chip, Typography} from "@material-tailwind/react";

const PokeCard = ({pokemon}) => {
    return (
        <>
            <Card className="w-64 h-80 transition ease-in hover:transform hover:-translate-y-4 cursor-pointer">
                <CardHeader floated className="h-48 w-48 mx-auto bg-gray-200">
                    <img src="/pokemon/pichu.png" alt="Pichu's picture"/>
                </CardHeader>
                <CardBody className="text-center">
                    <Typography
                        as="span"
                        variant="small"
                        className="-mt-2 font-bold"
                    >
                        N°0005
                    </Typography>
                    <Typography
                        variant="h4"
                        color="blue-gray"
                        className="mb-2"
                    >
                        Pichu
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-2 py-2">
                    <Chip
                        value={'Electrik'}
                        size="sm"
                        className="text-blue-gray-900"
                        style={{backgroundColor: '#eed535'}}
                    />
                </CardFooter>
            </Card>
        </>
    );
};

export default PokeCard;