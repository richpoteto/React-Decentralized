import React, { useState, useRef } from "react";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import CarouselStyle from "components/CarouselStyle";
import Slider from "react-slick";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import styled from "@emotion/styled";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const data = [
  {
    title: "The Hillshire Farm™ Barn",
    content: "We’re Cooking Up Something Big",
    number: 2,
    img: "https://events.decentraland.org/poster/229e02b563b8ad38.jpg"
  },
  {
    title: "Sarah Choo Jing Studio presented by Yeo Workshop Gallery -...",
    content: "A showcase of video art installations by Singaporean Sarah Choo Jing as part of...",
    number: 2,
    img: "https://events.decentraland.org/poster/591f7d7f63bcafad.png"
  },
  {
    title: "Live Music: Groove Lab 19 with LOBOZ",
    content: "Purple Bee TV presents the Groove Lab - Episode 18: Tune in for an interactive...",
    number: 2,
    img: "https://events.decentraland.org/poster/c643ce5f637f87b2.jpg"
  },
  {
    title: "FURRY PAWS NFT - OPENING CEREMONY | CJ TRAX + CRYPTOMINOTAUR",
    content: "We want to celebrate our entry into Decentraland together with DCL Fam ❤️ There...",
    number: 2,
    img: "https://events.decentraland.org/poster/03d2038663923929.png"
  },
  {
    title: "The Oocca Club | Squawking Party Month 2023",
    content: "Celebrate the New Year during the Oocca Club Squawking Party!!!Every day from...",
    number: 24,
    img: "https://events.decentraland.org/poster/229e02b563b8ad38.jpg"
  },
  {
    title: "[The Inn] Jey Jey's innkeeper debut!",
    content: "## [Jey Jey](https://twitter.com/JJey64) ### 137, -2 // January 12 ### 8-9pm UTC...",
    number: 6,
    img: "https://events.decentraland.org/poster/591f7d7f63bcafad.png"
  },
  {
    title: "Decentraland DAO Town Hall #1",
    content: "What's on your mind? What's happening in our community? What pressing issues do...",
    number: 6,
    img: "https://events.decentraland.org/poster/1af87cb0638eb054.png"
  },
  {
    title: "AMBIENFT - LIVE from the Shadowbanned! @ TRU Band Room | 9pm UTC",
    content: "AmbieNFT is a collection of 256 individually minted, single-edition generative...",
    number: 6,
    img: "https://events.decentraland.org/poster/03d2038663bc5d92.jpg"
  }
]

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  
  return (
    <Box
      sx={{
        display: value == index ? "block" : "none"
      }}
    >
      {value == index && children}
    </Box>
  );
}

const settings = {
  // dots: true,
  // dotsClass: "slick-dots slick-thumb",
  // customPaging: (i: number) => {
  //   return (
  //     <Box
  //       mt="40px"
  //       sx={{
  //         width: "10px",
  //         height: "10px",
  //         borderRadius: "100%",
  //         backgroundColor: "black",
  //         "&:focus": {
  //           backgroundColor: "red"
  //         },
          
  //       }}
  //     />
  //   );
  // },
  infinite: true,
  autoplay: true,
  speed: 500,
  arrows: false,
  autoplaySpeed: 10000000,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  ],
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Bottom() {
  const sliderRef = useRef<Slider | null>(null)

  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.light,
        pb: "200px"
      })}>
      <Container>
        <Typography
          variant="h2"
          pt="100px"
          pb="28px"
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            fontSize: "48px",
            fontStretch: "normal",
            fontStyle: "normal",
            fontWeight: "600",
            letterSpacing: "normal",
            lineHeight: "1.17"
          })}>
          Can't decide where to start?
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              ".MuiTabs-indicator": {
                backgroundColor: "transparent"
              }
            }}
          >
            <Tab label={
              <Typography
                sx={(theme) => ({
                  backgroundColor: theme.palette.text.disabled,

                  color: theme.palette.text.primary,
                  fontSize: "13px",
                  borderRadius: "14px",
                  border: `1px solid ${theme.palette.text.disabled}`,
                  lineHeight: "18px",
                  px: "12px",
                  py: "5px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: theme.palette.text.disabled,
                  }
                })}
              >
                UPCOMING EVENTS
              </Typography>}
              {...a11yProps(0)} />
            <Tab label={
              <Typography
                sx={(theme) => ({
                  backgroundColor: "transparent",
                  color: theme.palette.primary.dark,
                  fontSize: "13px",
                  borderRadius: "14px",
                  lineHeight: "18px",
                  px: "12px",
                  py: "5px",
                  "&:hover": {
                    border: `1px solid ${theme.palette.text.disabled}`,
                    color: theme.palette.text.disabled,
                  }
                })}
              >
                POINT OF INTEREST
              </Typography>
            } {...a11yProps(1)} />
          </Tabs>
          <Typography
            sx={(theme) => ({
              color: theme.palette.text.disabled,
              fontSize: "13px",
            })}>
            MORE EVENTS
          </Typography>
        </Box>
        <TabPanel value={value} index={0}>
          <Box
            position="relative">
            <Slider ref={sliderRef} {...settings}>
              {
                data.map(d =>
                  <CarouselStyle
                    width={settings.slidesToShow == 4 ? "300px" : "px"}
                    title={d.title}
                    content={d.content}
                    number={d.number}
                    img={d.img}
                  />
                )
              }
            </Slider>

            <Box
              position="absolute"
              onClick={() => { sliderRef.current?.slickNext(); }}
              sx={{
                top: "50%",
                right: "-30px",
                mt: "-20px",
                color: "rgba(0, 0, 0, 0.3)",
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: "30px" }} />
            </Box>

            <Box
              position="absolute"
              onClick={() => { sliderRef.current?.slickPrev(); }}
              sx={{
                top: "50%",
                left: "-30px",
                mt: "-20px",
                color: "rgba(0, 0, 0, 0.3)",
              }}
            >
              <ArrowBackIosIcon sx={{ fontSize: "30px" }} />
            </Box>
            
            <Box
              textAlign="center"
              >
                 <Button
                     onClick={() => { sliderRef.current?.slickPrev(); }}
                    sx={{
                      marginTop: "40px",
                      marginRight: "15px",
                      width: "10px",
                      height: "10px",
                      minWidth: "0px",
                      padding: "0px",
                      borderRadius: "100%",
                      backgroundColor: "#73627D",
                      "&:focus": {
                        backgroundColor: "red"
                      },
                    }}
                  />
                  <Button
                    onClick={() => { sliderRef.current?.slickNext(); }}
                    sx={{
                      marginTop: "40px",
                      width: "10px",
                      height: "10px",
                      minWidth: "10px",
                      padding: "0px",
                      borderRadius: "100%",
                      backgroundColor: "#73627D",
                      "&:focus": {
                        backgroundColor: "red"
                      },
                    }}
                  />
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Slider {...settings}>
            {
              data.map(d =>
                <CarouselStyle
                  width={settings.slidesToShow == 4 ? "300px" : "px"}
                  title={d.title}
                  content={d.content}
                  number={d.number}
                  img={d.img}
                />
              )
            }
          </Slider>
        </TabPanel>
      </Container>
    </Box>
  );
};

