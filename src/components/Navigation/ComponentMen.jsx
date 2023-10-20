import { useState } from "react"
import { Link } from "react-router-dom"

const ComponentMenu = () => {

    const [ShowMenu, SetShowMenu] = useState(false)

    const toggleDropdownMenu = () => {
        SetShowMenu(!ShowMenu);
    };

    return (
        <div className='block rowJC'>
            {ShowMenu && (
                < div className='transform transition-transform duration-300'>
                    <Link>Gallery</Link>
                    <Link>Community</Link>
                    <Link>Evenet</Link>
                </div>
            )}
            <button
                onClick={toggleDropdownMenu}
                class="cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-4 py-3 rounded-xl">
                <span class="flex flex-col justify-between relative w-full h-full z-10  text-green-500  duration-1000">
                    <div className='w-8 h-1  bg-black group-hover:bg-white duration-700'></div>
                    <div className='w-8 h-1 mt-2 bg-black group-hover:bg-white group-active:w-0 group-active:duration-0   duration-700'></div>
                    <div className='w-8 h-1 mt-2 bg-black group-hover:bg-white   duration-700'></div>
                </span>
                <span class="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-1000"></span>
                <span class="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-1000"></span>
            </button>


        </div >

    )
}
export default ComponentMenu