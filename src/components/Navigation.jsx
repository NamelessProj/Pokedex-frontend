import {Button, Navbar, Typography} from "@material-tailwind/react";
import NavList from "./NavList.jsx";

const Navigation = () => {
    return (
        <Navbar className="mx-auto max-w-screen-xl px-6 py-3 sticky top-0 z-10 backdrop-blur-md">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="/"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5"
                >
                    Poké-Crazy
                </Typography>

                <div className="hidden lg:block">
                    <NavList />
                </div>

                <div className="hidden gap-2 lg:flex">
                    <Button variant="text" size="sm" color="blue-gray">
                        <a href="/login">Login</a>
                    </Button>
                    <Button variant="gradient" size="sm">
                        <a href="/register">Register</a>
                    </Button>
                </div>
            </div>
        </Navbar>
    );
};

export default Navigation;