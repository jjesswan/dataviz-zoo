import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import customTheme from "../styles/theme";

export default function Footer() {
  return (
    <div id="credit">
      <Flex
        alignItems={"flex-start"}
        w="90vw"
        marginLeft={"10rem"}
        role="banner"
        aria-label="banner"
        paddingX={"15rem"}
        paddingY={"5rem"}
        flexDir={"column"}
      >
        <Text variant="body" color="white">
          Jessica Wan 2024 <br></br>
          Crafted for DATA1500 <br></br>
          Brown University
        </Text>
      </Flex>
    </div>
  );
}
