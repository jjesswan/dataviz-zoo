import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text, Image, Divider, AbsoluteCenter, Box, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import customTheme from "../../styles/theme";
import Stat from "./Stat";

export default function Conclusion() {
  return (
    <div id="three">
      <Flex
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        w="90vw"
        marginLeft={"10rem"}
        role="banner"
        aria-label="banner"
        paddingX={"15rem"}
        paddingY={"2rem"}
        flexDir={"column"}
        gap={"2rem"}
        paddingTop={"12rem"}
      >
        <Text variant="bigNumber" textAlign={"left"} width={"80%"}>
          So... are zoos good or bad?
        </Text>
        <Text variant="body" width={"60%"}>
          It is difficult to conclude whether zoos are truly “good” or “bad” for
          at-risk species. On one hand, zoos provide a safe environment for
          animals to thrive with regulated temperatures, habitats, and food
          sources. On the other hand, we must consider other internal and
          external stresses exerted on animals that are held captive, as well as
          the inherent focus on profit for most zoos and aquariums across the
          United States. We see that in every state, there exists some type of
          animal conservatory — whether in the form of zoos, aquariums, or other
          wildlife protection habitats — showing that zoos are also an important
          aspect of human culture and the ability to observe the animals that
          populate our world. While many factors come into play, often specific
          to the facility itself, it is important to prioritize the protection
          and conservation of these animals, rather than exploiting their lives
          for entertainment.
        </Text>

        <Stat text="213 accredited zoos, aquariums, and related facilities in 46 states and D.C"></Stat>
        <Stat text="> 780k animals in care of AZA-accredited zoo and aquarium professionals"></Stat>
        <Stat text="Over 8,600 species"></Stat>
        <Stat text="Over 800 Vulnerable, Endangered, Critically Endangered, and Extinct In The Wild species as categorized by the IUCN Red List"></Stat>
        <Stat text="$29 million spent on AZA SAFE: Saving Animals From Extinction species programs in 2022"></Stat>
        <Stat text="Contributed more than $22.5 billion to U.S. economy "></Stat>
      </Flex>
    </div>
  );
}
