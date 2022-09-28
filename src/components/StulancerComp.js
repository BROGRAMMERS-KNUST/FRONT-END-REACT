import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
} from "@mui/material";
const StulancerComp = ({ stulancer }) => {
  return (
    <div>
      <Card sx={{ width: 200 }}>
        <CardMedia title={stulancer.username} image={stulancer.profilepic} />
        <div>
          <Typography variant="h6">{stulancer.fullName}</Typography>
          <Typography variant="body2">{stulancer.brandName}</Typography>
        </div>
        <div>
          <Typography variant="body2" color="textSecondary">
            {stulancer.serviceTags.map((tag) => `${tag} `)}
          </Typography>
        </div>
        <div>
          <CardContent>
            <Typography gutterBottom>{stulancer.profileDescription}</Typography>
          </CardContent>
        </div>
        <Rating name="read-only" value={stulancer.rating} readOnly />
        {stulancer.rating}
      </Card>
    </div>
  );
};

export default StulancerComp;
