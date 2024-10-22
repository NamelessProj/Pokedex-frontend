import {Button, Card, CardBody, CardFooter, CardHeader, Input, Typography} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {useUserStore} from "../stores/userStore.js";
import {useNavigate} from "react-router-dom";

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = useUserStore((state) => state.user);
    const userLoading = useUserStore((state) => state.userLoading);
    const register = useUserStore((state) => state.register);
    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            setUsername("");
            setEmail("");
            setPassword("");
            navigate("/login");
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await register({username, email, password});
        }catch(e){
            console.log(e)
        }
    }

    return (
        <section className="my-28 flex justify-center">
            <Card className="w-96">
                <CardHeader
                    color="gray"
                    className="grid h-36 place-items-start bg-[url('/bg-register.png')] bg-no-repeat bg-cover bg-bottom"
                >
                    <span></span>
                </CardHeader>
                <CardBody className="flex flex-col gap-8" role="form">
                    <Typography
                        variant="h3"
                        color="blue-gray"
                    >
                        Register
                    </Typography>
                    <Input
                        label="Pseudo"
                        size="lg"
                        value={username}
                        name="pseudo"
                        onChange={(e) => setUsername(e.target.value)}
                    />
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
                        color="yellow"
                        onClick={handleSubmit}
                    >
                        Become a Pokémon Master!
                    </Button>

                    <Typography
                        variant="small"
                        className="mt-6 flex justify-center"
                    >
                        Have an account?

                        <Typography
                            as={"a"}
                            href="/login"
                            variant={"small"}
                            color={"blue-gray"}
                            className="ml-1 font-bold"
                        >
                            Login
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </section>
    );
};

export default Register;