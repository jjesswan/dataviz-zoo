import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import Navbar from "./Navbar";

export default function Navigation() {
  return (
    <div>
      <Navbar/>
    </div>
  );
}
