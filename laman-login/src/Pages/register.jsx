import AuthLayout from "../component/Layouts/AuthLayouts"
import FormRegister from "../component/Fragments/FormRegister"

const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister />
        </AuthLayout>
    )
}

export default RegisterPage