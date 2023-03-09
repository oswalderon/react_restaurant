import { formatCoin } from "../helpers"
import useMenu from "../hooks/useMenu"

export default function Product({product}) {

    const {handleClickModal, handleSetProduct} = useMenu();
    const{name, image, price} = product

  return (
    <div className="border p-3 shadow bg-white">
        <img
            className="w-full"
            src={`/img/${image}.jpg`}
            alt={`${name} image`}
        />

        <div className="p-5">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">{formatCoin(price)}
            </p>

            <button
                type="button"
                className="bg-black hover:bg-green-800 text-white w-full mt-5 p-3 rounded uppercase font-bold"
                onClick={() => {
                    handleClickModal();
                    handleSetProduct(product);
                }}
            
            >
                Add
            </button>
            
        </div>

    </div>
  )
}
