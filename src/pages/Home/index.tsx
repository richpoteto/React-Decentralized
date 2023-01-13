import { useState } from "react";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import IconButton from "@mui/material/IconButton";
import Carousel from "components/Carousel";
import Polygon1 from "assets/images/polygon1.png";
import Polygon2 from "assets/images/polygon2.png";
import DogsBg from "assets/images/dogs-bg.png";
import Content from "components/Style2";
import Content1 from "components/Style2";
import CardMedia from '@mui/material/CardMedia';
import Main from './Main';
import Style1 from "components/Style1";
import Bottom from "./Bottom";
import Bottom1 from "./Bottom1";
import Bottom2 from "./Bottom2";

const Home = () => {
  return (
    <>
      <Main></Main>
      <Bottom></Bottom>
      <Bottom1></Bottom1>
      <Bottom2></Bottom2>
    </>
  );
};

export default Home;
