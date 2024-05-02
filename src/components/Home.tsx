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
        captionDesc="AnAge & AZA Animal Lifespans"
        captionLink="https://www.kaggle.com/datasets/mattop/anage-animal-ageing-and-longevity-data"
      ></MyImage>
      <Significance />
      <MyImage
        src="images/endangered_ggplot.png"
        captionDesc="IUCN Redlist Changes, Data World"
        captionLink="https://data.world/project-data-viz/iucn-redlist-changes-2002-to-2022-pdv-10-2022"
      ></MyImage>
      <Conclusion />
      <MyImage
        src="images/ggplot_map.png"
        captionDesc="Kaggle Museum Directory in the U.S."
        captionLink="https://www.kaggle.com/datasets/imls/museum-directory"
      ></MyImage>

      <Footer />
    </div>
  );
}
