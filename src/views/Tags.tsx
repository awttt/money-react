import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import Tag from './Tags/CreatTags';
import {Link} from 'react-router-dom';



const Tags:React.FC = ()=>{
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <ol>
        {tags.map((tag,key) =>
          <Link to={'/tag/'+tag}>
          <Tag key={tag} tag={tag}>
          </Tag>
          </Link>
        )}
      </ol>
    </Layout>
  )
}

export default Tags