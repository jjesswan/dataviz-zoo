import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text, Image } from "@chakra-ui/react";
import customTheme from "../../styles/theme";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";


interface ImageProps{
    src: string,
    captionDesc: string,
    captionLink: string
}

export default function MyImage(props: ImageProps) {
  return (
    <Flex
      my="5rem"
      justifyContent={"space-between"}
      alignItems={"right"}
      w="100%"
      role="image"
      aria-label="image"
      flexDir={"column"}
        px={{lg: "20rem", md: "10rem", base: "2rem"}}
      gap="1rem"
    >
      <Image src={props.src} />
      <ChakraLink
        variant="sourceLink"
        href={props.captionLink}
        target="_blank"
      >
        Source: {props.captionDesc}
      </ChakraLink>
    </Flex>
  );
}
