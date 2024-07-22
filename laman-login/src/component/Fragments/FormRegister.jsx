import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormRegister = () => {
  return (
    <>
      <InputForm title="Name" name="text" type="text" placeholder="Your Name" />
      <InputForm title="Email" name="email" type="email" placeholder="example@mail.com" />
      <InputForm title="Password" name="password" type="password" placeholder="****" />
      <InputForm title="Confirm Password" name="password" type="password" placeholder="****" />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </>
  );
};

export default FormRegister;
