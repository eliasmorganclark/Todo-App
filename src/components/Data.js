import axios from "axios";
import React, { useState } from "react";
import { Button } from "@twilio-paste/core/button";
import { OrderedList, UnorderedList, ListItem, Badge } from "@twilio-paste/core";
import {WarningIcon} from '@twilio-paste/icons/esm/WarningIcon'

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
      
      <UnorderedList>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            {todo.name} - {todo.due} - 
            <Badge as="span" variant="neutral"><WarningIcon decorative={false} title="Priority" />{todo.priority}</Badge>
          </ListItem>
        ))}
      </UnorderedList>
      <Button variant="secondary"> Update</Button>
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
