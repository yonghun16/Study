import useInput from '../../Hooks/useInput'

function UseInput() {
  const nameInput = useInput("Mr.");
  const emailInput = useInput('@');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', nameInput.value);
    console.log('Email:', emailInput.value);
    nameInput.reset();
    emailInput.reset();
  };

  return (
    <div>
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          {...nameInput.bind} />
        <input
          type="email"
          placeholder="Email" 
          {...emailInput.bind}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UseInput
