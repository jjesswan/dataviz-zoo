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
        <Flex gap="1rem">
          <Text variant="bigHeader" color="orange">
            The
          </Text>
          <Text variant="bigHeader" color="lightGrey">
            Silver
          </Text>
          <Text variant="bigHeader" color="orange">
            Lining
          </Text>
        </Flex>
       
        <Text variant="medHeader" color="orange" textAlign={"right"} mt="-2rem">
          The Protective (and Hurtful) Power of Zoos
        </Text>
        <Text variant="subHeader" textAlign={"right"} color="lightGrey">
          A Data-Driven Analysis of Zoos' Impact on Endangered Species Maximum Life Expectancy (MLE)
        </Text>
      </Flex>
    </div>
  );
}
