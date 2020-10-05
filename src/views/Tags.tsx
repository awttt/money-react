import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../hooks/useTags';
import Tag from './Tags/CreatTags';
import {Link} from 'react-router-dom';



const Tags:React.FC = ()=>{
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <ol>
        {tags.map((tag,key) =>
          <Link to={'/tag/'+tag} key={key}>
          <Tag key={key} tag={tag}>
          </Tag>
          </Link>
        )}
      </ol>
    </Layout>
  )
}

export default Tags