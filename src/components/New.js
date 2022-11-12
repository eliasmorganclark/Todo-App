import ViewAll from "./ViewAll";
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
import Data from "./Data.css";
import {  useNavigate } from "react-router";

export default function New() {
  const baseURL = "http://localhost:3000/data";
  
  const [newTask, setNewTask] = useState({
    name: "",
    due: "",
    priority:"",
    progress: "open"
  })
  const navigate = useNavigate();

  function ReloadPage() {
    setNewTask({
      name: "",
    due: "",
    priority:"",
    progress: "open"
    });
   navigate("/v1/todos"); 
  }
 
    
 const Submitty = (e) => {
    e.preventDefault()
    console.log(newTask);
    axios.post(baseURL, newTask).then((response) => {
      ReloadPage();
    });
  }

  return (
    <form id="newTaskForm">
      <Box marginBottom="space80">
        <Label htmlFor="name">Task Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Input task name here!"
          onChange={(e) => setNewTask({...newTask, name: e.target.value})}
          value={newTask.name}
        />
      </Box>
      <Box marginBottom="space80">
        <Label htmlFor="due">Due Date</Label>
        <DatePicker id="due" onChange={(e) => setNewTask({...newTask, due: e.target.value})} value={newTask.due}/>
        <HelpText id="due">When is your task due to be completed?</HelpText>
      </Box>
      <Box marginBottom="space80">
        <Label htmlFor="priority">Priority level</Label>
        <Select id="priority" defaultValue="select" onChange={(e) => setNewTask({...newTask, priority: e.target.value})}>
          <Option disabled value="select">Select a level</Option>
          <Option value="low">low</Option>
          <Option value="medium">medium</Option>
          <Option value="critical">critical</Option>
        </Select>
      </Box>
      <Button variant="primary" onClick={Submitty}> Submit </Button>
    </form>
  );
}
