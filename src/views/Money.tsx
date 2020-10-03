import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
type Category = '-' | '+'

function Money() {
  const [selected,setSelected] = useState({
    tags: [] as string[],
    note:'',
    category :'-' as Category,
    amount:0
  })
  return (
    <MyLayout>
      {selected.tags.join(',')}
      <TagsSection selected={selected.tags}
                   onChange={(tags)=>setSelected({
                     ...selected,tags
                   })}/>

      <NotesSection/>

      <CategorySection/>

      <NumberPadSection/>


    </MyLayout>
  )

}

export default Money