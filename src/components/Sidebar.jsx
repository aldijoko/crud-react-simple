
import { FaHome } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='bg-green-700 h-screen px-5'>
        <div className='px-5 py-10 flex items-center justify-center border-b-2 border-gray-300'>
            <h1 className='text-2xl font-bold leading-5 text-white'>Admin</h1>
        </div>
        <a className='flex items-center gap-2 py-5 border-b-2 border-gray-300' href='/'>
            <FaHome color='white'/>
            <p className='text-white leading-5 text-sm cursor-pointer'>Dashboard</p>
        </a>
    </div>
  )
}

export default Sidebar