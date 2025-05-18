import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(opts, axiosIntance = axios) {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  });

  const [trigger, setTrigger] = useState(0);

  if (!opts.url) return;

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  }

  useEffect(() => {
    axiosIntance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data
        });
      }).catch((error) => {
        setState({
          ...state,
          loading: false,
          error
        });
      })
  }, [trigger]);

  return {...state, refetch };
}

export default useAxios
