/* import libraries */
import { useEffect, useState } from "react"
import axiosInstance from "../../utils/axios"

/* import components */
import CheckBox from "./Sections/CheckBox"
import RadioBox from "./Sections/RadioBox"
import SearchInput from "./Sections/SearchInput"
import CardItem from "./Sections/CardItem"
import { continents, prices } from '../../utils/filterData'

/* UI */
const LandingPage = () => {
  // 상태 data
  const limit = 4;
  const [products, setProducts] = useState([])
  const [skip, setSkip] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [filters, setFilters] = useState({
    continents: [],
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
    // console.log("🟡 axios params", params);
    try {
      const response = await axiosInstance.get('/products', { params })

      if (loadMore) {
        setProducts([...products, ...response.data.products])
      } else {
        setProducts(response.data.products)
      }
      setHasMore(response.data.hasMore);

    } catch (error) {
      console.error(error)
    }
  }

  const handleLoadMore = () => {
    const body = {
      skip: skip + limit,
      limit,
      loadMore: true,
      filters,
    }
    fetchProducts(body)
    setSkip(skip + limit)
  }

  const handleFilters = (newFilteredData, category) => {
    const newFilters = { ...filters };
    newFilters[category] = newFilteredData;

    showFilteredResults(newFilters);
    setFilters(newFilters);
  }

  const showFilteredResults = (filters) => {
    const body = {
      skip: 0,
      limit,
      filters,
    }

    fetchProducts(body)
    setSkip(0)
  }


  return (
    <section>
      <div className="text-center m-7">
        <h2 className="text-3xl font-bold"> 여행 상품 사이트 </h2>
      </div>
      {/* filter */}
      <div className="flex gap-3">
        <div className='w-1/2'>
          <CheckBox
            continents={continents}
            checkedContinents={filters.continents}
            onFilters={filters => handleFilters(filters, "continents")}
          />
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
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 mt-5 text-white bg-black rounded-md hover:bg-gray-500">
            더 보기
          </button>
        </div>
      }
    </section>
  )
}

export default LandingPage
