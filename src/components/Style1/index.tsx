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
import DownloadIcon from '@mui/icons-material/Download';

const Style1 = () => {
    return (
        <Container>
            <Box
                py="300px"
                sx={{
                    textAlign: { xs: "center", md: "initial" },
                    zIndex: "15",
                    position: "relative"
                }}>
                <Typography
                    variant="h1"
                    fontSize="64px"
                    mt="22px"
                    sx={(theme) => ({
                        color: theme.palette.text.primary,
                        margin: "calc(2rem - 0.14286em) 0 1rem",
                    })}
                >
                    Welcome to Decentraland
                </Typography>
                <Typography
                    maxWidth="600px"
                    fontSize="28px"
                    fontWeight="300"
                    sx={(theme) => ({
                        color: theme.palette.text.primary,
                        maxWidth: "600px",
                        width: "100%",
                        fontStretch: "normal",
                        fontStyle: "normal",
                        fontWeight: "300",
                        letterSpacing: ".3px",
                        lineHeight: "1.81"
                    })}
                >
                    Create, explore and trade in the first-ever virtual world owned by its users.
                </Typography>
                <Box display="flex">
                    <Button
                        sx={(theme) => ({
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            mt: "31px",
                            mr: "15px",
                            px: "35px",
                            py: "15px",
                            backgroundColor: theme.palette.text.disabled,
                            color: theme.palette.text.primary,
                            fontSize: "15px"
                        })}
                    >
                        <DownloadIcon sx={{ marginRight: "20px" }} />
                        DOWNLOAD
                    </Button>
                    <Button
                        sx={(theme) => ({
                            display: { xs: "none", md: "initial" },
                            mt: "31px",
                            mr: "15px",
                            px: "35px",
                            py: "15px",
                            backgroundColor: "transparent",
                            color: theme.palette.text.primary,
                            fontSize: "15px",
                            border: `1px solid ${theme.palette.text.primary}`
                        })}>
                        OPEN IN BROWER
                    </Button>
                </Box>
                <Button
                    sx={(theme) => ({
                        display: { xs: "initial", md: "none" },
                        mt: "31px",
                        mr: "15px",
                        px: "35px",
                        py: "15px",
                        backgroundColor: theme.palette.text.disabled,
                        color: theme.palette.text.primary,
                        fontSize: "15px"
                    })}
                >
                    GET STARED
                </Button>
            </Box>
        </Container>
    );
};

export default Style1;