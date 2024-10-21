import {Typography} from "@material-tailwind/react";

const NavList = () => {
    return (
        <ul className="my-2 flex flex-col lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="a"
                href="/"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium cursor-pointer"
            >
                Home
            </Typography>
            <Typography
                as="a"
                href="/"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium cursor-pointer"
            >
                All Pokemon
            </Typography>
        </ul>
    );
};

export default NavList;