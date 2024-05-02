import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps, Image, Text } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { TiHome, TiInfoLarge} from "react-icons/ti";




export default function Navbar() {
  return (
    <Box
      position={"fixed"}
      zIndex={"sticky"}
      display={{ md: "flex", base: "none" }}
      role="navigation"
      aria-label="desktop navigation"
      bg="transparent"
      height="100vh"
      width="10rem"
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        minHeight={"80%"}
        transition={"all .2s"}
        borderRadius={"5rem"}
        borderColor={"orange"}
        borderWidth={"1px"}
        paddingX={"1rem"}
        backdropFilter="blur(30px)"
        gap=".5rem"
      >
        <HashLink smooth to="/#top" variant="navLink" pr="0">
          <ChakraLink>
            <TiHome color="#CB5E21" size={"2rem"} />
          </ChakraLink>
        </HashLink>
        <HashLink smooth to="/#one" variant="navLink" pr="0">
          <ChakraLink variant={"navLink1"}>1</ChakraLink>
        </HashLink>
        <HashLink smooth to="/#two" variant="navLink" pr="0">
          <ChakraLink variant={"navLink1"}>2</ChakraLink>
        </HashLink>
        <HashLink smooth to="/#three" variant="navLink" pr="0">
          <ChakraLink variant={"navLink1"}>3</ChakraLink>
        </HashLink>
        <HashLink smooth to="/#credit" variant="navLink" pr="0">
          <ChakraLink>
            <TiInfoLarge color="#CB5E21" size={"2rem"} />
          </ChakraLink>
        </HashLink>
      </Flex>
    </Box>
  );
}
