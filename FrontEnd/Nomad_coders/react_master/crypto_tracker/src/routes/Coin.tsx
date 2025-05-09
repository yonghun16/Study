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

// 코인 정보 컴포넌트
function Coin() {
  const [loading, setLoading] = useState(true);                    // 로딩 상태
  const { coinId } = useParams() as { coinId: string };            // url에서 받은 코인ID 상태
  const { state } = useLocation() as { state: { name: string } };  // <Link> 즉 Router에서 받은 상태(코인정보)
  const [info, setInfo] = useState({});                            // 선택된 코인 정보 상태
  const [priceInfo, setPriceInfo] = useState({});                  // 코인 가격 정보 상태

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
        : null}
    </Container>
  )
}

export default Coin;
