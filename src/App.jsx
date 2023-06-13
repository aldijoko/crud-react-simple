import { useState, useEffect } from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import TableData from './components/TableData'
import ModalDelete from './components/ModalDelete';
import Modal from './components/Modal';
import axios from 'axios';
import ModalView from './components/ModalView';
import ModalUpdate from './components/ModalUpdate';

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [openModalView, setOpenModalView] = useState(false)
  const [openModalUpdate, setOpenModalUpdate] = useState(false)
  const [loading, setLoading] = useState(false)


  const [dataApi, setDataApi] = useState([])
  const [dataDetail, setDataDetail] = useState([])
  const [dataUpdateApi, setDataUpdateApi] = useState([])

  const getData = async () => {
    try {
      const res = await axios.get('https://6487e2ba0e2469c038fc9c56.mockapi.io/users')
      const data = res.data
      setDataApi(data)
      setTimeout(() => {
        setLoading(true)
      }, 1000)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

    const [deleteId, setDeleteId] = useState("")

    const handleDelete = (index) => {
      setDeleteId(index)
      setOpenModalDelete(true)
    }

    const handleModalDelete = async () => {
        const res = await axios.delete(`https://6487e2ba0e2469c038fc9c56.mockapi.io/users/${deleteId}`)
        if(res.status === 200){
          const dataRes = res.data
          console.log(dataRes)
          setDataApi(dataRes => {
            const newData = [...dataRes]
            return newData.filter((id) => id !== deleteId)
          })
          setOpenModalDelete(false)
          window.location.reload()
        }
    }

    const handleView = async (e) => {
      try {
        const res = await axios.get(`https://6487e2ba0e2469c038fc9c56.mockapi.io/users/${e}`)
        const data = res.data
        setDataDetail(data)
        setOpenModalView(true);
      } catch (error) {
        console.log(error)
      }
    }

    const handleAddData = async (e) => {
      try {
        const res = await axios.post('https://6487e2ba0e2469c038fc9c56.mockapi.io/users', {
          name: e.name,
          address: e.alamat,
          gender: e.gender,
          birthDate: e.lahir,
          createdAt: e.createdAt
        })
        const data = res.data
        setDataApi([...dataApi, data])
        setOpenModal(false)
      } catch (error) {
        console.log(error)
      }

    }

    const handleUpdate = async (e) => {
      const res = await axios.put(`https://6487e2ba0e2469c038fc9c56.mockapi.io/users/${e}`, {
        name: e.name,
        address: e.alamat,
        gender: e.gender,
        birthDate: e.lahir,
        createdAt: e.createdAt
      })
      const data = res.data
      setDataUpdateApi(data)
      setOpenModalUpdate(true)
    }
  return (
    <>
      <div className='flex'>
        <div className='basis-[12%] h-[100vh]'>
          <Sidebar />
        </div>
        <div className='basis-[88%] '>
          <Header />
          <div className='px-5 py-1'>
          {openModal && <Modal closeModals={() => {
            setOpenModal(false)
          }} 
            onSubmit={handleAddData}/>}
            <div className='py-2 '>
                <button onClick={() => setOpenModal(true)} className='bg-blue-500 text-white px-2 py-1 rounded-md text-base flex gap-3 items-center'>
                    <FaPlusCircle/>
                    Tambah Data
                </button>
            </div>
            <TableData dataRow={dataApi} deleteClick={handleDelete} viewClick={handleView} updateClick={handleUpdate} loading={loading}/>
            {openModalDelete && <ModalDelete onClickDelete={handleModalDelete} />}
            {openModalUpdate && <ModalUpdate dataUpdate={dataUpdateApi} closeModals={() => {
              setOpenModalUpdate(false)
            }}/>}
            {openModalView && <ModalView dataDetail={dataDetail} closeModals={() => {
              setOpenModalView(false)
            }}/>}
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
