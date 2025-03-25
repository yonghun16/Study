import { useState } from 'react';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import Table from './Table';

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null); // asc(오름차순) || desc(내림차순)
  const [sortBy, setSortBy] = useState(null);       // 이름 || 점수 || 점수의 제곱
  const { config, data } = props;

  const handleClick = (label) => {
    // TODO - 정렬 화살표 클릭 시 정렬을 해주는 함수
    if (sortBy && label !== sortBy) {   // 기존의 정렬기준(sortBy)이 있고, 내가 지금 마우스로 누른 label이 그 정렬기준과 다른경우,
      setSortOrder('asc');              // ㄴ다시말해 다른 정렬기준을 선택한 경우
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      // TODO - 정렬된 데이터로 바꿔 끼우는 부분 들어갈 comparator 함수
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowDown />
      </div>
    );
  }
}

export default SortableTable;
