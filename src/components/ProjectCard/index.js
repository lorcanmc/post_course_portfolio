import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function ProjectCard({ image, name, desc, blurb, link }) {
  return (
    <Card className="project-card" sx={{ minHeight: 400, minWidth: 300 }}>
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {blurb}
        </Typography>
      </CardContent>
      <CardActions className="card-button">
        <Button size="small" href={link}>see more</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
