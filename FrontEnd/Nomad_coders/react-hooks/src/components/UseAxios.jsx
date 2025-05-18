import useAxios from "../Hooks/useAxios"

function UseAxios() {
  const { data, loading, error, refetch } = useAxios({
    url: 'https://yts.mx/api/v2/list_movies.json',
  })

  // console.log(`data: ${JSON.stringify(data)}\nloading: ${loading}\nerror: ${error}`);

  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading? 'Loading' : 'Loaded'}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  )
}

export default UseAxios
