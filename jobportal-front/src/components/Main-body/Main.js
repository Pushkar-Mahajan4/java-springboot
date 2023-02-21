import { TextField, Grid } from "@mui/material";
import CardBody from "../card-element/CardBody";
import SearchIcon from "@mui/icons-material/Search";

const Main = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ md: "1" }}
        gap={2}
        justifyContent="center"
        alignItems="center"
        // sx={{ padding: "0 150px" }}
      >
        <Grid item xs={12}>
          <TextField
            xs={12}
            id="input-with-sx"
            label="Outlined"
            variant="outlined"
            sx={{
              width: "75%",
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
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{ margin: "0", padding: "0" }}
          justifyContent="center"
          alignItems="center"
        >
          <CardBody />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{ margin: "0", padding: "0" }}
          justifyContent="center"
          alignItems="center"
        >
          <CardBody />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{ margin: "0", padding: "0" }}
          justifyContent="center"
          alignItems="center"
        >
          <CardBody />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{ margin: "0", padding: "0" }}
          justifyContent="center"
          alignItems="center"
        >
          <CardBody />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
