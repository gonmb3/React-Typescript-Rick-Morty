import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { characters } from "../api/characters";
import { TypeCharacter } from "../interface/characterInterface";
import { Box, Chip, CircularProgress, Container, Divider, Grid, Typography } from "@mui/material";

const CharacterDetails: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<TypeCharacter | null>(null);

  {/*axios get character by ID */}
  useEffect(() => {
    characters
      .getByID({ id })
      .then((resp) => {
        setCharacter(resp.data);
        setLoading(false);
      })
      .catch();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth="xl">
        {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid sx={{mt:2}} container columnSpacing={2}>
              <Grid xs={6} item>
                <Typography variant={"h1"}>
                    {character?.name}
                </Typography>
                <Divider />
                <Typography variant={"h6"}>
                    {character?.origin.name}
                </Typography>

                <Box sx={{mt:2}}>
                    <Chip color={character?.status ==="Alive" ? "primary" : "error"} variant="outlined" label={character?.status} />
                </Box>
              </Grid>
            <Grid xs={6} item>
              <img src={character?.image} style={{width:"100%", borderRadius:"0.5em"}} />
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default CharacterDetails;