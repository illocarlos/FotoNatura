import { Link } from 'react-router-dom'
import { fnLogo } from '../../assets/images/index'
import ComponentMenu from './ComponentMen'


const Navigation = () => {

    return (

        <div className=' border-b border-black w-screen' >


            <div className='rowJB '>
                <Link to={'/'} className="" >

                </Link>
                <ComponentMenu />
            </div >
        </div >


    )
}
export default Navigation