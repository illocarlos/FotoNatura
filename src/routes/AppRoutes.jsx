import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoutes'


function AppRoutes() {

    return (

        <Routes>
            <Route path={"/"} element={ </>} />
                < Route path = { "/"}element = { </>} />
                    < Route path = { "/"} element = { </>} />
                        < Route path = { "*"} element = {< p > ERROR</p >} />

                            < Route element = {< PrivateRoute />}>


                                <Route path={"/"} element={ </>} />
                                    <Route path={"/"} element={</> } />
                                        < Route path = { "/"} element = {</> } />


            </Route >
        </Routes >
    )




}
export default AppRoutes