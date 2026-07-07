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
        borderColor="grey"
        borderWidth=".1rem"
        opacity={1}
        borderStyle="solid"
        marginTop="1rem"
      />
      <Text variant="smallNumber" maxWidth={{md: "50%", base: "80%"}} textAlign={"right"}>
        {props.text}
      </Text>
    </Stack>
  );
}
