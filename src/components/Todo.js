import axios from "axios";
import React, { useState } from "react";
import { Button } from "@twilio-paste/core/button";
import { Badge } from "@twilio-paste/core";
import { WarningIcon } from "@twilio-paste/icons/esm/WarningIcon";
import { Heading } from "@twilio-paste/core";
import { HistoryIcon } from "@twilio-paste/icons/esm/HistoryIcon";
import { CheckboxCheckIcon } from "@twilio-paste/icons/esm/CheckboxCheckIcon";
import { Box, Text, Separator } from "@twilio-paste/core";
import { ChevronDoubleRightIcon } from "@twilio-paste/icons/esm/ChevronDoubleRightIcon";
import Data from "./Data.css";
import { EditIcon } from '@twilio-paste/icons/esm/EditIcon';
import { DeleteIcon } from '@twilio-paste/icons/esm/DeleteIcon';
import Delete from './DeleteButton';
import { useParams } from "react-router";

const baseURL = "http://localhost:3000/data/";

export default function Todo() {
  const [todo, setTodo] = useState(null);
  const {id} = useParams();

  React.useEffect(() => {
    axios.get(baseURL + id).then((response) => {
      setTodo(response.data);
    });
  }, []);

  if (!todo) return null;

  function PriorityGet(todo) {
    if (todo.priority === "critical") {
      return "warning";
    } else if (todo.priority === "medium") {
      return "decorative40";
    } else {
      return "decorative20";
    }
  }

  function ProgressGet(todo) {
    if (todo.progress === "completed") {
      return "decorative30";
    } else if (todo.progress === "in progress") {
      return "decorative40";
    } else {
      return "decorative10";
    }
  }

  function ProgressGetIcon(todo) {
    if (todo.progress === "completed") {
      return <CheckboxCheckIcon decorative={false} title="Progress" />;
    } else if (todo.progress === "in progress") {
      return <ChevronDoubleRightIcon decorative={false} title="Progress" />;
    } else {
      return <HistoryIcon decorative={false} title="Progress" />;
    }
  }

  return (
    <div>
      <div id="todoBox" key={todo.id}>
        <Heading as="h2" variant="heading30">
          <span style={{ color: "rgb(174, 178, 193)" }}>TODO •</span> &nbsp;
          {todo.name}
        </Heading>

        <Box
          backgroundColor="colorBackgroundBody"
          padding="space30"
          display="flex"
          border="colorBorderDecorative10Weaker"
          justifyContent="space-between"
          key={todo.id}
        >
          <div id="leftButtons">
            <Text as="span" id="dueDate">
              DUE: {todo.due}
            </Text>

            <Badge as="span" variant={ProgressGet(todo)}>
              {ProgressGetIcon(todo)}
              &nbsp; {todo.progress}
            </Badge>
          </div>
          <div id="rightButtons">
            <Button variant="secondary" size="icon">
              <EditIcon decorative={false} title="Edit Task" />
            </Button>
            <Delete id={todo.id} />
          </div>
        </Box>
      </div>
    </div>
  );
}
