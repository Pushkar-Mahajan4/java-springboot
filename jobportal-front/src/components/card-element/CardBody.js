import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const CardBody = () => {
  return (
    <Card
      sx={{
        padding: "2%",
        overflow: "hidden",
        width: "75%",
        margin: "34px",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <CardContent>
        <h3>Stuff</h3>
        <p>Dhirendra Jha</p>
      </CardContent>
    </Card>
  );
};

export default CardBody;
