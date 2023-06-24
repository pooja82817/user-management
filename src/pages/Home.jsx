import React, { useState } from "react";
import "./home.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddUser from "./AddUser";

export default function Home() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  
  const [activeUser,setActiveUser] = useState(null)
  const [open, setOpen] = useState(false);
  const handleOpen = (u) => {
    setActiveUser(u)
    setOpen(true)
};
  const handleClose = () => setOpen(false);

  const [userData, setUserData] = useState([
    { id: 1, email: "test1@gmail.com", name: "Jon", phone: 1234567890 },
    { id: 2, email: "test2@gmail.com", name: "Cersei", phone: 1234567890 },
    { id: 3, email: "test3@gmail.com", name: "Jaime", phone: 1234567890 },
    { id: 4, email: "test4@gmail.com", name: "Arya", phone: 1234567890 },
    { id: 5, email: "test5@gmail.com", name: "Daenerys", phone: 1234567890 },
    { id: 6, email: "test6@gmail.com", name: "Ferrara", phone: 1234567890 },
    { id: 7, email: "test7@gmail.com", name: "Rossini", phone: 1234567890 },
    { id: 8, email: "test8@gmail.com", name: "Harvey", phone: 1234567890 },
  ]);


  const deleteUser = (id)=>{
        setUserData( [...userData].filter( (x) => x.id!=id ) )
  }

  

  return (
    <div className="main">
      <Button variant="contained" onClick={()=>handleOpen(null)}><i class="fa-solid fa-user-plus"></i>&ensp; Add New User</Button>
      <div className="cards">
        {userData.map((user) => {
          return (
            <div key={user.key} className="card">
              <h1>{user.name?.[0]}</h1>
              <div>
                <p>
                  {" "}
                  <b>Name:</b> {user.name}
                </p>
                <p>
                  {" "}
                  <b>Email:</b> {user.email}
                </p>
                <p>
                  {" "}
                  <b>Phone:</b> {user.phone}
                </p>
              </div>
              <div className="icons">
                <i onClick={()=>handleOpen(user)} class="fa-solid fa-pen-to-square"></i>
                <i onClick={()=>deleteUser(user.id)}  class="fa-solid fa-trash"></i>
              </div>
            </div>
          );
        })}
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <AddUser userData={userData} user={activeUser} setOpen={setOpen} setUserData={setUserData}  />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
