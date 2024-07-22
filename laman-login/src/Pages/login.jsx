import FormLogin from "../component/Fragments/FormLogin";
import AuthLayout from "../component/Layouts/AuthLayouts";

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPage;