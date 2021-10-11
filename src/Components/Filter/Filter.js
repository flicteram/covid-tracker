import React,{useState} from "react";
import "./Filter.css"


function Filter({filter,setFilter}){
    const [isFocused,setIsFocused]=useState(false)
    return(
        <div className='inputContainer'>
            <input className="input" 
            onFocus={()=>setIsFocused(true)}
            onBlur={()=>setIsFocused(false)}
            value={''||filter}
            onChange={e=>setFilter(e.target.value)}
            placeholder='Search'/>
            <div className={isFocused?'inputImgFocused':'inputImg'}>
            </div>
        </div>
        
    )
}

export default Filter