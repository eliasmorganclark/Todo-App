import { Button, AlertDialog } from "@twilio-paste/core";
import { DeleteIcon } from "@twilio-paste/icons/esm/DeleteIcon";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Delete({id}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const baseURL = "http://localhost:3000/data/";
  const navigate = useNavigate();


  const Deletey = () => {
    
    console.log("Deleted @ " + id);
   
    axios.delete(baseURL + id).then((response) => {
      //TODO: refresh data lol 
    });
  };

  return (
    <div>
      <Button variant="destructive_secondary" size="icon" onClick={handleOpen}>
        <DeleteIcon decorative={false} title="Delete Task" />
      </Button>
      <AlertDialog
        heading="Delete task?"
        isOpen={isOpen}
        destructive
        onConfirm={() => {Deletey(id)}}
        onConfirmLabel="Delete Task"
        onDismiss={handleClose}
        onDismissLabel="Cancel"
      >
        Are you sure you wish to delete this task from your to-do board? This
        action can not be undone.
      </AlertDialog>
    </div>
  );
}
