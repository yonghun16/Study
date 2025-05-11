const BASE_URL = `https://api.coinpaprika.com/v1`

export async function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then(response =>
    response.json());
}

export async function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json());
}

export async function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json());
}

/* 교육용 노마드 코더 코인 API*/
// 기간은 1주일로 고정
export async function fetchCoinHistory(coinId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
}

/* coinpaprika API - 유료 전환으로 위의 노마드 코더 API로 대체
 * startDate와 endDate를 설정하여 기간을 정할 수 있음.
export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}
*/
