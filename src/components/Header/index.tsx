import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import MenuIcon from "@mui/icons-material/Menu";
import { useDarkModeManager } from "state/user/hooks";
import Logo from "components/Logo";
import DarkIcon from "assets/images/dark.svg";
import LightIcon from "assets/images/light.svg";
import Style1 from "components/Style1";
import { positions } from "@mui/system";


const pages1: string[] = [
  "MARKETPLACE",
  "BUILDER",
  "DOCS",
  "PLACES",
  "EVENTS",
  "DAO",
  "BLOG",
];

const pages2: string[] = [
  "JOIN OUR DISCORD",
  "START EXPLORING",
];

// Header component
export default function Header() {
  const [appColor, setAppcolor] = useState<boolean>(false);
  
  const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 100) setAppcolor(true);
      else setAppcolor(false);
  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const [anchorElNav, setAnchorElNav] = useState<Boolean>(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(!anchorElNav);
  };



  return (
    <Box
      position="relative">
      <CardMedia
        component='video'
        className={"ddd"}
        image={"assets/main.mp4"}
        autoPlay
        loop
        muted
        width="100%"
        sx={{
          position: "absolute",
          left: "0px",
          top: "0px"
        }}
      />
  
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: appColor? "white" :  "transparent",
          backgroundImage: "none",
          boxShadow: "none",
          py: "10px",
          mb: "44px",
          zIndex: "20"
        }}
      >
        <Container maxWidth="lg"
        >
          <Box
            display='flex'
            justifyContent="space-between"
            sx={
              {
                backgroundColor: "none",
                zIndex: "300"
              }
            }
          >
            <Box
              display='flex'
              alignItems='center'
            >
              <Logo />

              <Box
                flexGrow={1}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {pages1.map((page: string) => (
                  <Button
                    key={page}
                    
                    sx={(theme) => ({
                      color: appColor? theme.palette.text.secondary: theme.palette.text.primary,
                      mr: "5px",
                      ml: "24px",
                      px: "0px",
                      py: "0px",
                      fontSize: "13px",
                      textTransform: "inherit",
                    })}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box
                justifyContent="flex-start"
                sx={{position: "relative", display: { xs: "flex", md: "none" } }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: "-20px",
                    left: "-60px",
                    backgroundColor: "#FFFFFF",
                    width: "1000px",
                    zIndex: -10,
                    opacity: anchorElNav? 1:0,
                    transition: "opacity .25s ease,transform .25s ease,box-shadow .25s ease"
                }}>
                    <Box
                      mt="70px"
                      ml="10px">
                    {
                      pages1.map(page => 
                        <Typography
                          px="65px"
                          py="19px"
                          fontSize="13px"
                          sx={theme => ({
                            color: theme.palette.text.secondary,
                          })}
                          >{page}</Typography>)
                    }
                    </Box>
                </Box>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  sx={{
                    zIndex: 100
                  }}
                >
                  <MenuIcon sx={{ color: "#000000", zIndex: 100 }} />
                </IconButton>
              </Box>
            </Box>

            <Box
              alignItems="flex-center"
              sx={{ display: { xs: "none", md: "none", lg: "flex" }}}>
              <Button
                key={1}
                sx={(theme) => ({
                  color: appColor? theme.palette.text.secondary: theme.palette.text.primary,
                  mr: "5px",
                  ml: "24px",
                  fontSize: "13px",
                  textTransform: "inherit",
                })}
              >
                JOIN OUR DISCORD
              </Button>
              <Button
                key={2}
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                  mr: "5px",
                  ml: "24px",
                  fontSize: "13px",
                  px: "12px",
                  py: "10px",
                  background: theme.palette.secondary.main,
                  textTransform: "inherit",
                })}
              >
                START EXPLORING
              </Button>
            </Box>
          </Box>
        </Container>
      </AppBar>
      <Style1></Style1>
    </Box>
  );
}
