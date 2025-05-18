import usePreventLeave from "../Hooks/usePreventLeave"

function UsePreventLeave() {
  const { enablePrevent, disablePrevent  } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}> Protect </button>
      <button onClick={disablePrevent}> Unprotect </button>
    </div>
  )
}

export default UsePreventLeave
