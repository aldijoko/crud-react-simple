import { FaRegBell } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='flex items-center justify-end h-16 shadow-md px-5 '>
        {/* <div className='flex items-center rounded-md'>
            <input placeholder='Search...' className='bg-gray-100 h-8 outline-none pl-5 w-72 rounded-tl-md rounded-bl-md placeholder:text-xs leading-3 font-normal' />
            <div className='bg-green-700 h-8 px-4 flex items-center justify-center cursor-pointer rounded-tr-md rounded-br-md'>
                <FaSearch color='white'/>
            </div>
        </div> */}
        <div className='flex items-center gap-3 relative'>
            <div className='border-r-2 pr-5 cursor-pointer'>
                <FaRegBell />
            </div>
            <div className='cursor-pointer'>
                <p className='text-sm font-normal leading-3'>Aldi Joko</p>
            </div>
        </div>
    </div>
  )
}

export default Header