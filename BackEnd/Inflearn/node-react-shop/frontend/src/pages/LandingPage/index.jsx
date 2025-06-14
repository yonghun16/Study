/* import libraries */
import { useEffect, useState } from "react"
import axiosInstance from "../../utils/axios"

/* import components */
import CheckBox from "./Sections/CheckBox"
import RadioBox from "./Sections/RadioBox"
import SearchInput from "./Sections/SearchInput"
import CardItem from "./Sections/CardItem"

/* UI */
const LandingPage = () => {
  // 상태 data
  const limit = 4;
  const [products, setProducts] = useState([])
  const [skip, setSkip] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [filters, setFilters] = useState({
    continent: [],
    price: []
  })

  useEffect(() => {
    fetchProducts({ skip, limit })
  }, [])

  const fetchProducts = async ({ skip, limit, loadMore = false, filters = {}, searchTerm = "" }) => {
    const params = {
      skip,
      limit,
      filters,
      searchTerm,
    }
    try {
      const response = await axiosInstance.get('/products', { params })
      setProducts(response.data.products)
    }catch(error) {
      clonsole.error(error)
    }
  }


  return (
    <section>
      <div className="text-center m-7">
        <h2 className="text-3xl font-bold"> 여행 상품 사이트 </h2>
      </div>
      {/* filter */}
      <div className="flex gap-3">
        <div className='w-1/2'>
          <CheckBox />
        </div>
        <div className='w-1/2'>
          <RadioBox />
        </div>

      </div>

      {/* search */}
      <div className="flex justify-end">
        <SearchInput />
      </div>

      {/* card */}
      <div className="grid grid-cols-2 sm:gird-cols-4">
        {products.map(product =>
          <CardItem product={product} key={product._id} />
        )}
      </div>

      {/* LoadMore */}
      {hasMore &&
        <div className="flex justify-center mt-5">
          <button className="px-4 py-2 mt-5 text-white bg-black rounded-md hover:bg-gray-500">
            더 보기
          </button>
        </div>
      }
    </section>
  )
}

export default LandingPage
