import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


export default function AddUser( {userData,setUserData,setOpen,user } ) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


    useEffect(()=>{
        if(user!=null){
            setName(user.name)
            setEmail(user.email)
            setPhone(user.phone)
        }
    },[user])

  

  const addUser = () => {
    if(name=="" || email=="" || phone==""){
      alert('Fill all detials')
    } else{
      let newUser = {
        id: userData.length + 1,
        name: name,
        email: email,
        phone: phone,
      };
      setUserData([newUser, ...userData]);
      setOpen(false)
    }
   
  };

  return (
    <div>
      <form action="">
        <Box>
          <TextField  sx={{ m: 1 }}   value={name}    onChange={(e)=> setName(e.target.value)  }  id="outlined-basic" label="Name" variant="outlined" />
          <TextField  sx={{ m: 1 }}   value={email}    onChange={(e)=> setEmail(e.target.value)  }  id="outlined-basic" label="Email" variant="outlined" />
          <TextField  sx={{ m: 1 }}   value={phone}    onChange={(e)=> setPhone(e.target.value)  }  id="outlined-basic" label="Phone" variant="outlined" />
        </Box>

        <Button sx={{ m: 1 }} onClick={addUser}  variant="contained">Add</Button>
      </form>
    </div>
  );
}
