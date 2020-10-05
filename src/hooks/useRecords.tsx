import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem ={
  tags:string[],
  note:string;
  category:'+' |'-',
  amount:number
}

export const useRecords=()=>{
    const [records,setRecords] = useState<RecordItem[]>([])
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('records',JSON.stringify(records))
  },[records])
    const addRecords = (record:RecordItem) =>{
      setRecords([...records,record])
    }

    return {records,addRecords}
}
