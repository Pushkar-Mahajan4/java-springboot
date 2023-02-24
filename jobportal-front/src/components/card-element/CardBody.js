import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Box } from "@mui/material";

const CardBody = (props) => {
  return (
    <Card
      xs={12}
      md={2}
      sx={{
        padding: "2%",
        paddingBottom: "45px",
        overflow: "hidden",
        width: "25rem",
        height: "30rem",
        margin: "10%",
      }}
    >
      <CardContent
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
        xs={{ fontSize: "0.5rem" }}
      >
        <Typography variant="h5" align="left" sx={{ fontWeight: "bold" }}>
          <>{props.profile}</>
        </Typography>
        <Typography variant="subtitle2" gutterBottom align="left" mt={3}>
          <Box component="span" sx={{ fontWeight: "bold" }}>
            Description:{" "}
          </Box>
          {props.description}
        </Typography>
        <Typography
          variant="overline"
          display="block"
          gutterBottom
          align="left"
        >
          <span>
            <Box sx={{ fontWeight: "bold" }} display="inline">
              Required Technology: {` `}{" "}
            </Box>
            {props.technology.map((element, index) => {
              return <span key={index}>{element}, </span>;
            })}
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardBody;
