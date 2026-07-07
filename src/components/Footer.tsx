import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text, Image,  Link as ChakraLink} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import customTheme from "../styles/theme";

export default function Footer() {
  return (
    <div id="credit">
      <Flex
        alignItems={"flex-end"}
        w="100%"
        role="credits"
        aria-label="credits"
        flexDir={"column"}
        px="2rem"
        mb="1rem"
      >
        <Text variant="subtitle" color="white" fontWeight="600" fontSize=".7rem">
          Credits
        </Text>
        <Flex>
           <Text variant="subtitle" color="white" fontSize=".7rem">
          By 
        </Text>
         <ChakraLink
            fontSize=".7rem"
            variant="creditLink"
            href="https://dev.wanjess.com/"
            target="_blank"
          >
            &nbsp;Jessica Wan.
          </ChakraLink>

        </Flex>
        
      </Flex>
    </div>
  );
}
