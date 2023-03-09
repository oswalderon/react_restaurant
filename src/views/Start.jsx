
import useSWR from 'swr'
import Product from '../components/Product'
import axiosClient from '../config/axios'
import useMenu from '../hooks/useMenu'

export default function Start() {

  const {currentCategory} = useMenu()

  //SWR
  const fetcher = () => axiosClient('/api/products').then(data => data.data)
  const {data, error, isLoading} = useSWR('/api/products', fetcher, {
    refreshInterval: 1000
  })
  
  if(isLoading) return 'Loading...'
  const products = data.data.filter(product => product.category_id === currentCategory.id)

  return (
    <>
      <h1 className='text-4xl font-black'>{currentCategory.name}</h1>
      <p className='text-2xl my-10'>
        Choose and customize your order.
      </p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
        {products.map(product => (
          <Product
            key={product.image}
            product={product}
          />
        ))}
        
      </div>
    </>
  )
}
