import {Typography} from "@material-tailwind/react";

const Footer = () => {
    return (
        <footer className="mx-auto flex w-1/2 flex-row flex-wrap justify-center items-center gap-y-6 gap-x-12 border-t border-blue-50 py-6 text-center md:justify-between">
            <Typography
                color="blue-gray"
                className="font-normal"
            >
                &copy; October 2024 Da Silva Pinto Kevin
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Typography
                        as="a"
                        href="/pokedex"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Pokedex
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="/"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Licence
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="/"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Contact Us
                    </Typography>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;