import React, {useRef, useState} from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

const NotesSection:React.FunctionComponent =(props)=>{
  const [notes,setNotes]=useState('')
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur=()=>{
    if(refInput.current!==null){
      setNotes(refInput.current.value)
    }
  }
  console.log(notes);
  return(
        <Wrapper>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加备注"
                 // value={notes}
                 // onChange={(e)=>setNotes(e.target.value)}
                 // 受控组件写法
               ref={refInput}
                 defaultValue={notes}
                 onBlur={onBlur}
                 // 非受控组件写法
          />
        </label>
        </Wrapper>
      )
}

export {NotesSection}