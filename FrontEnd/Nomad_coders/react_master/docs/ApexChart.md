# ApexChart

- https://apexcharts.com/
- https://apexcharts.com/docs/react-charts/
```bash
npm install --save apexcharts react-apexcharts
```

### ApexChart에 대해서
- ApexCharts는 현대적인 웹 애플리케이션에서 데이터를 시각화하기 위해 널리 사용되는 JavaScript 기반의 오픈소스 차트 라이브러리입니다. 특히 React, Vue, Angular와 같은 프레임워크와도 잘 통합되며, 다양한 차트 유형(선형, 막대, 원형, 영역, 혼합 등)을 제공하여 대시보드나 리포트 시스템 구축에 유용합니다.

#### 주요특징 
- 다양한 차트 유형 (Line, Bar, Area, Pie, Radar 등)
- 반응형(Responsive) 디자인
- 상호작용 가능 (툴팁, 줌, 팬 등)
- 풍부한 커스터마이징 옵션
- React/Vue/Angular용 래퍼 지원

### React ApexChart 예제
#### SalesChart.tsx
```tsx
// src/components/SalesChart.tsx

import React from 'react';
import Chart from 'react-apexcharts';

const SalesChart: React.FC = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      id: 'sales-line-chart'
    },
    xaxis: {
      categories: ['1월', '2월', '3월', '4월', '5월']
    },
    title: {
      text: '월별 매출',
      align: 'center',
      style: {
        fontSize: '18px'
      }
    }
  };

  const series = [
    {
      name: '매출',
      data: [120, 200, 150, 300, 250]
    }
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width="600"
      height="350"
    />
  );
};

export default SalesChart;
```
#### App.tsx
```tsx
// src/App.tsx

import React from 'react';
import SalesChart from './components/SalesChart';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <SalesChart />
    </div>
  );
}

export default App;
```
