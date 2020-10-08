import Layout from '../components/Layout';
import React from 'react';

import Tag from './Tags/CreatTags';
import {Link} from 'react-router-dom';
import {useRecords} from '../hooks/useRecords';


const Tags:React.FC = ()=>{

  const {records,addRecords} = useRecords()
  let arr1:any = []

  if (records){
    Object.values( Object.values(records)).forEach((key)=>
    arr1.push(Object.values(key))
    )
  }

  return (
    <Layout>
      <ol>

        {
          arr1.map((value:any,key:any)=>
          <Link to={'/tag/'+value[0]} key={key}>
          <Tag key={key}
               tag={value[0]}
               note={value[1]}
               category={value[2]}
               amount={value[3]}/>
          </Link>
        )
        }

      </ol>
    </Layout>
  )
}

export default Tags