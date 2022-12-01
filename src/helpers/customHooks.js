import {useState,useEffect} from 'react'

export function useDebounce(value,delay){
    const [delaySearch,setDelaySearch]=useState();
    useEffect(() => {
        let timer = setTimeout(() => {
            setDelaySearch(value)
        }, delay);
      return () => {
       clearTimeout(timer)
      }
    }, [delay, value])
    return delaySearch;
}