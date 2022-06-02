import React from "react";
import { MediaObject, MediaFigure, MediaBody, Text, Button, Stack } from "@twilio-paste/core";
import { LogoTwilioIcon } from "@twilio-paste/icons/esm/LogoTwilioIcon";
import Data from "./Data.css";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <div id="topheader">
    <MediaObject verticalAlign="center">
      <MediaFigure spacing="space80">
        <LogoTwilioIcon
          color="white"
          decorative={false}
          title="Twilio icon"
          size="50px"
        />
      </MediaFigure>
      <MediaBody>
        <Text as="h2" fontSize="fontSize100" lineHeight="lineHeight100">
          <Text
            href="/"
            as="a"
            color="white"
            fontSize="inherit"
            lineHeight="inherit"
            textDecoration="none"
            fontWeight="500"
          >
            The To-do List 5000
          </Text>
        </Text>
        <Text
          as="h3"
          fontSize="fontSize50"
          lineHeight="lineHeight60"
          color="white"
          fontWeight="500"
        >
          Elias Clark made a cool Todo List app, for the average cool cat.
        </Text>
      </MediaBody>
    </MediaObject>
    <nav id="nav">
      <Stack orientation="horizontal" spacing="space40">
    <Button variant="secondary" size="small" as="a" href="/v1/todos/new" spacing="space30"> New Task </Button>
    <Button variant="secondary" size="small" as="a" href="/v1/todos" spacing="space30"> View All Tasks </Button>
    </Stack>
    </nav>
    </div>
  );
}
