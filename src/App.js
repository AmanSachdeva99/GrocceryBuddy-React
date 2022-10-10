import logo from './logo.svg';
import './App.css';
import Items from './Component/Items';
import { useState,useEffect } from 'react';
import axios from 'axios'

function App() {

const [data,setData]=useState()
const [itemData,setItemData]=useState([])
const [btnStatus,setBtnStatus]=useState(false)
const [alertStatus,setAlertStatus]=useState(false)
const [updateStatus,setUpdateStatus]=useState(false)
const[idd,setIdd]=useState()

useEffect(()=>{
  getData()
},[])

const getData=async ()=>{
  await axios.get("https://6335fc3f65d1e8ef26669869.mockapi.io/crud")
  .then((res)=>{
      console.log(res)
      setItemData(res.data)
      
      
  })
}


const sendData=()=>{
  setBtnStatus(true)
  axios.post("https://6335fc3f65d1e8ef26669869.mockapi.io/crud",{
    Item:data
  }).then((res)=>{
    getData()
    setBtnStatus(false)
    setAlertStatus(true)
    setData('')
  })
}

const delteIt=(id)=>{
  axios.delete(`https://6335fc3f65d1e8ef26669869.mockapi.io/crud/${id}`)
  .then((res)=>{
    console.log(res)
    getData()
  })  
 }
const edit=(id)=>{
  setBtnStatus(true)
  axios.put(`https://6335fc3f65d1e8ef26669869.mockapi.io/crud/${id}`,{
    Item:data
  }).then((res)=>{
    getData()
    setBtnStatus(false)
    setUpdateStatus(false)
    
  })
}

 const editIt=(id)=>{
  setUpdateStatus(true)
  setIdd(id)
  axios.get(`https://6335fc3f65d1e8ef26669869.mockapi.io/crud/${id}`)
  .then((res)=>{
    console.log(res)
   setData(res.data)
   
  })  
 }


  return (
    <section className='section-center'>
      
      <h2 align="Center">Groccery Bud</h2>
      {itemData.length>0?<h2>List</h2>:<h2>Add Items</h2>}
      {alertStatus && < div className='grocery-item'><h4>Item is added</h4>
       <button className='edit-btn' onClick={()=>setAlertStatus(false)}>
        close</button></div>}
      
      <div className='form-control'>
      <input type="text" className='grocery' id="id" placeholder='add Items' onChange={(e)=>{setData(e.target.value)}}  value={data?.Item}></input>
      {updateStatus? <button className='submit-btn' onClick={()=>edit(idd)} disabled={btnStatus}>Update</button>:
      <button className='submit-btn' onClick={sendData} disabled={btnStatus}>Add</button>}
      </div>
      <Items itemData={itemData} delteIt={delteIt} editIt={editIt}></Items>
      <button className='clear-btn' onClick={()=>{setItemData([])}}>Clear List</button>
      </section>
  );
}

export default App;
