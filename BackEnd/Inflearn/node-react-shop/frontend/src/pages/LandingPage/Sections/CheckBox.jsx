const CheckBox = ({ continents, checkedContinents, onFilters }) => {
  const handleToggle = (continentId) => {
    // 현재 누른 checkbox가 이미 누른 checkbox인지 확인
    const currentIndex = checkedContinents.indexOf(continentId); // 기존의 checkedContinents에서 현재 누른 currentIndex를 추출

    const newChecked = [...checkedContinents];  // 배열 복사

    if (currentIndex === -1) {  // 누른적이 없다면 -1 반환
      newChecked.push(continentId); // 새로 추가.
    } else {
      newChecked.splice(currentIndex, 1)  // 누른적이 있다면 currentIndex부터 시작해서 1개 값들을 제거
    }
    onFilters(newChecked)  // 적용
  }
  return (
    <div className="p-2 mb-3 bg-gray-100 rounded-md">
      {continents?.map(continent => (
        <div key={continent._id}>
          <input
            type="checkbox"
            onChange={() => handleToggle(continent._id)}
            checked={checkedContinents.indexOf(continent._id) === -1 ? false : true}
          />{" "}
          <label>{continent.name}</label>
        </div>
      ))}
    </div>
  )
}

export default CheckBox
