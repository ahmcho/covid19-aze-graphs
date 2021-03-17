import {useState,useEffect} from 'react';

const useOnline = () => {
    const [online, setOnline] = useState(true);
    useEffect(() => {
        if(!navigator.onLine){
          setOnline(false);
        } else {
          setOnline(true);
        }
    },[]);
    return online;
}

export default useOnline;