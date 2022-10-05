import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Box,
  Modal,
  IconButton,
  BoxIconButton,
  Button,
} from '@mui/material';
import { useState } from 'react';
import FreelancerPage from './FreelancerPage';
import CloseIcon from '@mui/icons-material/Close';
const StulancerComp = ({ stulancer }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Card
        sx={{ width: 200 }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <CardMedia title={stulancer.username} image={stulancer.profilepic} />
        <div>
          <Typography variant='h6'>{stulancer.fullName}</Typography>
          <Typography variant='body2'>{stulancer.brandName}</Typography>
        </div>
        <div>
          <Typography variant='body2' color='textSecondary'>
            {stulancer.serviceTags.map((tag) => `${tag} `)}
          </Typography>
        </div>
        <div>
          <CardContent>
            <Typography gutterBottom>{stulancer.profileDescription}</Typography>
          </CardContent>
        </div>
        <Rating name='read-only' value={stulancer.rating} readOnly />
        {stulancer.rating}
      </Card>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <FreelancerPage
          fullName={stulancer.fullName}
          bio={stulancer.bio}
          profilePic={stulancer.profilePic}
          telephoneNumber={stulancer.telephoneNumber}
          portfolioLink={stulancer.portfolioLink}
          whatsappLink={stulancer.whatsappLink}
          service={stulancer.service}
        />
      </Modal>
    </Box>
  );
};

export default StulancerComp;
