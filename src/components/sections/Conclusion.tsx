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
        <Text variant="bigNumber"  textAlign={"left"} width={"80%"}>
          So... are zoos good or bad?
        </Text>
        <Text variant="body" width={"60%"}>
          The red panda is slightly larger than a domestic cat with a bear-like
          body and thick russet fur. The belly and limbs are black, and there
          are white markings on the side of the head and above its small eyes.
          Red pandas are very skillful and acrobatic animals that predominantly
          stay in trees. Almost 50% of the red panda’s habitat is in the Eastern
          Himalayas. They use their long, bushy tails for balance and to cover
          themselves in winter, presumably for warmth. Primarily an herbivore,
          the name panda is said to come from the Nepali word ‘ponya,’ which
          means bamboo or plant eating animal.
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
