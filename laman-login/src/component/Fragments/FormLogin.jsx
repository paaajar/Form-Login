import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
  return (
    <>
      <InputForm title="Email" name="email" type="email" placeholder="example@mail.com" />
      <InputForm title="Password" name="password" type="password" placeholder="****" />
      <Button classname="bg-blue-600 w-full">Login</Button>
    </>
  );
};

export default FormLogin;
