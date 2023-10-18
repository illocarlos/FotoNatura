import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
// import Loader from "../components/Loader/Loader" el spiner 
import { AuthContext } from "../contexts/auth.context"

const PrivateRoute = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)


    if (isLoading) {
        return <h1>cargando.....</h1>
    }

    if (!loggedUser) {
        return <Navigate to="/" />
    }

    return <Outlet />
}

export default PrivateRoute