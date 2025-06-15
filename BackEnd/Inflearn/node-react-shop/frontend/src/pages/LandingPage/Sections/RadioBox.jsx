const RadioBox = ({ prices, checkedPrices, onFilters }) => {
  return (
    <div className="p-2 mb-3 bg-gray-100 rounded-md">
      {prices?.map(price => (
        <div key={price._id}>
          <input 
            type="radio"
            checked={checkedPrices === price.array}
            onChange={event => onFilters(event.target.value)}
            id={price._id}
            value={price._id}
          />
          {" "}
          <label htmlFor={price._id}>{price.name}</label>
        </div>
      ))}
    </div>
  )
}

export default RadioBox
