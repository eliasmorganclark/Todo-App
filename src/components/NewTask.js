import DataGet from "./Data";
import React from "react";
import axios from "axios";
import { useState } from "react";
import {
  DatePicker,
  Box,
  Label,
  Input,
  HelpText,
  Select,
  Option,
  Button,
} from "@twilio-paste/core";
import { useRef } from "react";

export default function NewTask() {
  const baseURL = "http://localhost:3000/data";

  const nameRef = React.useRef("");
  const dueRef = React.useRef("");
  const priorityRef = React.useRef("");
  
  const [name, setName] = useState("");
  const newtask = {
    name: name,
    progress: "open"
  };
 
    
  function Submitty() {
   
    console.log(newtask);
    // const newTaskJson = JSON.stringify(newtask);
    axios.post(baseURL, newtask).then((response) => {
      //TODO: redirect back to main list ? put some sort of alert in saying it worked?
    });
  }

  return (
    <form>
      <Box marginBottom="space80">
        <Label htmlFor="name">Task Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Input task name here!"
          value=
        />
      </Box>
      <Box>
        <Label htmlFor="due">Due Date</Label>
        <DatePicker id="due" ref={dueRef} />
        <HelpText id="due">When is your task due to be completed?</HelpText>
      </Box>
      <Box>
        <Label htmlFor="priority">Priority level</Label>
        <Select id="priority" ref={priorityRef}>
          <Option value="low">low</Option>
          <Option value="medium">medium</Option>
          <Option value="critical">critical</Option>
        </Select>
      </Box>
      <Button variant="primary" onClick={Submitty}> Submit </Button>
    </form>
  );
}
