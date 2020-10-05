import {useState} from 'react';

const useTags = ()=>{
  const [tags,setTags] = useState<string[]>(['衣','食','行'])
  return {tags,setTags}
}

export {useTags}