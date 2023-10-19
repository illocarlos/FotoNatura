import { Link } from "react-router-dom"
import FormLogIn from "../../../components/AuthComponent/FormLogin/FormLogin"

const LogInPage = () => {
    return (
        <div className="">
            <h1 className="text-5xl mb-3 text-center font-lobster TitleFN">Foto Natura</h1>
            <FormLogIn />
            <div className="w-full text-center">
                <p>don't you have an account?</p>
                <Link className='text-purple-800 '
                    to={'/auth/signup'}>
                    Sign up</Link>
            </div>

        </div >
    )
}
export default LogInPage