import useFullscreen from "../Hooks/useFullscreen"

function UseFullscreen() {
  const onFullS = (isFull) => {
    console.log(isFull ? 'We just went fullscreen' : 'We just exited fullscreen');
  }

  const { element, triggerFull, exitFull } = useFullscreen(onFullS);

  return (
    <div>
      <div ref={element} >
        <img
          src="https://static01.nyt.com/images/2025/05/08/multimedia/00nat-project-esther-01-mgfl/00nat-project-esther-01-mgfl-threeByTwoMediumAt2X.jpg"
          width="500"
        />
        <br />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Fullscreen</button>
    </div>
  )
}

export default UseFullscreen
