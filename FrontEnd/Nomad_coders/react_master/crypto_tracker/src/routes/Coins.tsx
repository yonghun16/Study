import { clear } from "console";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${props => props.theme.accentColor}
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

// interfaces
interface CoinInterface {
  "id": string,
  "name": string,
  "symbol": string,
  "rank": number,
  "is_new": boolean,
  "is_active": boolean,
  "type": string,
}

// 코인들 정보 메인 페이지 컴포넌트
function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);  // 코인 상태
  const [loading, setLoading] = useState(true);  // 로딩 바
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");   // API 데이터 받아오기
      const json = await response.json();                                     // JSON 변환
      setCoins(json.slice(0, 100));                                           // 100까지 자르기
      setLoading(false);                                                      // 로딩 완료
    })();
  }, [])

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading
        ? (<Loader>Loading...</Loader>)
        : (<CoinsList>
          {coins.map(coin =>
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                }}
                state={{
                  name: coin.name       // state를 따로 전달
                }}
              >
                <Img src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/${coin.symbol.toLowerCase()}.png`} />
                {coin.name} &rarr;
              </Link>
            </Coin>)
          }
        </CoinsList>
        )}
    </Container>
  );
}

export default Coins;
