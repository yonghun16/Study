## loading 처리

#### loading 처리
- 클라이언트에서 서버에 요청을 보내고, 그 요청을 응답받기까지는 시간이 걸린다.
- 일반적으로 수십 ms, 하지만 데이터 크기 미 첸트워크 환경에 따라 오래 걸리기도 함.

```jsx
import React, { useEffect, useState } from 'react';
import NewsItem from '../NewsItem';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNewsList();
  }, []);
  
  // async/await 를 사용한 fetch
  const getNewsList = async () => {
    setIsLoading(true);    // 로딩 시작
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a10272af5b7c45cdab54f574e2a24cbd');
    const data = await response.json();
    setNews(data.articles);
    setIsLoading(false);   // 로딩 완료
  };

  return (
    <div>
      {!isLoading && news.map((newsItem) => (         // 로딩이 아니면 (로딩이 끝났으면)
        <NewsItem {...newsItem} key={newsItem.url} />
      ))}
      {isLoading &&                                   // 로딩중이면
        <p>Loading...</p>
      }
    </div>
  );
};

export default NewsList;
```
