import { formatCoin } from "../helpers";
import useMenu from "../hooks/useMenu"
import ProductSummary from "./ProductSummary";

export default function Summary() {
  const {order, total} = useMenu();

  const checkOrder = () => order.length === 0;

  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">
        My order
      </h1>
      <p className="text-lg my-5">
        Your order summary and total will be displayed here.
      </p>

      <div className="py-10">
        {order.length === 0 ? (
          <p className="text-center text-2xl">
            Your order is empty
          </p>
        ) : (
          order.map(product => (
            <ProductSummary
              key={product.id}
              product={product}
            />
          ))
        )}
      </div>

      <p className="text-xl mt-10">
        Total: {''}
        {formatCoin(total)}
      </p>

      <form className="w-full">
        <div className="mt-5">
          <input
            type="submit"
            className={`${checkOrder() ? 
              'bg-gray-300' : 
              'bg-black hover:bg-indigo-800 cursor-pointer'} px-5 py-2 rounded uppercase font-bold text-white text-center w-full`}
            value="Confirm order"
            disabled={checkOrder()}
          />
        </div>
      </form>
    </aside>
  )
}
