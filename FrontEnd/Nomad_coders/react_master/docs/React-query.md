# React Query

```bash
npm i @tanstack/react-query
npm i -D @tanstack/react-query-devtools
```

### React Query란?
- React Query는 React 애플리케이션에서 서버 상태 (server state) 를 효율적으로 가져오고, 캐시하고, 동기화하고, 업데이트할 수 있게 도와주는 라이브러리. 
- 간단히 말하면, API 요청을 더 쉽고 스마트하게 관리할 수 있게 도와주는 도구
- React Query는 특히 비동기 데이터가 많은 웹 앱(예: 대시보드, 채팅, 게시판 등)에 유용

#### React Query를 쓰면 좋은 이유
- 직접 useEffect, axios, useState 조합으로 요청 로직을 짜는 것보다 더 간단하고 유지보수가 쉬움
- 데이터 일관성을 자동으로 맞춰줌
- 로딩 상태, 에러 상태 관리가 매우 쉬움


#### React Query의 주요 기능
1. 데이터 fetching : useQuery와 같은 훅을 사용해서 REST API, GraphQL 등에서 데이터를 쉽게 가져올 수 있음.
2. 자동 캐싱       : 한 번 가져온 데이터는 자동으로 캐싱되며, 재요청을 줄일 수 있음.
3. 배경 업데이트   : 백그라운드에서 자동으로 데이터를 다시 가져와 최신 상태를 유지할 수 있음.
4. Refetching 제어 : 포커스 재진입 시, 윈도우 리사이즈 시 등 다양한 타이밍에 데이터를 다시 불러올 수 있음.
5. Mutations 지원  : POST, PUT, DELETE 요청 등도 useMutation으로 쉽게 관리할 수 있음.
6. 에러 처리       : API 요청 실패 시 적절한 에러 핸들링을 쉽게 할 수 있음.
7. Devtools 제공   : 어떤 요청이 어떤 상태인지 쉽게 디버깅할 수 있음. 


### QueryClient
- QueryClient는 모든 서버 상태(query/mutation 등)의 캐시와 설정을 관리하는 중심 객체
- 이 객체는 모든 useQuery, useMutation 훅에서 데이터를 공유하게 해줌.
- 캐싱, refetch 정책, 에러 핸들링, stale time 등의 기본 설정을 여기에 담을 수 있음.
```tsx
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,  // 창 포커싱 시 자동 refetch 방지
      staleTime: 1000 * 60 * 5,     // 5분 동안 stale 아님
    },
  },
});
```

### QueryClientProvider
- QueryClientProvider는 React Context를 통해 QueryClient를 앱 전체에 주입해주는 컴포넌트
```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourAppComponents />
    </QueryClientProvider>
  );
}
```

### useQuery
- useQuery는 주로 React Query 또는 최신 명칭인 TanStack Query에서 제공하는 훅(Hook)으로, React 애플리케이션에서 **서버 상태(server state)**를 비동기적으로 가져오고 관리하는 데 사용
- useQuery는 API 호출이나 비동기 데이터 페칭 로직을 단순화하고, 캐싱, 로딩 상태 관리, 에러 처리, 자동 재시도, 백그라운드 리패칭 같은 기능을 내장하고 있는 고수준 훅

#### useQuery 장점
- 자동 캐싱               : 동일한 queryKey를 가진 요청은 캐시에서 가져옴.
- 자동 리페칭             : 포커스, 리마운트, 시간 경과 등 조건에 따라 자동으로 데이터 갱신.
- 비동기 상태 관리 단순화 : isLoading, isError, data, error 같은 상태값 자동 제공.
- 전역 상태 저장소 불필요 : 서버 상태 관리를 쉽게 로컬에서 처리 가능.

#### useQuery 기본 사용법과 옵션들
```tsx
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

// API 요청 함수
const fetchUser = async () => {
  const { data } = await axios.get('/api/user')
  return data
}

// 적용 컴포넌트
const MyComponent = () => {
  // useQuery를 사용한 쿼리
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>

  return <div>{data.name}</div>
}
```
- queryKey             : 쿼리의 고유 키. 같은 키를 가진 쿼리는 **캐시를 공유**함.
- queryFn              : 데이터를 가져오는 함수 (보통 async 함수).
- enabled              : false일 경우 쿼리를 자동 실행하지 않음. (조건부 요청에 유용)
- staleTime            : 데이터가 “신선”한 상태로 유지되는 시간 (ms). 이 시간 내엔 재요청 안 함.
- refetchOnWindowFocus : 창 포커스 시 자동으로 다시 가져올지 여부. (기본값 true)
- retry                : 실패 시 자동 재시도 횟수 (기본값 3) 또는 함수 지정 가능

#### 2개의 이상의 useQuery 쿼리  
```tsx
import { useQuery } from '@tanstack/react-query'
import { fetchCoinInfo } from "../api";

function Coin() {
  const { coinId } = useParams() as { coinId: string };            // url에서 받은 코인ID 상태

  const {data: infoData, isLoading: infoLoading} = useQuery<InfoData>({
    queryKey: ["info", coinId],             // ["info", "btc-bitcoin"] 
    queryFn: () => fetchCoinInfo(coinId),
  });

  const {data: tickersData, isLoading: tickersLoading} = useQuery<PriceData>({
    queryKey: ["tickers", coinId],          // ["tickers", "btc-bitcoin"]
    queryFn: () => fetchCoinInfo(coinId),
  });

  return (
    <>
      <span>{infoData?.symbol}</span>
      <span>{tickersData?.total_supply}</span>
    </>
  );
```
```tsx
// api.ts
const BASE_URL = `https://api.coinpaprika.com/v1`

export async function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json());
}

export async function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json());
}
```

#### refetchInterval
- refetchInterval은 React Query에서 주기적으로 데이터를 자동 갱신(재요청)하게 해주는 옵션
- refetchInterval의 값은 밀리초(ms) 단위
- 탭이 백그라운드 상태일 때는 자동으로 중단됩니다. (브라우저 최적화 때문)
- refetchOnWindowFocus와 함께 사용하면 창이 다시 포커스될 때에도 리패치 가능
```tsx
useQuery({
  queryKey: ['someKey'],
  queryFn: fetchData,
  refetchInterval: 5000 // 5초마다 fetchData를 재요청
});
```

### ReactQueryDevtools
- ReactQueryDevtools는 React Query 라이브러리의 개발자 도구. 
- React Query는 서버 상태 관리(예: API 호출 결과 캐싱, 동기화 등)를 도와주는 강력한 도구이고, 
- ReactQueryDevtools는 이를 시각적으로 디버깅할 수 있게 해줌.

#### 주요 기능
1. 쿼리 상태 확인     : 각 쿼리의 상태(idle, loading, error, success 등), 마지막 fetch 시간, 캐시 만료 시간 등을 확인할 수 있습니다.
2. 데이터 미리보기    : 캐시에 저장된 데이터의 내용을 직접 볼 수 있습니다.
3. 쿼리 강제 리패치   : 버튼 클릭 한 번으로 특정 쿼리를 다시 fetch할 수 있습니다.
4. 쿼리 삭제 / 무효화 : 특정 쿼리를 캐시에서 제거하거나 무효화(invalidate)할 수 있습니다.
5. 성능 디버깅        : 쿼리의 fetch 횟수, 성공/실패 여부 등을 통해 API 성능을 확인할 수 있습니다.

#### 사용법
```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 앱 컴포넌트들 */}
      <YourComponents />

      {/* Devtools는 개발 모드에서만 보이게 설정 가능 */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```
