import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import { CardTravelOutlined } from "@mui/icons-material";
import { Movie } from "@/types/types";
import Link from "next/dist/client/link";

export default function movieCard({ _id, title, poster, plot }: Movie) {
  return (
    <Link href={`/movies/${_id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component='img' height='140' image={poster} alt={title} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {plot}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton>
            <CardTravelOutlined />
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
}
