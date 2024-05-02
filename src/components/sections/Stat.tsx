import React, { useRef } from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  Text,
  Image,
  Divider,
  AbsoluteCenter,
  Box,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import customTheme from "../../styles/theme";

interface StatProps {
    text: string
}

export default function Stat(props: StatProps) {
  return (
    <Stack direction="row" width={"100%"}>
      <Divider
        borderColor="white"
        borderWidth=".1rem"
        opacity={1}
        borderStyle="solid"
        marginTop="1rem"
      />
      <Text variant="smallNumber" maxWidth="50%" textAlign={"right"}>
        {props.text}
      </Text>
    </Stack>
  );
}
