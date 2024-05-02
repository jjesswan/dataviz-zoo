import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import customTheme from "../../styles/theme"


export default function Header() {
  return (
    <div id="top">
      <Flex
        minHeight={"100vh"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        flexDir={"column"}
        w="90vw"
        marginLeft={"10rem"}
        role="banner"
        aria-label="banner"
        paddingX={"4rem"}
      >
        <Text variant="bigHeader" color="orange">
          THE RED LINING:
        </Text>
        <Text variant="subHeader" color="orange" textAlign={"right"} my="-2rem">
          THE PROTECTIVE (AND HURTFUL) POWER OF ZOOS
        </Text>
      </Flex>
    </div>
  );
}
