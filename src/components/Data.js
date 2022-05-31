import axios from "axios";
import React, { useState } from "react";
import { Button } from "@twilio-paste/core/button";
import { Badge, Paragraph } from "@twilio-paste/core";
import { WarningIcon } from "@twilio-paste/icons/esm/WarningIcon";
import { Card } from "@twilio-paste/core";
import { Heading } from "@twilio-paste/core";
import { HistoryIcon } from "@twilio-paste/icons/esm/HistoryIcon";
import { Box, Text, Separator } from "@twilio-paste/core";
import Data from "./Data.css";

const baseURL = "http://localhost:3000/data";

export default function DataGet() {
  const [todos, setTodos] = useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTodos(response.data);
    });
  }, []);

  if (!todos) return null;

  return (
    <div>
      {todos.map((todo) => (
        <div id="todoBox" key={todo.id}>


          <Heading as="h2" variant="heading70"  >
            TODO: {todo.name}
          </Heading>


          <Box
            backgroundColor="colorBackgroundBody"
            padding="space50"
            display="flex"
            border="colorBorderDecorative10Weaker"
            justifyContent="space-between"
            key={todo.id}
          >
            <Text as="span" id="dueDate">DUE: {todo.due}</Text>
            <Separator orientation="vertical" horizontalSpacing="space40" />
            <Badge as="span" variant="neutral">
              <WarningIcon decorative={false} title="Priority" />
              &nbsp; {todo.priority}
            </Badge>
            <Separator orientation="vertical" horizontalSpacing="space40" />
            <Badge as="span" variant="neutral">
              <HistoryIcon decorative={false} title="Progress" />
              &nbsp; {todo.progress}
            </Badge>
            <Separator orientation="vertical" horizontalSpacing="space40" />
            <Button variant="secondary"> Update Todo</Button>
            <Separator orientation="vertical" horizontalSpacing="space40" />
            <Button variant="secondary"> Another One</Button>
          </Box>
        </div>
      ))}
    </div>
  );
}

// export default function DataPost() {
//     // TODO: POST function w/ axios
// }s

// export default function DataUpdate() {
//     //TODO: PUSH function w/ axios
// }

// export default function DataDelete() {
//     //TODO: DELETE function w/ axios
// }
