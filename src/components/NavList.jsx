import {Typography} from "@material-tailwind/react";
import {useAuthStore} from "../stores/authStore.js";
import {Link} from "react-router-dom";

const NavList = () => {
    const {userInfo} = useAuthStore();

    return (
        <ul className="my-2 flex flex-col lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                variant="small"
                color="blue-gray"
                className="p-1 font-medium cursor-pointer"
            >
                <Link to="/">
                    Home
                </Link>
            </Typography>
            <Typography
                variant="small"
                color="blue-gray"
                className="p-1 font-medium cursor-pointer"
            >
                <Link to="/pokedex">
                    All Pokemon
                </Link>
            </Typography>
            {userInfo && (
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium cursor-pointer"
                >
                    <Link to="/admin">
                        Admin
                    </Link>
                </Typography>
            )}
        </ul>
    );
};

export default NavList;