import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import Hero from "../components/Hero";
import React, { useEffect, useState } from "react";
import { characters } from "../api/characters";
import { TypeCharacter } from "../interface/characterInterface";
import CardComponent from "../components/Card";



export const Home: React.FC = () => {
  {
    /* characters state */
  }
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    []
  );
  {
    /* loadingº state */
  }
  const [loading, setLoading] = useState<boolean>(true);
  {
    /* pagination page counter */
  }
  const [counter, setCounter] = useState(1);
  const [page, setPage] = useState(1);
  {
    /* pagination change */
  }
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  {
    /*get all characters */
  }
  useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page })
      .then((result) => {
        setCounter(result.data.info.pages);
        setAllCharacters(result.data.results);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [page]);

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      {/*hero component*/}
      <Hero
        title="Rick & Morty"
        description="React Typescript & MUI"
        element={""}
      />

      {/*characters section */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <section className="">
            {allCharacters?.length !== 0 ? (
              <Grid sx={{ my: 2 }} container spacing={2} direction="row" alignItems={"center"} columns={{ xs: 6, sm: 8, md: 12 }}>
                {allCharacters?.map((char) => (
                  <Grid item xs={3}>
                    {/* card component */}
                    <CardComponent
                    key={char.id}
                    id={char.id}
                      image={char.image}
                      name={char.name}
                      status={char.status}
                      species={char.species}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              "No data"
            )}
          </section>
          {/* pagination */}
          <Box
            sx={{
              widh: "100%",
              display: "flex",
              justifyContent: "center",
              py: 4,
            }}
          >
            <Pagination
              variant={"outlined"}
              color="primary"
              count={counter}
              page={page}
              onChange={handleChange}
            />
          </Box>
        </>
      )}
    </Container>
  );
};
