import { Box, Icon, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LogoIcon from 'assets/logo.svg';

export default function Logo() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Box
        component="img"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={1}
        src={LogoIcon}
        sx={(theme) => ({
          width: "36px",
          height: "36px"
        })}
      >
      </Box>
    </Link>
  );
}
