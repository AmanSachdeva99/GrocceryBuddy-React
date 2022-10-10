import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Items = ({itemData,delteIt,editIt}) => {

   
  return (
    <div>
      <h4 style={{marginTop:"20px"}} align="center">List Items</h4>
     {itemData?.map((d)=>{
        return(
            <article className='grocery-item' key={d.id}>
            
            <p>{d.Item}</p>
            <div className='btn-container'>
              <button type='button' className='edit-btn' onClick={()=>editIt(d.id)}>Edit</button>
              <button type='button' className='delete-btn' onClick={()=>delteIt(d.id)}>Delete</button>
            
            </div>
            </article>
        )
     })}
    </div>
  )
}

export default Items
