import useMenu from "../hooks/useMenu"

export default function Category({category}) {

  const {handleClickCategory, currentCategory} = useMenu();

  const {icon, name, id} = category

  return (
    <div className={`${currentCategory.id === id ? "bg-black text-white" : "bg-white text-black"} flex items-center gap-4 w-full p-3 hover:bg-amber-500 hover:text-white cursor-pointer`}>
        <img
            className="w-12"
            src={`/img/icon_${icon}.svg`}
            alt="Icon image"
        />
        <button
          className="text-lg font-bold cursor-pointer"
          type="button"
          onClick={() => handleClickCategory(id)}
        >
          {name}
        </button>
    </div>
  )
}
