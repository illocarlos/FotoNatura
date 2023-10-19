import { Link } from "react-router-dom"

const Foother = () => {

    return (
        <div className=" w-screen fixed bottom-0 text-center bg-black">
            <Link className="text-white" target="_blank" to={'https://carlosalbendiz.netlify.app/'}>Creada por Carlos Albendiz</Link>
        </div>
    )
}
export default Foother