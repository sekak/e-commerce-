import axios from "axios";
import { useEffect, useState } from "react";
import { makeRequest } from "./makeRequest";

function useFetched(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
    try{
        setLoading(true)
        const res = await makeRequest.get(url);
        setData(res.data.data);

    }catch(err){
        setError(true)
    }
    setLoading(false)
    };
    FetchData();
  }, [url]);

  return {data,error,loading};
}

export default useFetched;
