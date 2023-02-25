import { TextField, Grid } from "@mui/material";
import CardBody from "../card-element/CardBody";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

const Main = () => {
  const [userData, setUserData] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const initialFetch = async () => {
      try {
        fetch("http://localhost:8080/posts", {
          mode: "cors",
        })
          .then((response) => response.json())
          .then((data) => setUserData(data));
      } catch (error) {
        console.log(error);
      }
    };

    const searchFetch = async () => {
      try {
        fetch(`http://localhost:8080/posts/${query}`)
          .then((response) => response.json())
          .then((data) => setUserData(data));
      } catch (error) {
        console.log(error);
      }
    };

    query.length === 0 ? initialFetch() : searchFetch();
  }, [query]);

  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ md: "1" }}
        gap={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} margin={4}>
          <TextField
            id="input-with-sx"
            label="Search"
            variant="outlined"
            lg={12}
            xs={12}
            sx={{
              width: { xs: "115%", lg: "75%" },
              marginRight: { xs: "10px" },
              ":focus": {
                border: "00838f",
              },
            }}
            InputProps={{
              startAdornment: (
                <SearchIcon
                  sx={{ marginRight: "20px", color: "#00838f" }}
                ></SearchIcon>
              ),
            }}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Grid>
        {userData.map((element, index) => {
          return (
            <Grid
              item
              md={6}
              lg={3}
              justifyContent="center"
              alignItems="center"
              key={index}
            >
              <CardBody {...element} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Main;
