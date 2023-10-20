import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import authService from "../../../services/auth.service"
import { AuthContext } from "../../../contexts/auth.context"

const FormLogIn = () => {

    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const { authenticateUser, storeToken } = useContext(AuthContext)
    const { loggedUser } = useContext(AuthContext)

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''

    })
    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService

            .login(loginData)
            .then(({ data }) => {
                emitMessage('welcome')
                storeToken(data.authToken)
                authenticateUser()
            })
            .catch(err => {
                setErrors(err.response.data.message)

            })
    }

    useEffect(() => {
        loggedUser && navigate(`/user/${loggedUser._id}`)
    }, [loggedUser])


    return (
        <div className="">
            <hr />
            <form className="" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className=" text-lg">Email</label>
                    <input
                        type="email"
                        value={loginData.email}
                        onChange={handleInputChange}
                        name="email"
                        className="w-full px-3 py-2 mt-1 border
                         rounded-md focus:outline-none focus:ring"
                    />
                </div>

                <div className="mb-3">
                    <label className=" text-lg">Password</label>
                    <input
                        type="password"
                        value={loginData.password}
                        onChange={handleInputChange}
                        name="password"
                        className="w-full px-3 py-2 mt-1 border rounded-md
                         focus:outline-none focus:ring"
                    />
                </div>

                <div className="mt-4">
                    <button
                        type="submit"
                        className="cursor-pointer transition-all w-full
                        bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400 border-b-[4px] 
                        hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                         hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
                    >
                        Access
                    </button>
                </div>
                {errors && (
                    <p className="mt-4 text-lg text-center bg-red-100 text-black">
                        {errors}
                    </p>
                )}
            </form>
            <hr />
        </div>
    )
}
export default FormLogIn