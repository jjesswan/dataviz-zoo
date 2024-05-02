import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "./sections/Header";
import Footer from "./Footer";
import RedPanda from "./sections/RedPanda";
import MyImage from "./sections/MyImage";
import Significance from "./sections/Significance";
import Conclusion from "./sections/Conclusion";


export default function Home() {
  return (
    <div role="main">
      <Header />
      <RedPanda />
      <MyImage
        src="images/ggplot_lifespan.png"
        captionDesc="hello"
        captionLink="hello"
      ></MyImage>
      <Significance />
      <MyImage
        src="images/endangered_ggplot.png"
        captionDesc="hello"
        captionLink="hello"
      ></MyImage>
      <Conclusion />
      <MyImage
        src="images/ggplot_map.png"
        captionDesc="hello"
        captionLink="hello"
      ></MyImage>

      <Footer />
    </div>
  );
}
