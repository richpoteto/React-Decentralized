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
import GalleryStyle from "components/GalleryStyle";
import Footer from "components/Footer";

import {FaDiscord, FaRedditAlien, FaGithub, FaTwitter} from 'react-icons/fa';

const data = [
  {
    img: "assets/images/2.png",
    date: "Jan 11",
    content: "Film Club 2023: Show the World What You Love About Decentraland and Win Big!"
  },
{
  img: "assets/images/3.png",
  date: "Jan 08",
  content: "Genesis.City: A Dynamic Bird’s-eye View of Decentraland"
},
{
  img: "assets/images/4.png",
  date: "Dec 09",
  content: "Decentraland 2022 Recap"
}]

const footerData = [
{
  title: "Contact us",
  content: "You'll find us at all hours on Discord. You can also reach us through the usual channels.",
  input: false,
  button: "GET IN TOUCH"
},
{
  title: "Get the latest updates",
  content: "Breaking news on events, competitions and new developments in Decentraland, delivered straight to your inbox",
  input: true,
  button: "SIGN UP"
},
]

const left = ["English", "Home", "Privacy Policy", "Terms of Use", "Content Policy", "Code of Ethics"];
const right = [<FaDiscord/> ,<FaRedditAlien/>, <FaGithub/>, <FaTwitter/>, "© 2023 Decentraland"];

const Bottom2 = () => {
  return (
    <Box
      mt="0px"
        sx={(theme) => ({
            backgroundColor: theme.palette.text.primary
        })}>
        <Container>
            <Box
                pt="80px"
                pb="80px">
                <Typography
                sx={{
                  color : "#16141A",
                  fontSize: "48px",
                  fontWeight: "600",
                  pb: "30px"
                }}>
                  From The blog
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {xs: "column", md:"column", lg: "row"},
                    mx: "-10px",
                    pb: "100px"
                  }}
                >
                  {
                  data.map(d => 
                    <Box
                      px="10px"
                      width= "33.3%"
                      sx={{
                        
                      }}>
                      <GalleryStyle
                        img={d.img}
                        date={d.date}
                        content={d.content}
                      >
                      </GalleryStyle>
                    </Box>
                  )
                }
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {xs: "column", md: "row"},
                    justifyContent: "space-between"
                  }}
                >
                  {
                    footerData.map(d =>
                        <Footer
                          title={d.title}
                          content={d.content}
                          input={d.input}
                          button={d.button}
                        />
                      )
                  }
                </Box>
                <Box
                    pt="100px"
                    sx={{
                      display: "flex",
                      flexDirection: {xs: "column", md: "row"},
                      justifyContent: "space-between"
                    }}
                  >
                    <Box display="flex"
                    sx={{
                      justifyContent:{xs: "center", md: "initial"}
                    }}>
                      {
                        left.map(d => 
                          <Typography
                              fontSize="14px"
                              pb="8px"
                              pr="16px"
                              sx={theme => ({
                                color: theme.palette.primary.dark,
                                fontWeight: 400
                              })}
                            >
                              {d}
                          </Typography>
                        )
                      }
                    </Box>
                    <Box display="flex"
                     sx={{
                      justifyContent:{xs: "center", md: "initial"}
                    }}>           
                    {
                        right.map(d => 
                          <Typography
                              fontSize="14px"
                              pb="8px"
                              pl="16px"
                              sx={theme => ({
                                color: theme.palette.primary.dark,
                                fontWeight: 400
                              })}
                            >
                              {d}
                          </Typography>
                        )
                      }
                    </Box>
                </Box>
            </Box>
        </Container>
    </Box>
  );
};

export default Bottom2;
