import React, { useEffect, useState} from 'react'
import useTitle from "../Hooks/useTitle"

function UseTitle() {
  const titileUpdate = useTitle('Loading...');

  useEffect(() => {
    setTimeout(() => {
      titileUpdate('Home')
    }, 2000);
  }, [titileUpdate])

  return (
    <div>Change title to Home after 2 seconds</div>
  )
}

export default UseTitle
