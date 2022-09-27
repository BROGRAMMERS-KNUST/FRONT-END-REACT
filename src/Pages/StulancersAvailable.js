import StulancerComp from "../components/StulancerComp";
import { useSelector } from "react-redux";

import React, { useEffect } from "react";
import { CircularProgress, Grid, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { getPosts } from "../action/posts";

function StulancersAvailable(field) {
  const { stulancers } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  console.log(field);

  useEffect(() => {
    dispatch(getPosts(field));
  }, [dispatch]);

  return !stulancers ? (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" sx={{ fontFamily: "Nunito" }}>
        Loading Stulancers...
      </Typography>
      <CircularProgress />
    </Box>
  ) : (
    <Box sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography
        color="primary"
        variant="h5"
        sx={{ marginTop: 1, marginBottom: 2, fontFamily: "Nunito" }}
      >
        Stulancers Available
      </Typography>
      <Grid container alignItems="stretch" spacing={2} flexWrap>
        {stulancers.map((stulancer) => (
          <Grid item key={stulancer._id} xs={12} sm={2}>
            <StulancerComp stulancer={stulancer} field={field} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default StulancersAvailable;
