import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const CardBody = (props) => {
  return (
    <Card
      sx={{
        padding: "2%",
        overflow: "hidden",
        width: "75%",
        margin: "10%",
      }}
    >
      <CardContent
        sx={{
          fontSize: "1.5rem",
        }}
      >
        <h3>{props.profile}</h3>
        <p>{props.description}</p>
      </CardContent>
    </Card>
  );
};

export default CardBody;
