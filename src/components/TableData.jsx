

const TableData = ({deleteClick, dataRow, viewClick, loading, updateClick}) => {

    const formattedDate = (date) => {
        const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul','Agu', 'Sep', 'Okt', 'Nov', 'Des']
        const newDate = new Date(date)
        const year = newDate.getFullYear()
        const month = monthName[newDate.getMonth()]
        const day = newDate.getDate()
        return `${day} ${month} ${year}`
    }

    const formattedCreatedAt = (date) => {
        const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul','Agu', 'Sep', 'Okt', 'Nov', 'Des']
        const newDate = new Date(date)
        const year = newDate.getFullYear()
        const month = monthName[newDate.getMonth()]
        const day = newDate.getDate()
        const hour = newDate.getHours()
        const minute = newDate.getMinutes()
        return `${day} ${month} ${year} ${hour}:${minute}`
    }
    const formattedGender = (gender) => {
        if(gender === 'male'){
            return 'Pria'
        } else {
            return 'Wanita'
        }
    }
  return (
    <div className='py-5'>
        <div>
        <table className='table-auto w-full text-left p-2'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th>P/W</th>
                    <th>Tanggal Lahir</th>
                    <th>Tanggal Input</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody className='border-t-2'>
                {loading ? dataRow.map((item, index) => (
                <tr key={index}>
                    {/* <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.alamat}</td>
                    <td>{item.jenis}</td>
                    <td>{item.lahir}</td>
                    <td>{item.dateInput}</td> */}
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{formattedGender(item.gender)}</td>
                    <td>{formattedDate(item.birthDate)}</td>
                    <td>{formattedCreatedAt(item.createdAt)}</td>
                    <td className='flex items-center gap-2 py-2'>
                        <button className='px-5 py-1 bg-green-500 rounded-md' onClick={() => viewClick(item.id)}>View</button>
                        <button className='px-5 py-1 bg-orange-400 rounded-md' onClick={() => updateClick(item.id)}>Edit</button>
                        <button className='px-5 py-1 bg-red-500 rounded-md' onClick={() => deleteClick(item.id)}>Delete</button>
                    </td>
                </tr>
                )) : <div>
                    <p>Loading...</p>
                    </div>}
            </tbody> 
            </table>
        </div>
    </div>
  )
}

export default TableData