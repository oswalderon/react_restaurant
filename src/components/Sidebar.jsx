import useMenu from "../hooks/useMenu"
import Category from "./Category"

export default function Sidebar() {

    const {categories} = useMenu()

  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img
                className="w-40"
                src="img/logo.png"
                alt="Logo image"
            />            
        </div>

        <div className="mt-10">
            {categories.map(category => (
                <Category
                key={category.id}
                category={category}
                />
            ))}
        </div>

        <div className="my-5 px-5">
            <button 
                type="button"
                className="text-center bg-black hover:bg-red-700 w-full p-3 font-bold text-white uppercase rounded truncate"
            >
                Cancel order
            </button>
        </div>
    </aside>
  )
}
