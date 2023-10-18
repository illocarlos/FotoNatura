import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoutes'
import IndexPage from '../pages/Index/IndexPage'


function AppRoutes() {

    return (

        <Routes>

            <Route path={"/"} element={<IndexPage />} />
            < Route path={"/auth/signup"} element={<p>el registroooo</p>} />
            < Route path={"/auth/login"} element={<p>el logeooo</p>} />

            < Route path={"*"} element={< p > ERROR</p >} />

            < Route element={< PrivateRoute />}>


                <Route path={"community"} element={<h1></h1>} />
                <Route path={"listphoto"} element={<h1>listphoto</h1>} />
                < Route path={"newphoto"} element={<h1>newphoto</h1>} />


            </Route >
        </Routes >
    )




}
export default AppRoutes