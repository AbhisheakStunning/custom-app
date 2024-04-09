
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


function Playbutton({message, onplay, onpause,}) {

  const[playing, setPlaying]=useState(false)



    function handleClick(){


        
       if(playing) onpause()
       else onplay();

       setPlaying(!playing)
       
    }
  

  return (

    <>
    <Button variant="success" size='lg' onClick={handleClick}>{message}{playing?'⏸️':'▶️'} </Button>

   

    </>
  
 
  )
}

export default Playbutton