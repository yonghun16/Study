import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

// styled-components 
const Container = styled.div`
  padding: 0px 20px;
  max-width:  480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display:  flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

// interfaces

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

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
  quotes: {
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
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

// 코인 정보 컴포넌트
function Coin() {
  const [loading, setLoading] = useState(true);                    // 로딩 상태
  const { coinId } = useParams() as { coinId: string };            // url에서 받은 코인ID 상태
  const { state } = useLocation() as { state: { name: string } };  // <Link> 즉 Router에서 받은 상태(코인정보)
  const [info, setInfo] = useState<InfoData>();                  // 선택된 코인 정보 상태
  const [priceInfo, setPriceInfo] = useState<PriceData>();       // 코인 가격 정보 상태

  useEffect(()=>{
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();

      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      setInfo(infoData);
      setPriceInfo(priceData);

      setLoading(false);
    })();
  }, [])

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>  {/* 만약 state가 없으면 undefined가 되니 "Loading..." 을 출력*/}
      </Header>
      {loading
        ? (<Loader>Loading...</Loader>)
        : priceInfo?.quotes.USD.price}
    </Container>
  )
}

export default Coin;
