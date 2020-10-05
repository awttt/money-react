import {useEffect, useRef, useState} from 'react';
import {useUpdate} from './useUpdate';

const useTags = ()=>{
  const [tags,setTags] = useState<string[]>(['衣','食','行']);
  useEffect(()=>{setTags(JSON.parse(window.localStorage.getItem('tags')||'[]'))},[])
useUpdate(()=>{
  window.localStorage.setItem('tags',JSON.stringify(tags))
},[tags])

  return {tags,setTags}
}

export {useTags}