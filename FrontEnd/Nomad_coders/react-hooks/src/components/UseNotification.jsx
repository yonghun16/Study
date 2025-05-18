import useNotification from "../Hooks/useNotification"

function UseNotification() {
  const triggerNotif = useNotification("Can I have a cookie?", { body: "I'm a cookie" });

  return (
    <div>
      <button onClick={triggerNotif}>Show Notification</button>
    </div>
  )
}

export default UseNotification
