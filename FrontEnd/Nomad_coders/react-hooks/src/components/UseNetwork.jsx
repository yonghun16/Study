import useNetwork from "../Hooks/useNetwork";

function UseNetwork() {
  const handleNetworkChange = (online) => {
    console.log(online ? 'We just went online' : 'We just went offline');
  }
  const onLine = useNetwork(handleNetworkChange);

  return (
    <div>
      <h1>{onLine ? 'Online' : 'Offline'}</h1>
    </div>
  )
}

export default UseNetwork
