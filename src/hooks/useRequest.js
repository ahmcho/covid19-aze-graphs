import {useState,useEffect} from 'react';
import axios from 'axios';

const useRequest = (url) => {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let axiosResponse = await axios.get(url);
                setResponse(axiosResponse.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    },[]);

    return response;
}

export default useRequest;