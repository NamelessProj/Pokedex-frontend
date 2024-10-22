import {Alert, Button, Card, CardBody, CardFooter, CardHeader, Input, Spinner, Typography} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {useUserStore} from "../stores/userStore.js";
import {useNavigate} from "react-router-dom";
import {useAuthStore} from "../stores/authStore.js";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {user, error, userLoading, login, success} = useUserStore();
    const {setCredentials, userInfo} = useAuthStore();

    const navigate = useNavigate();

    useEffect(() => {
        if(success) {
            setCredentials({user});
            navigate('/');
        }
    }, [navigate, success]);

    useEffect(() => {
        if(userInfo) {
            navigate('/');
        }
    }, [userInfo]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({email, password});
        }catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className="flex justify-center my-6">
                {error && (
                    <Alert color="red" className="w-1/2">{error}</Alert>
                )}
            </div>
            <section className="my-12 flex justify-center">
                {userLoading ? (
                    <Spinner className="h-12 w-12" color="purple"/>
                ) : (
                    <Card className="w-96">
                        <CardHeader
                            color="gray"
                            className="grid h-36 place-items-start bg-[url('/bg-login.png')] bg-no-repeat bg-cover"
                        >
                            <span></span>
                        </CardHeader>
                        <CardBody className="flex flex-col gap-8">
                            <Typography
                                variant="h3"
                                color="blue-gray"
                            >
                                Login
                            </Typography>
                            <Input
                                label="Email"
                                size="lg"
                                value={email}
                                name="email"
                                type="email"
                                inputMode="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                label="Mot de passe"
                                size="lg"
                                value={password}
                                name="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button
                                variant="gradient"
                                fullWidth
                                color="light-blue"
                                onClick={handleSubmit}
                            >
                                Let's go !
                            </Button>
                            <Typography variant="small" className="mt-6 flex justify-center">
                                Don't have an account?
                                <Typography
                                    as="a"
                                    href="/register"
                                    variant="small"
                                    color="blue-gray"
                                    className="ml-1 font-bold"
                                >
                                    Register
                                </Typography>
                            </Typography>
                        </CardFooter>
                    </Card>
                )}
            </section>
        </>

    );
};

export default Login;