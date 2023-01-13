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

const data = [
  {
    titles: ["Explore", "Lose yourself in an amazing, evolving world", "Explore LANDs owned by users to experience incredible scenes and structures. From a space adventure to a medieval dungeon maze to entire villages crafted from the minds of community members."],
    buttons: [
      "START EXPLORING"
    ]
  },
  {
    titles: ["Create", "Test the limits of your imagination", "Create scenes, artworks, challenges and more, using the simple Builder tool, then take part in events to win prizes. For more experienced creators, the SDK provides the tools to fill the world with social games and applications."],
    buttons: [
      "START BUILDING",
      "START DEVELOPING"
    ]
  },
  {
    titles: ["Trade", "The virtual destination for digital assets", "Buy and sell LAND, Estates, Avatar wearables and names in the Decentraland Marketplace: stocking the very best digital goods and paraphernalia backed by the ethereum blockchain."],
    buttons: [
      "START BROWSING"
    ]
  }
]

const Main = () => {
  return (
    <Box
        sx={(theme) => ({
            marginTop: "-10px",
            backgroundColor: theme.palette.primary.main
        })}>
        <Container>
            <Box
                display="flex"
                justifyContent="space-between"
                pt="80px"
                pb="80px">
                <Style2
                    titles={data[0].titles}
                    buttons={data[0].buttons}
                />
                <CardMedia
                    component='video'
                    className={"ddd"}
                    image={"assets/body1.mp4"}
                    autoPlay
                    loop
                    muted
                    width="516px"
                    height="516px"
                    sx={{
                      display: {xs:"none", md: "initial"}
                    }}
                />
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                pt="80px"
                pb="80px">
                <CardMedia
                    component='video'
                    className={"ddd"}
                    image={"assets/body2.mp4"}
                    autoPlay
                    loop
                    muted
                    width="516px"
                    height="516px"
                    sx={{
                      display: {xs:"none", md: "initial"}
                    }}
                />
                <Style2
                    titles={data[1].titles}
                    buttons={data[1].buttons}
                />
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                pt="80px"
                pb="80px">
                <Style2
                    titles={data[2].titles}
                    buttons={data[2].buttons}
                />
                <CardMedia
                    component='video'
                    className={"ddd"}
                    image={"assets/body3.mp4"}
                    autoPlay
                    loop
                    muted
                    width="516px"
                    height="516px"
                    sx={{
                      display: {xs:"none", md: "initial"}
                    }}
                />
            </Box>
        </Container>
    </Box>
  );
};

export default Main;
