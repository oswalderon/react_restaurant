import {useContext} from 'react'
import Context from '../context/Provider'

const useMenu = () => {
    return useContext(Context)
}

export default useMenu