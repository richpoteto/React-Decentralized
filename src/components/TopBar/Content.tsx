import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { ColorButton, AlphaButton } from "components/common/Buttons";

const TopBarContent = () => {
  return (
    <Container>
      <Box
        sx={{
          textAlign: { xs: "center", md: "initial" },
          position: "relative",
          py: { xs: "200px", lg: "250px" },
        }}
      >
        <Typography
          variant="h1"
          fontWeight={700}
          fontSize="48px"
          sx={(theme) => ({
            color: theme.palette.text.primary,
            margin: "calc(2rem - 0.14286em) 0 1rem",
          })}
        >
          Welcome to Decentraland
        </Typography>
        <Typography
          maxWidth="400px"
          fontSize="20px"
          fontWeight="300"
          sx={(theme) => ({
            color: theme.palette.text.primary,
            maxWidth: "600px",
            width: "100%",
            fontStretch: "normal",
            fontStyle: "normal",
            fontWeight: "300",
            letterSpacing: ".3px",
            lineHeight: "1.81",
          })}
        >
          Create, explore and trade in the first-ever virtual world owned by its
          users.
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          gap={1}
          mt={3}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <ColorButton
            label="DOWNLOAD"
            _width="160px"
            _icon={<DownloadIcon />}
          />
          <AlphaButton label="OPEN IN BROWER" _width="160px" _border={true} />
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
            fontSize: "15px",
          })}
        >
          GET STARED
        </Button>
      </Box>
    </Container>
  );
};

export default TopBarContent;
