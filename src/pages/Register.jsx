import {Alert, Button, Card, CardBody, CardFooter, CardHeader, Input, Spinner, Typography} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {useUserStore} from "../stores/userStore.js";
import {useNavigate} from "react-router-dom";
import {useAuthStore} from "../stores/authStore.js";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {userLoading, register, error, success} = useUserStore();
    const { userInfo} = useAuthStore();

    const navigate = useNavigate();


    useEffect(() => {
        if(success) {
            setUsername("");
            setEmail("");
            setPassword("");
            navigate('/login');
        }
    }, [success]);

    useEffect(() => {
        if(userInfo) {
            navigate('/');
        }
    }, [userInfo]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register({username, email, password});
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <>
            <div className="flex justify-center my-6">
                {error && (
                    <Alert color="red" className="w-1/2">{error}</Alert>
                )}
            </div>
            <section className="my-28 flex justify-center">
                {userLoading ? (
                    <Spinner className="h-12 w-12" color="purple"/>
                ) : (
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
                                S'inscrire
                            </Typography>
                            <Input
                                label="Pseudo"
                                size="lg"
                                value={username}
                                name="username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Input
                                label="Email"
                                size="lg"
                                value={email}
                                name="email"
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
                                color="yellow"
                                onClick={handleSubmit}
                            >
                                Devenir dresseur
                            </Button>
                            <Typography variant="small" className="mt-6 flex justify-center">
                                Déjà inscrit ?
                                <Typography
                                    as="a"
                                    href="/login"
                                    variant="small"
                                    color="blue-gray"
                                    className="ml-1 font-bold"
                                >
                                    Se connecter
                                </Typography>
                            </Typography>
                        </CardFooter>
                    </Card>
                )}

            </section>
        </>

    );
};

export default Register;