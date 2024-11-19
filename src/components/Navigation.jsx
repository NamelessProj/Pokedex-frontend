import {Button, Navbar, Typography} from "@material-tailwind/react";
import NavList from "./NavList.jsx";
import {useAuthStore} from "../stores/authStore.js";
import {useUserStore} from "../stores/userStore.js";
import {Link, useNavigate} from "react-router-dom";

const Navigation = () => {

    const {userInfo, logout} = useAuthStore();
    const {userLogout} = useUserStore();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            await userLogout();
            logout();
            navigate('/');
        }catch(e){
            console.log(e);
        }
    }

    return (
        <Navbar className="mx-auto max-w-screen-xl px-6 py-3 sticky top-0 z-10 backdrop-blur-md">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5"
                >
                    <Link to="/">
                        Poké-Crazy
                    </Link>
                </Typography>

                <div className="hidden lg:block">
                    <NavList />
                </div>

                {userInfo ? (
                    <div className="hidden gap-2 lg:flex">
                        <Button variant="text" size="sm" color="blue-gray" onClick={handleLogout}>
                            Logout
                        </Button>
                        <Button variant="gradient" size="sm">
                            <Link to="/profile">
                                Profile
                            </Link>
                        </Button>
                    </div>
                ) : (
                    <div className="hidden gap-2 lg:flex">
                        <Button variant="text" size="sm" color="blue-gray">
                            <Link to="/login">
                                Login
                            </Link>
                        </Button>
                        <Button variant="gradient" size="sm">
                            <Link to="/register">
                                Register
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </Navbar>
    );
};

export default Navigation;