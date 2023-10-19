import { Link } from 'react-router-dom'
import { fnLogo } from '../../assets/images/index'


const Navigation = () => {

    return (

        <div className='w-20' >
            <Link to={'/'} className="" >
                <img className="" src={fnLogo} alt="" />
            </Link>

        </div >


    )
}
export default Navigation