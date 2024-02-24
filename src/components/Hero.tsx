import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

type HeroProps = {
    title:string,
    description:string,
    element?: React.ReactNode | null
};

const Hero: React.FC<HeroProps> = ({title, description,element}) => {
  return (
   <div className="">
     <Box sx={{ width: "100%", height: "350px" }}>
      <Grid
        container
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "100%" }}
      >
        <Grid item xs={5}>
          <Grid
            container
            direction="column"
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            sx={{ height: "100%" }}
          >
            <Grid item>
                <Typography variant="h2">
                    {title}
                </Typography>
            </Grid>

            <Grid item sx={{mt:2}} >
            <Typography  variant="h5">
                    {description}
                </Typography>
            </Grid>

            {element !== undefined && <Grid sx={{mt:4}} item>{element}</Grid>}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    <Divider />
    
   </div>
  );
};

export default Hero;
