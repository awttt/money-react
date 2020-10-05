import React from 'react';
import styled from 'styled-components';
import Icon from '../components/icon';
import Layout from '../components/Layout';

const Wrapper = styled.div`
  margin:20px;
  display: flex;
   flex-direction:column;
 
  height:50vh;
  background: #FFFFFF;
  border-radius:10px ;
  hr{
  margin-top: 100px;
  background: black;
  }
.icon{
    height:40px;
       width:40px;
  margin-left:45%;
  margin-top:40px;
}

.money{
  margin-left:45%;
  margin-top:15px;
}

.notes{
   margin-left:15%;
  margin-top:60px;
}

.buttonWrapper{
  margin-top: 10px;
  display:flex;
  justify-content: space-around;
}

button{
  border:none;
  font-size:20px;
}
`
const TagEdit:React.FC =()=>{
    return(
      <Layout>
      <Wrapper>
          <Icon name={'衣'} className={'icon'}></Icon>
          <div className={'money'}>-30</div>
          <div className={'notes'}>备注:</div>
          <hr/>
          <div className='buttonWrapper'>
          <button>删除</button>|
          <button>编辑</button>
          </div>
      </Wrapper>
      </Layout>
    )
}

export {TagEdit}