import {Button, Card, CardBody, CardFooter, CardHeader, Input, Typography} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useUserStore} from "../stores/userStore.js";
import {useAuthStore} from "../stores/authStore.js";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = useUserStore((state) => state.user);
    const login = useUserStore((state) => state.login);
    const setCredentials = useAuthStore((state) => state.setCredentials);
    const userInfo = useAuthStore((state) => state.userInfo);

    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            navigate("/");
        }
    }, [navigate, user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await login({email, password});
            if(user){
                setCredentials({user});
                navigate('/');
            }
        }catch(e){
            console.log(e);
        }
    }

    return (
        <section className="my-36 flex justify-center">
            <Card className="w-96">
                <CardHeader
                    color="gray"
                    className="grid h-36 place-items-start bg-[url('/bg-login.png')] bg-no-repeat bg-cover"
                >
                    <span></span>
                </CardHeader>
                <CardBody className="flex flex-col gap-8" role="form">
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
                        label="Password"
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
                        Let's go!
                    </Button>

                    <Typography
                        variant="small"
                        className="mt-6 flex justify-center"
                    >
                        Not registered yet?

                        <Typography
                            as={"a"}
                            href="/register"
                            variant={"small"}
                            color={"blue-gray"}
                            className="ml-1 font-bold"
                        >
                            Create an account
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </section>
    );
};

export default Login;