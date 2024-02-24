import React from "react";
import { useAppSelector } from "../redux/hooks";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { HorizontalCart } from "./HorizontalCart";

interface CartProps {
  open: boolean;
  handleStateViewDrawer: () => void;
}

const Cart: React.FC<CartProps> = ({ open, handleStateViewDrawer }) => {
  const items = useAppSelector((state) => state.cartReducer);
  return (
    <Drawer anchor={"right"} open={open}>
      <Box sx={{ width: "25em", p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Typography variant="h5">Favoritos</Typography>
          <IconButton  color="primary" onClick={() => handleStateViewDrawer()}>
            <CloseRounded />
          </IconButton>
        
        </Stack>
        <Divider sx={{ my: 1.5 }} />
          {/* horizontalcart component */}
        {items.length > 0
          ? items.map((item) => (
              <HorizontalCart
                key={item.id}
                image={item.image}
                name={item.name}
                id={item.id}
                info={item.info}
              />
            ))
          : ""}
      </Box>
    </Drawer>
  );
};

export default Cart;
