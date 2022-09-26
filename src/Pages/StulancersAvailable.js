import StulancerComp from "../components/StulancerComp";
import { useSelector } from "react-redux";

import React, { useEffect } from "react";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getPosts } from "../action/posts";

function StulancersAvailable() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return !posts.length ? (
    <div>
      <Typography>Loading Stulancers</Typography>
      <CircularProgress />
    </div>
  ) : (
    <div>
      <Grid alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid item key={post._id} xs={12} sm={6}>
            <StulancerComp stulancer={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default StulancersAvailable;
