import useFadeIn from "../Hooks/useFadeIn"

function UseFadeIn() {
  const fadeInH1 = useFadeIn(1, 0);
  const fadeInP = useFadeIn(3, 2);

  return (
    <div>
      <h1 {...fadeInH1} >Hello</h1>
      <p {...fadeInP}>lorem ipsum dolor sit amet</p>
    </div>
  )
}

export default UseFadeIn
