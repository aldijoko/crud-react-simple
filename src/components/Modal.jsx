import { useState } from 'react'
import '../index.css'
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from 'react-datepicker';

const Modal = ({closeModals, onSubmit, defaulValue}) => {

    
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState('');

    const [dataInput, setDataInput] = useState({
        name: '',
        alamat: '',
        gender: '',
        lahir: selectedDate,
        createdAt: new Date()
    })

    const handleInput = (e) => {
        setDataInput({...dataInput, [e.target.name]: e.target.value})
    }
    
    const handleOption = (e) => {
        setDataInput({...dataInput, gender: e.target.value})
    }

    const handleDate = (e) => {
        setStartDate(e)
        setDataInput({...dataInput, lahir: e})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(dataInput)
        onSubmit(dataInput)
        closeModals()
    }

  return (
    <div className='modal-container' onClick={(e) => {
        if(e.target.className === 'modal-container'){
            closeModals()
        }
    }}>
         <div className='rounded-md p-8 bg-white w-1/4'>
            <form action="" onSubmit={handleSubmit}>
                <div className='flex flex-col mb-3'>
                    <label className='leading-5 mb-1' htmlFor="name">Nama:</label>
                    <input className='w-full h-8 border rounded-md px-2 placeholder:text-sm' type="text" name='name' placeholder='Masukkan Nama' onChange={handleInput} />
                </div>
                <div className='flex flex-col mb-3'>
                    <label className='leading-5 mb-1' htmlFor="alamat">Alamat:</label>
                    <input className='w-full h-8 border rounded-md px-2 placeholder:text-sm' type="text" name='alamat' placeholder='Masukkan Alamat' onChange={handleInput}/>
                </div>
                <div>
                    <label className='leading-5' htmlFor="gender">Jenis Kelamin:</label>
                    <div className='flex mb-5 gap-3'>
                    <input type="radio" name='jenisKelamin' value="male" onChange={handleOption}/> Pria
                    <input type="radio" name='jenisKelamin' value="female" onChange={handleOption}/> Wanita
                    </div>
                </div>
                <div>
                    <label className='leading-5 mb-1' htmlFor="lahir">Tanggal Lahir:</label>
                   <ReactDatePicker 
                    className='w-full h-8 border rounded-md px-2 placeholder:text-sm' 
                    dateFormat="dd/MM/yyyy"
                    selected={startDate}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    onChange={handleDate} />
                </div>
                <button type='submit' className='font-semibold h-9 px-5 bg-blue-400 py-1 rounded-lg text-white hover:bg-white hover:text-blue-400 hover:border mt-2' >Submit</button>
            </form>
         </div>
    </div>
  )
}

export default Modal