import styled from 'styled-components';
import React, { useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

type Props = {
  value:'-' | '+'
  onChange: (selected:'-' | '+')=>void;
}

const CategorySection:React.FC<Props> =(props)=>{
  const categoryMap = {'-':'支出','+':'收入'}
  type X = typeof categoryMap
  type Keys = keyof X
  // type Keys = keyof typeof categoryMap 计算出 categoryMap 的key的类型

  const [categoryList] = useState<Keys[]>(['-','+'])

  return(
    <Wrapper>
      <ul>
        {categoryList.map((c,key)=>
          <li className={props.value === c ?'selected':''}
              onClick={()=>{props.onChange(c)}}
              key={key}
          >{categoryMap[c]}</li>
        )}
      </ul>
    </Wrapper>
  )
}

export {CategorySection}