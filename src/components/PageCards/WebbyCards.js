import React from 'react';
import CardContent from '@mui/material/CardContent';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, sliderClasses,Card,Stack, Typography, Container,Grid} from '@mui/material'
import Background from '../Main/Background';
import { Box} from '@mui/system';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faTwitter, faWhatsapp,faYoutube,faGoogle} from '@fortawesome/free-brands-svg-icons'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
function WebbyCards(props)
{
    return (
      <div>
        <Stack direction="row" spacing={12} sx={{ flexWrap: "nowrap" }}>
          <Stack>
            <Carousel>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            </Carousel>
              <Paper sx={{
                width: 350,
                height: 100,
                }}>
                <Box sx={{
                  '&:hover': { color: 'purple' },
                }}>
                  <Avatar sx={{bgcolor:'primary.light'}}>MX</Avatar>
              I'll develop a modern web app or e-commerce website
              </Box>
              </Paper >
              <Paper>
              <Stack direction="row" spacing={2}>
              <a
              href="http://www.whatsapp.com/Brogrammers</Box>"
              className="whatsApp icon"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="1x" />
            </a>

            <a href="https://www.youtube.com/" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>

            <a href="https://www.twitter.com/" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>

            <a href="https://www.gmail.com/" className="google social">
              <FontAwesomeIcon icon={faGoogle} size="1x" />
            </a>
             
              <span>Starting at $70</span>
              
              </Stack>
              </Paper>
            <Typography
              variant="h5"
              width="300px"
              sx={{
                fontFamily: "Nunito",
                marginTop: 1,
              }}
            >
             
            </Typography>
            <br></br>
            
          </Stack>
          <Stack>
            <Carousel>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
               
              }}
            >
            </Card>
            </Carousel>
              <Paper sx={{
                width: 350,
                height: 100,
                }}>
                <Box sx={{ '&:hover': { color: 'purple' },}}>
                  <Avatar sx={{bgcolor:'success.light'}}>PK</Avatar>
              I'll develop a professional wordpress website design
             
              </Box>
              </Paper >
              <Paper>
              <Stack direction="row" spacing={2}>
              <a
              href="http://www.whatsapp.com/Brogrammers</Box>"
              className="whatsApp icon"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="1x" />
            </a>

            <a href="https://www.youtube.com/" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>

            <a href="https://www.twitter.com/" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>

            <a href="https://www.gmail.com/" className="google social">
              <FontAwesomeIcon icon={faGoogle} size="1x" />
            </a>
             
              <span>Starting at $70</span>
              
              </Stack>
              </Paper>
            <Typography
              variant="h5"
              width="300px"
              sx={{
                fontFamily: "Nunito",
                marginTop: 1,
              }}
            >
             
            </Typography>
            <br></br>
            
          </Stack>
          

            <Stack>
            <Carousel>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
               
              }}
            >
            </Card>
            </Carousel>
              <Paper sx={{
                width: 350,
                height: 100,
                }}>
                <Box sx={{
                  '&:hover': { color: 'purple' },
                }}>
              I'll build a profitable shopify dropshipping store
             
              </Box>
              </Paper >
              <Paper>
              <Stack direction="row" spacing={2}>
              <a
              href="http://www.whatsapp.com/Brogrammers</Box>"
              className="whatsApp icon"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="1x" />
            </a>

            <a href="https://www.youtube.com/" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>

            <a href="https://www.twitter.com/" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>

            <a href="https://www.gmail.com/" className="google social">
              <FontAwesomeIcon icon={faGoogle} size="1x" />
            </a>
             
              <span>Starting at $170</span>
              
              </Stack>
              </Paper>
            <Typography
              variant="h5"
              width="300px"
              sx={{
                fontFamily: "Nunito",
                marginTop: 1,
              }}
            >
             
            </Typography>
            <br></br>
            
          </Stack>
        </Stack>
        <Stack direction="row" spacing={12} sx={{ flexWrap: "wrap" }}>
             <Stack>
            <Carousel>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
               
              }}
            >
            </Card>
            </Carousel>
              <Paper sx={{
                width: 350,
                height: 100,
                }}>
                <Box sx={{
                  '&:hover': { color: 'purple' },
                }}>
                  <AvatarGroup max={2}>
                    <Avatar sx={{bgcolor:'success.light'}}>NY</Avatar>
                    <Avatar sx={{bgcolor:'primary.light'}}>YK</Avatar>
                    <Avatar sx={{bgcolor:'success.light'}}>TK</Avatar>
                  </AvatarGroup>
              I will create an attractive and responsive SEO friendly website
             
              </Box>
              </Paper >
              <Paper>
              <Stack direction="row" spacing={2}>
              <a
              href="http://www.whatsapp.com/Brogrammers</Box>"
              className="whatsApp icon"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="1x" />
            </a>

            <a href="https://www.youtube.com/" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>

            <a href="https://www.twitter.com/" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>

            <a href="https://www.gmail.com/" className="google social">
              <FontAwesomeIcon icon={faGoogle} size="1x" />
            </a>
             
              <span>Starting at $90</span>
              
              </Stack>
              </Paper>
            <Typography
              variant="h5"
              width="300px"
              sx={{
                fontFamily: "Nunito",
                marginTop: 1,
              }}
            >
             
            </Typography>
            <br></br>
            
          </Stack>

             <Stack>
            <Carousel>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
               
              }}
            >
            </Card>
            </Carousel>
              <Paper sx={{
                width: 350,
                height: 100,
                }}>
                <Box sx={{
                  '&:hover': { color: 'purple' },
                }}>
                  <Avatar src='https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600' alt='janet'/>
              I will build a professional website for your Business
             
              </Box>
              </Paper >
              <Paper>
              <Stack direction="row" spacing={2}>
              <a
              href="http://www.whatsapp.com/Brogrammers</Box>"
              className="whatsApp icon"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="1x" />
            </a>

            <a href="https://www.youtube.com/" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>

            <a href="https://www.twitter.com/" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>

            <a href="https://www.gmail.com/" className="google social">
              <FontAwesomeIcon icon={faGoogle} size="1x" />
            </a>
             
              <span>Starting at $100</span>
              
              </Stack>
              </Paper>
            <Typography
              variant="h5"
              width="300px"
              sx={{
                fontFamily: "Nunito",
                marginTop: 1,
              }}
            >
             
            </Typography>
            <br></br>
            
          </Stack>

            <Stack>
            <Carousel>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
               
              }}
            >
            </Card>
            </Carousel>
              <Paper sx={{
                width: 350,
                height: 100,
                }}>
                <Box sx={{
                  '&:hover': { color: 'purple' },
                }}>
              I will design modern website in PSD format or do website mockup
             
              </Box>
              </Paper >
              <Paper>
              <Stack direction="row" spacing={2}>
              <a
              href="http://www.whatsapp.com/Brogrammers</Box>"
              className="whatsApp icon"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="1x" />
            </a>

            <a href="https://www.youtube.com/" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>

            <a href="https://www.twitter.com/" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>

            <a href="https://www.gmail.com/" className="google social">
              <FontAwesomeIcon icon={faGoogle} size="1x" />
            </a>
             
              <span>Starting at $140</span>
              
              </Stack>
              </Paper>
            <Typography
              variant="h5"
              width="300px"
              sx={{
                fontFamily: "Nunito",
                marginTop: 1,
              }}
            >
             
            </Typography>
            <br></br>
            
          </Stack>
        </Stack>
        </div>   
    )    
}
 export default WebbyCards



