import useBeforeLeave from "../Hooks/useBeforeLeave";

function UseBeforeLeave() {
  const begForLife = () => alert("Please don't leave");

  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default UseBeforeLeave
