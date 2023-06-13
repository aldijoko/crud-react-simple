

const ModalDelete = ({ onClickDelete }) => {
  return (
    <div className='fixed z-10 left-0 right-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
        <div className='rounded-md p-8 bg-white w-1/4'>
            {/* <div className='modal-items'> */}
                <h3>Apakah anda ingin menghapus data ini?</h3>
                <div className='flex justify-between mt-10'>
                    <button className='px-5 py-1 bg-green-500 rounded-md text-white hover:scale-105' onClick={() => onClickDelete(true)}>Ya</button>
                    <button className='px-5 py-1 bg-red-500 rounded-md text-white hover:scale-105' onClick={() => onClickDelete(false)}>Tidak</button>
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default ModalDelete