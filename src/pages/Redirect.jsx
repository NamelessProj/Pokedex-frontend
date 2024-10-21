import {Button, Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom";

const Redirect = () => {
    return (
        <section className="m-10 h-[600px]">
            <div className="pl-20 rounded-xl bg-[url('/404.jpeg')] bg-no-repeat bg-cover bg-right h-full flex flex-col justify-center">
                <Typography
                    variant="h1"
                    color="white"
                >
                    404
                </Typography>
                <Typography
                    variant="h2"
                    color="white"
                >
                    Pikachu is lost!
                </Typography>
                <Typography
                    variant="h3"
                    color="yellow"
                >
                    Pika Pika...
                </Typography>
                <Typography className="mt-2 mb-6 text-base text-gray-200">
                    You might be lost too!
                </Typography>

                <Button
                    variant="filled"
                    color="yellow"
                    className="w-64"
                >
                    <Link to="/">Go back home</Link>
                </Button>
            </div>
        </section>
    );
};

export default Redirect;