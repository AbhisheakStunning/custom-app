import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


const vehicles=[
{brand:'volkswagen Tiguan', type:'SUV', color:'green', isfrut:false},
{brand:'Mahindra Scropio N', type:'SUV', color:'White', isfrut:false},
{brand:'Tata Harrier', type:'SUV', color:'Black', isfrut:true}


]




 function Destructure({brand,type,color}) {

 const user={

  name:'Avni',
  imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize:90

 }


  const[count,setCount]=useState(0)

 
  const handleClick=()=>{

    setCount(count + 1)


  }

 

  
  
  const items = vehicles.map(vehicle=>
  
    <li style={{textAlign:'left', padding:'20px', color:'white', background:'green', marginBottom:'20px'}}>
      {vehicle.brand} <span>is a {vehicle.type}</span> <span>{vehicle.color}</span> {vehicle.isfrut?'color':'magenta'}</li>
    
    )

  return (
    <>
      <ul>{items}</ul>
      <Button variant="primary" onClick={handleClick}>Click Me{count}</Button>{' '}
      {user.name}
      <img src={user.imageUrl}/>
      {user.imageSize}



    </>
  

    

  )
}

export default Destructure
