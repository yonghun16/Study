# DataTypes

### DataTypes 추출
- Store as global vaiable
- Object.values(temp1).map(v => typeof v).join()
```tsx

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {             // 객체 안의 객체 타입 지정
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;                    // PriceData.quotes.USD.price 
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const [priceInfo, setPriceInfo] = useState<PriceData>(); // 코인 가격 정보 상태

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>  {/* 만약 state가 없으면 undefined가 되니 "Loading..." 을 출력*/}
      </Header>
      {loading
        ? (<Loader>Loading...</Loader>)
        : priceInfo?.quotes.USD.price}   // 객체 호출
    </Container>
  )
}

```
