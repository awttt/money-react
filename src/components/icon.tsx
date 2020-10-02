import React, {MouseEventHandler} from 'react';


type Props = {
  name:string
  onClick?: MouseEventHandler
  className?:string
}



const Icon = (props:Props)=>{
  return(
  <svg className={`icon ${props.className}`}
       onClick={props.onClick}

  >
    <use xlinkHref={'#'+props.name}/>
  </svg>

  )
}

export default Icon