import styled from 'styled-components';
import React, {useState} from 'react';
import Icon from '../../components/icon';
import {useTags} from '../../hooks/useTags';

const Wrapper = styled.section`
  background: #FFFFFF; padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  > ol { margin: 0 -12px;
    > li{
       background: #D9D9D9; border-radius: 18px;
       display:inline-block; padding: 3px 18px; 
       font-size: 14px; margin: 8px 12px;
    }
    > svg{
     &.selected{
       background: red;
      
       }
    }
  }
  > button{
    background:none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value:string[]
  onChange: (selected:string[] )=>void;
}
const TagsSection:React.FC<Props> = (props)=>{
  const {tags,setTags}=useTags()
  const selectedTags = props.value
  const onAddTag =()=>{
   const tagName = window.prompt('新标签的名称为')
    if (tagName!==null){
      setTags([...tags,tagName])
    }
  }
  const onToggleTag=(tag:string)=>{
    const index = selectedTags.indexOf(tag)
    if (index < 0){
      props.onChange([...selectedTags,tag])
    }else{
      props.onChange(selectedTags.filter(t=>t!==tag))
    }
  }
  return(
    <Wrapper>
      <ol>
        {tags.map((tag,key)=>
        <Icon name={tag} key={key}
              onClick={()=>onToggleTag(tag)}
              className={selectedTags.indexOf(tag)>=0 ? 'selected' : ''}
        />
        )}
      </ol>
      <button onClick={onAddTag} >新增标签</button>
    </Wrapper>
  )
}



export {TagsSection};