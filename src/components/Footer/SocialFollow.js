import React from 'react';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Stack } from '@mui/material';

export default function SocialFollow() {
  return (
    <Box marginRight={80}>
      <div class='social-container'>
        <div class='social-container'>
          <Stack direction='row' spacing={2}>
            <a
              href='https://wa.me/557367174'
              className='whatsApp icon'
              target='blank'
            >
              <FontAwesomeIcon color='white' icon={faWhatsapp} size='2x' />
            </a>

            <a
              href='https://www.youtube.com/channel/UC3460fdV4miF8El-lKXwNHw'
              className='youtube social'
              target='blank'
            >
              <FontAwesomeIcon color='white' icon={faYoutube} size='2x' />
            </a>

            <a
              href='https://www.facebook.com/100086395737504/'
              className='facebook social'
              target='blank'
            >
              <FontAwesomeIcon color='white' icon={faFacebook} size='2x' />
            </a>

            <a
              href='https://www.twitter.com/BrogrammersK'
              className='twitter social'
              target='blank' 
            >
              <FontAwesomeIcon color='white' icon={faTwitter} size='2x' />
            </a>

            <a
              href='https://www.instagram.com/'
              className='instagram social'
              target='blank'
            >
              <FontAwesomeIcon color='white' icon={faInstagram} size='2x' />
            </a>
            <a
              href='https://t.me/+OfgZbPGwFSE5MjA0'
              className='telegram social'
              target='blank'
            >
              <FontAwesomeIcon color='white' icon={faTelegram} size='2x' />
            </a>
          </Stack>
        </div>
      </div>
    </Box>
  );
}
