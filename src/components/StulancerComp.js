import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
} from "@mui/material";

const Postcomp = (stulancer) => {
  console.log(stulancer);
  return (
    <div>
      <Card>
        <CardMedia title={stulancer.username} image={stulancer.profilepic} />
        <div>
          <Typography variant="h6">{stulancer.fullName}</Typography>
          <Typography variant="body2">{stulancer.brandName}</Typography>
        </div>
        <div>
          <Typography variant="body2" color="textSecondary">
            {stulancer.tags.map((tag) => `${tag} `)}
          </Typography>
        </div>
        <div>
          <CardContent>
            <Typography gutterBottom>{stulancer.profileDescription}</Typography>
          </CardContent>
        </div>
        <Rating name="read-only" value={stulancer.rating} readOnly />
        Rating
        {stulancer.rating}
      </Card>
    </div>
  );
};

export default Postcomp;
