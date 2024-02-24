import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { Favorite } from "@mui/icons-material";
import { useState } from "react";
import Cart from "./Cart";

import logo from "../assets/logo.png"

export const NavBar: React.FC<{}> = () => {
  const [open, setOpen] = useState<boolean>(false)
  const items = useAppSelector(state => state.cartReducer);
  const navigate = useNavigate();

  const handleStateViewDrawer = () => {
    setOpen((state) => !state)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
           
              <Grid item>     
              {/* logo */}
              <Link to="/">
                <img src={logo} alt="" width={120} />   
              </Link>
            
              </Grid>

              <Grid item>
                {/* button handler - open Cart */}
                <Stack spacing={2} direction="row">
                 <IconButton onClick={() => handleStateViewDrawer()} >
                 <Badge 
                  color="error" badgeContent={items.length}>
                    <Favorite />
                  </Badge>
                 </IconButton>
                  <Button variant="contained">Registrate</Button>
                  {/*navigate to login page */}
                  <Button onClick={() => navigate("/login")} variant="outlined">Login</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      {/*cart component */}
      <Cart open={open} handleStateViewDrawer={handleStateViewDrawer} />
    </Box>
  );
};
