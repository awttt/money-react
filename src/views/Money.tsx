import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';



const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
type Category = '-' | '+'

const defaultFormData = {
  tags: [] as string[],
  note:'',
  category :'-' as Category,
  amount:0
}

function Money() {
  const [selected,setSelected] = useState(defaultFormData)
  const {tags,setTags}=useTags()
  type Selected = typeof selected;
  const onChange = (obj:Partial<Selected>)=>{
    setSelected({
      ...selected,
      ...obj
    })
  }
  const {records,addRecords} = useRecords()
  console.log(records);
  const _submit =()=>{
      addRecords(selected)
      alert('记录成功')
    setTags([...tags])
  }
  return (
    <MyLayout>
      {JSON.stringify(selected)}
      <hr/>

      <TagsSection value={selected.tags}
                   onChange={(tags)=>onChange({tags})}/>

      <NotesSection value = {selected.note}
                    onChange={(note)=>onChange({note})}/>

      <CategorySection value = {selected.category}
                       onChange={(category)=>onChange({category})}/>

      <NumberPadSection value = {selected.amount}
                        onChange={(amount)=>onChange({amount})}
                        onOk={_submit}
      />


    </MyLayout>
  )

}

export default Money