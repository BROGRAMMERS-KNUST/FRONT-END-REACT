import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, sliderClasses,Card,Stack, Typography, Container,Grid} from '@mui/material'
import Background from '../Main/Background';
import { Box} from '@mui/system';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faTwitter, faWhatsapp,faYoutube,faGoogle} from '@fortawesome/free-brands-svg-icons'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import {AiOutlineLike } from "react-icons/bs";
import {BiDislike} from "react-icons/bs"
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
                  "url('https://img.freepik.com/free-psd/smartphone-mockup-apps_23-2148080566.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-psd/american-food-website-app-template_23-2148477329.jpg?w=900&t=st=1665258127~exp=1665258727~hmac=a59c9d7fdaeb46f0c470b5bf492694280d8f1241f23fc721649df08f43cd591c') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
             <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-psd/gradient-technology-design-template_23-2149336711.jpg?size=626&ext=jpg') ",
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
              <a href="https://www.gmail.com/" className="google social">
             <AiOutlineLike/>
             <BiDislike/>

             </a>
             
              
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
                  "url('https://img.freepik.com/free-psd/international-day-women-girls-science-web-template_23-2148885486.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-psd/sushi-concept-website-template_23-2148459644.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
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
                  "url('https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-psd/international-day-women-girls-science-web-template_23-2148885486.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/premium-photo/light-background-craft-envelope-alarm-clock-paper-clips-blue-pen-sheet-paper-with-text-wordpress_380694-5751.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
               
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/premium-photo/top-view-coffee-cup-keyboard-with-wordpress-inscription-table_488220-9430.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
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
                   <Avatar sx={{bgcolor:'success.light'}}>NO</Avatar>
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
                  "url('https://img.freepik.com/premium-photo/tokio-japan-june-05-2022-shopify-web-page-displayed-modern-laptop-smartphone-notebook-red-background-shopify-logo-iphone_132310-8584.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
               
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-photo/closeup-shot-two-pretty-afro-american-girls-using-their-phones-while-holding-shopping-bags_181624-46178.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
               
              }}
            >
            </Card>
             <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-photo/beautiful-smiling-young-blonde-woman-pointing-sunglasses-holding-shopping-bags-credit-card-pink-wall_496169-1506.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
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
                  <AvatarGroup max={3}>
                    <Avatar sx={{bgcolor:'success.light'}}>NY</Avatar>
                    <Avatar sx={{bgcolor:'primary.light'}}>YK</Avatar>
                    <Avatar sx={{bgcolor:'success.light'}}>TK</Avatar>
                    <Avatar src='https://img.freepik.com/premium-psd/seo-marketing-concept-3d-illustration_434471-682.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753'/>
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
                  "url('https://img.freepik.com/free-vector/seo-marketing-concept-with-research-symbols-world-map-magnifier_1284-14045.jpg?size=338&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-vector/search-engine-optimization-online-promotion-smm-manager-cartoon-character-mobile-settings-tools-adjustment-business-platform-website-analysis-vector-isolated-concept-metaphor-illustration_335657-2715.jpg?size=338&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-photo/searching-engine-optimizing-seo-browsing-concept_53876-64993.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
               
              }}
            >
            </Card>
             <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-vector/seo-analytics-team-concept-illustration_114360-9205.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
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
                  "url('https://img.freepik.com/premium-vector/web-development-programming-laptop-smartphone_73903-163.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?size=338&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
               
              }}
            >
            </Card>
              <Card
              sx={{
                background:
                  "url('https://img.freepik.com/premium-photo/web-design-concept-3d-rendering_72104-3665.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-photo/web-design-website-coding-concept_53876-64988.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            >
            </Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/premium-vector/isometric-flat-vector-concept-web-services-agency-website-builder_109064-1194.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
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



