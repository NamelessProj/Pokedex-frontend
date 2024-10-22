import {Button, Card, CardBody, CardFooter, CardHeader, Input, Typography} from "@material-tailwind/react";

const Register = () => {
    return (
        <section className="my-28 flex justify-center">
            <Card className="w-96">
                <CardHeader
                    color="gray"
                    className="grid h-36 place-items-start bg-[url('/bg-register.png')] bg-no-repeat bg-cover bg-bottom"
                >
                    <span></span>
                </CardHeader>
                <CardBody className="flex flex-col gap-8">
                    <Typography
                        variant="h3"
                        color="blue-gray"
                    >
                        Register
                    </Typography>
                    <Input
                        label="Pseudo"
                        size="lg"
                        value={""}
                        name="pseudo"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <Input
                        label="Email"
                        size="lg"
                        value={""}
                        name="email"
                        type="email"
                        inputMode="email"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <Input
                        label="Password"
                        size="lg"
                        value={""}
                        name="password"
                        type="pasword"
                        onChange={(e) => console.log(e.target.value)}
                    />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                        variant="gradient"
                        fullWidth
                        color="yellow"
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