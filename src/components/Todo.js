import axios from "axios";
import React, { useState } from "react";
import { Button } from "@twilio-paste/core/button";
import { Badge } from "@twilio-paste/core";
import { WarningIcon } from "@twilio-paste/icons/esm/WarningIcon";
import { Heading } from "@twilio-paste/core";
import { HistoryIcon } from "@twilio-paste/icons/esm/HistoryIcon";
import {CheckboxCheckIcon } from "@twilio-paste/icons/esm/CheckboxCheckIcon";
import { Box, Text, Separator } from "@twilio-paste/core";
import { ChevronDoubleRightIcon } from "@twilio-paste/icons/esm/ChevronDoubleRightIcon";
import Data from "./Data.css";


const baseURL = "http://localhost:3000/data";

export default function DataGet() {
  const [Task, setTask] = useState(null);

  React.useEffect(() => {
    axios.get(baseURL + {id}).then((response) => {
     
      setTodos(response.data);
    });
  }, []);

  if (!todos) return null;
  
  function PriorityGet(todo) {
    if (todo.priority === "critical") {
        return "warning";
    } else if (todo.priority === "medium") {
        return "decorative40"
    } else { return "decorative20"}
  };

  function ProgressGet(todo) {
      if (todo.progress ==="completed" ) {
          return "decorative30"
      } else if (todo.progress === "in progress"){
          return "decorative40"
      } else {return "decorative10"}
  };

  function ProgressGetIcon(todo){
      if (todo.progress === "completed") {
          return <CheckboxCheckIcon decorative={false} title="Progress" />
      } else if (todo.progress === "in progress") {
          return <ChevronDoubleRightIcon decorative={false} title="Progress" />
      }
      else { return <HistoryIcon decorative={false} title="Progress" />}
  };

  return (
    <div>
      {todos.map((todo) => (
        <div id="todoBox" key={todo.id}>


          <Heading as="h2" variant="heading30"  >
            <span style={{color: "rgb(174, 178, 193)"}}>TODO •</span> &nbsp;{todo.name}
          </Heading>


          <Box
            backgroundColor="colorBackgroundBody"
            padding="space30"
            display="flex"
            border="colorBorderDecorative10Weaker"
            justifyContent="space-between"
            key={todo.id}
          >
            <Text as="span" id="dueDate">DUE: {todo.due}</Text>
            <Separator orientation="vertical" horizontalSpacing="space40" />
            <Badge as="span" variant={PriorityGet(todo)}>
              <WarningIcon decorative={false} title="Priority" />
              &nbsp; {todo.priority}
            </Badge>
            <Separator orientation="vertical" horizontalSpacing="space40" />
            <Badge as="span" variant={ProgressGet(todo)}>
              {ProgressGetIcon(todo)}
              &nbsp; {todo.progress}
            </Badge>
            <Separator orientation="vertical" horizontalSpacing="space40" />
            <Button variant="secondary"> Update Task</Button>
            <Separator orientation="vertical" horizontalSpacing="space40" />
            <Button variant="destructive_secondary"> Delete Task</Button>
          </Box>
        </div>
      ))}
    </div>
  );
}
