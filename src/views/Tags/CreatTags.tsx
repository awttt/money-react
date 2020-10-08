import styled from 'styled-components';
import React from 'react';
import Icon from '../../components/icon';

const Wrapper = styled.div`
 .icon {
      border:1px solid black;
      border-radius: 50%;
       height:40px;
       width:40px
    }
.left {
  display:flex;
  padding-left:20px;
  margin-top:10px;
}
.right{
  padding-right:10px;
  margin-top:10px;
}
.olwrapper{
  display:flex;
  justify-content:space-between;
}
.message{
  padding-left:10px;
}
`

type Props ={
  tag:string,
  note:string,
  amount:number,
  category:'+'|'-'
}

 const Tag:React.FC<Props> = (props)=> {
  return(
    <Wrapper className='wrapper'>

      <div className='olwrapper'>
        <div className='left'>
          <div className='icon'>
              <Icon name={props.tag}/>
          </div>
          <div className='message'>
            <div>
              {props.tag}
            </div>
            <div>
              备注:{props.note}
            </div>
          </div>
        </div>
        <div className='right'>
          {props.category}{props.amount}
        </div>
      </div>
      <hr/>

    </Wrapper>
  )
}

export default Tag
