import {createContext, useState, useEffect} from 'react'
import axiosClient from '../config/axios';

const Context=createContext();

const Provider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState({})
    const [modal, setModal] = useState(false)
    const [product, setProduct] = useState({})
    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const newTotal = order.reduce((total, product) => (product.price * product.quantity) + total, 0)
        setTotal(newTotal)
    }, [order])

    const getCategories = async () => {
        try {
            const {data} = await axiosClient('/api/categories')
            setCategories(data.data)
            setCurrentCategory(data.data[0])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategories();
    }, [])

    const handleClickCategory = id => {
        const category = categories.filter(category => category.id === id)[0]
        setCurrentCategory(category)

    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProduct = product => {
        setProduct(product)
    }

    const handleAddOrder = ({category_id, ...product}) => {

        if(order.some( orderState => orderState.id === product.id )){
            const updatedOrder = order.map( orderState => orderState.id === product.id ? product : orderState)
            setOrder(updatedOrder)
        } else {
            setOrder([...order, product])
        }
    }

    const handleEditQuantity = id => {
        const updateProduct = order.filter(product => product.id === id)[0]
        setProduct(updateProduct)
        setModal(!modal)
    }

    const handleDeleteProduct = id =>{
        const updatedOrder = order.filter(product => product.id !== id)
        setOrder(updatedOrder)
    }

    return (
        <Context.Provider
            value={{
                categories,
                currentCategory,
                handleClickCategory,
                modal,
                handleClickModal,
                product,
                handleSetProduct,
                order,
                handleAddOrder,
                handleEditQuantity,
                handleDeleteProduct,
                total
            }}

        >{children}</Context.Provider>

    )
}

export {
    Provider
}

export default Context