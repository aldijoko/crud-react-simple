

const ModalView = ({closeModals, dataDetail}) => {
    const formattedDate = (date) => {
        const monthName = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli','Agustus', 'September', 'Oktober', 'November', 'Desember']
        const newDate = new Date(date)
        const year = newDate.getFullYear()
        const month = monthName[newDate.getMonth()]
        const day = newDate.getDate()
        return `${day} ${month} ${year}`
    }

    const formattedGender = (gender) => {
        if(gender === 'male'){
            return 'Pria'
        } else {
            return 'Wanita'
        }
    }
  return (
    <div className='modal-container' onClick={(e) => {
        if(e.target.className === 'modal-container'){
            closeModals()
        }
    }}>
        <div className='rounded-md p-8 bg-white w-1/4 overflow-y-auto'>
            <div className=" mb-4">
                <p className="font-bold">Nama Lengkap:</p>
                <p>{dataDetail.name}</p>
            </div>

            <div className=" mb-4">
                <p className="font-bold">Alamat:</p>
                <p>{dataDetail.address}</p>
            </div>
            <div className=" mb-4">
                <p className="font-bold">Jenis Kelamin:</p>
                <p>{formattedGender(dataDetail.gender)}</p>
            </div>
            <div className=" mb-4">
                <p className="font-bold">Tanggal Lahir:</p>
                <p>{formattedDate(dataDetail.birthDate)}</p>
            </div>
            <div className=" mb-4">
                <p className="font-bold">Created At:</p>
                <p>{formattedDate(dataDetail.createdAt)}</p>
            </div>
        </div>
    </div>
  )
}

export default ModalView