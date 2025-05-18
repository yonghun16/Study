import useScroll from "../Hooks/useScroll"

function UseScroll() {
  const {y} = useScroll();

  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "green"}}>Hi</h1>
    </div>
  )
}

export default UseScroll
