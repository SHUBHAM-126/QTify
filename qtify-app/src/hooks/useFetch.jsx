import { useEffect, useState } from "react";
import endpoint from "../api/endpoint";
import axios from "axios";

export default function useFetch(path){

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true)
                const response = await axios.get(`${endpoint}${path}`)
                setData(response.data)
                setLoading(false)
            }
            catch(err){
                console.log(err)
                setErr(err.message)
                setLoading(false)
                setData([])
            }
        }

        fetchData()

    }, [])

    return {response: {data, loading, err}}
}