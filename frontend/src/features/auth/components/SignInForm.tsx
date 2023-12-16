import { useState } from "react";
import useSignIn from "../hooks/useSignIn";
import FormGroup from "../../../ui/Form/FormGroup";
import InputLabel from "../../../ui/Form/InputLabel";
import Input from "../../../ui/Form/Input";
import Button from "../../../ui/Button/Button";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = useSignIn();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    signIn({ email, password });
  };

  return (
      <form
        className="w-[400px] flex flex-col gap-6 self-center"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-2 text-center text-3xl font-semibold">Войти</h1>
        <FormGroup>
          <InputLabel htmlFor="username" classes={["text-lg text-fontSecondary"]}>
            Email
          </InputLabel>
          <Input
            type="email"
            name="Email"
            placeholder="Email"
            value={email}
            onChange={setEmail}
            minLength={5}
          />
        </FormGroup>

        <FormGroup>
          <InputLabel htmlFor="password" classes={["text-lg text-fontSecondary"]}>
            Пароль
          </InputLabel>
          <Input
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={setPassword}
            minLength={5}
          />
        </FormGroup>

        <Button type="submit" onClick={handleSubmit}>
          Войти
        </Button>
      </form>
  );
};

export default SignInForm;
