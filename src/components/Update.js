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
import Todo from "./Todo";
import { useParams } from "react-router";

export default function Update(props) {
  const baseURL = "http://localhost:3000/data/";
 

  const [thisTask, setThisTask] = useState({
    id: props.prop.id,
    name: props.prop.name,
    due: props.prop.due,
    priority: props.prop.priority,
    progress: props.prop.progress
  })
  const navigate = useNavigate();

  function BackToMain() {
    // setNewTask({
    //   name: "",
    // due: "",
    // priority:"",
    // progress: "open"
    // });
   navigate("/v1/todos"); 
  }
  console.log(thisTask);
 
    
 const Updatey = (e) => {
    e.preventDefault()
    console.log(thisTask);
    let ID = thisTask.id;
    axios.put(baseURL + ID, thisTask).then((response) => {
      BackToMain();
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
          placeholder={props.prop.name}
          onChange={(e) => setThisTask({...thisTask, name: e.target.value})}
          value={thisTask.name}
        />
      </Box>
      <Box marginBottom="space80">
        <Label htmlFor="due">Due Date</Label>
        <DatePicker id="due" onChange={(e) => setThisTask({...thisTask, due: e.target.value})} value={thisTask.due}/>
        <HelpText id="due">When is your task due to be completed?</HelpText>
      </Box>
      <Box marginBottom="space80">
        <Label htmlFor="priority">Priority level</Label>
        <Select id="priority" defaultValue={thisTask.priority} onChange={(e) => setThisTask({...thisTask, priority: e.target.value})}>
          <Option disabled value="select">Select a level</Option>
          <Option value="low">low</Option>
          <Option value="medium">medium</Option>
          <Option value="critical">critical</Option>
        </Select>
      </Box>
      <Box marginBottom="space80">
        <Label htmlFor="priority">Progress</Label>
        <Select id="progress" defaultValue={thisTask.progress} onChange={(e) => setThisTask({...thisTask, progress: e.target.value})}>
          <Option disabled value="select">Select a level</Option>
          <Option value="open">Open</Option>
          <Option value="in progress">In Progress</Option>
          <Option value="completed">Completed</Option>
        </Select>
      </Box>
      <Button variant="primary" onClick={Updatey}> Update Task </Button>
    </form>
  );
}
