import {Button, IconButton, Typography} from "@material-tailwind/react";
import {TbReload} from "react-icons/tb";

const Home = () => {
    return (
        <>
            <section className="m-10">
                <div className="p-10 rounded-xl bg-[url('/wallEctoplasma.jpg')] bg-no-repeat bg-cover bg-right">
                    <Typography
                        variant="small"
                        color="white"
                        className="font-bold mb-2"
                    >
                        Your personal Pokédex
                    </Typography>
                    <Typography
                        variant="h1"
                        color="white"
                    >
                        Catch 'em all
                    </Typography>
                    <Typography className="mt-2 mb-6 text-base text-gray-200">
                        Ready to catch 'em all? Better get your pokeballs ready!
                    </Typography>
                    <Button
                        variant="filled"
                        color="deep-purple"
                    >
                        <a href="/pokedex">Let's discover some pokemon</a>
                    </Button>
                </div>
            </section>

            <section className="m-10 text-center">
                <div className="p-10 rounded-xl bg-gradient-to-b from-blue-gray-700 to black">
                    <div className="flex justify-center items-center gap-6">
                        <Typography
                            variant="h2"
                            color="white"
                        >
                            Check 3 new random friends
                        </Typography>
                        <IconButton color="purple">
                            <i><TbReload size={20} /></i>
                        </IconButton>
                    </div>
                </div>

                <section className="flex justify-center gap-20 mt-12">

                </section>
            </section>
        </>
    );
};

export default Home;