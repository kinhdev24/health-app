import { categories, products as initialProduct } from "@/data"
import { useState } from "react"

const Categories = () => {
  const [products, setProducts] = useState(initialProduct)

  const handleShowMore = () => {
    setProducts((prevNProducts) => [...prevNProducts, ...initialProduct])
  }
  return (
    <div className="px-[10%] container m-auto">
      <div className="mt-6 px-[15%] flex cursor-pointer justify-between">
        {categories.map((category) => (
          <div key={category.key} className="w-[134px] h-[116px] relative">
            <img
              src="/svg/shape-48.svg"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute top-[20%] left-[30%]">{category.icon}</div>
            <div className="absolute bottom-[20%] text-center left-0 right-0 text-xl text-white">
              {category.label}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 mt-6 mb-7">
        {products.map((product) => (
          <Product
            key={product.key}
            label={product.label}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
      <div
        className="mb-16 h-14 bg-gradient-yellow w-72 m-auto rounded cursor-pointer"
        onClick={handleShowMore}
      >
        <div className="flex justify-center items-center h-full text-lg font-notoJP font-light text-white">
          記録をもっと見る
        </div>
      </div>
    </div>
  )
}

type TProduct = {
  thumbnail: string
  label: string
}
const Product = ({ thumbnail, label }: TProduct) => {
  return (
    <div className="w-full relative">
      <img src={thumbnail} className="w-full" />
      <div className="h-6 gap-3 bg-primary-yellow absolute bottom-0 px-2 flex justify-between text-white text-base">
        {label}
      </div>
    </div>
  )
}

export default Categories
