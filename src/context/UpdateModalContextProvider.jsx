import { useState } from 'react'
import { UpdateModalContext } from './updateModalContext'

const UpdateModalContextProvider = ({ children }) => {
    const [updateModal, setUpdateModal] = useState({isOpen: false, id: null})

    return (
        <UpdateModalContext.Provider value={{updateModal, setUpdateModal}}>
            { children }
        </UpdateModalContext.Provider>
    )
}

export default UpdateModalContextProvider