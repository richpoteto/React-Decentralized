import { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

interface ContentProps {
    titles: Array<string>,
    buttons: Array<string>
}

const Style2: React.FC<ContentProps> = ({titles, buttons}) => {
    return (
        <Box
            my="44px"
            maxWidth="532px"
            sx={{
                display: {xs: "flex", md: "initial"},
                flexDirection: "column",
                alignItems: {xs: "center", md: "normal"}
            }}>
           <Typography
                variant= "h2"
                fontSize="48px"
                mb="14px"
                sx = {(theme) => ({
                    textAlign: {xs: "center", md: "initial"},
                    color: theme.palette.text.disabled,
                    fontSretch: "normal",
                    fontStyle: "normal",
                    fontWeight: "600",
                    letterSpacing: "normal",
                    lineHeight: 1.17
                })}
            >
                {titles[0]}
            </Typography>
            <Typography
                variant= "h3"
                fontSize="48px"
                mt="22px"
                sx = {(theme) => ({
                    textAlign: {xs: "center", md: "initial"},
                    color: theme.palette.text.primary,
                    fontStretch: "normal",
                    fontStyle: "normal",
                    fontWeight: "600",
                    letterSpacing: ".3px",
                    lineHeight: 1.21
                })}
            >
                {titles[1]}
            </Typography>
            <Typography
                fontSize="17px"
                fontWeight="300"
                sx = {(theme) => ({
                    textAlign: {xs: "center", md: "initial"},
                    color: theme.palette.text.primary,
                    letterSpacing: "0.3px",
                    lineHeight: "1.81"
                })}
            >
                {titles[2]}
            </Typography>
            <Box
                display="flex">
            {
                buttons.map((button, index) => 
                    !index? 
                        <Typography
                            sx = {(theme) => ({
                                borderRadius: "5px",
                                mt: "31px",
                                
                                px: "50px",
                                py: "15px",
                                backgroundColor: theme.palette.text.disabled,
                                color: theme.palette.text.primary,
                                fontSize: "15px"
                            })}
                        >
                            {button}
                        </Typography> : 
                        <Typography
                            sx = {(theme) => ({
                                // width: "calc(45% - 1em)",
                                borderRadius: "5px",
                                mt: "31px",
                                
                                px: "50px",
                                py: "15px",
                                backgroundColor: "transparent",
                                color: theme.palette.text.primary,
                                fontSize: "15px"
                            })}>
                            {button}
                        </Typography>
                )
            
            }</Box>
        </Box>
    );
};

export default Style2;