import { useState } from "react";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import IconButton from "@mui/material/IconButton";
import Carousel from "components/Carousel";
import Polygon1 from "assets/images/polygon1.png";
import Polygon2 from "assets/images/polygon2.png";
import DogsBg from "assets/images/dogs-bg.png";
import Style2 from "components/Style2";
import CardMedia from '@mui/material/CardMedia';
import Bottom from "./Bottom";

const data = 
  {
    titles: ["About Decentraland", "Determine the future of the virtual world", "The first fully decentralized world, Decentraland is controlled via the DAO, which owns the most important smart contracts and assets of Decentraland. Via the DAO, you decide and vote on how the world works."],
    buttons: [
      "LEARN MORE"
    ]
  }

const Bottom1 = () => {
  return (
    <Box
        sx={(theme) => ({
            backgroundImage: "url(./assets/images/1.png)"
        })}>
        <Container>
            <Box
                pt="80px"
                pb="80px">
                <Style2
                    titles={data.titles}
                    buttons={data.buttons}
                />
            </Box>
        </Container>
    </Box>
  );
};

export default Bottom1;
