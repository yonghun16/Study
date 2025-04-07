import { useEffect, useState } from 'react'
import axios from 'axios';
import Products from './Products';
import Options from './Options';

const Type = ({ orderType }: { orderType: string }) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType])

  // 상품 로드
  const loadItems = async (orderType: string) => {
    try {
      const response = await axios.get(`http://localhost:4000/${orderType}`)
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const ItemComponent = orderType === "products" ? Products : Options;

  const optionsItems = items.map(item => (
    <ItemComponent
      key = {item.name}
      name = {item.name}
      imagePath = {item.imagePath}
      description = {item.description}
    />
  ))

  return (
    <>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격:</p>
      <div
        style={{
          display: 'flex',
          flexDirection: orderType === 'options' ? 'column' : 'row'
        }}
      >
      {optionsItems}
      </div>
    </>
  )
}

export default Type
