import { Box, Typography , Button} from "@mui/material";
import React from "react";
import LandingPic from "../../images/images_8.png";
import GetStarted from "./GetStarted";
import GridCategory from "./GridCategory";

const Background = () => {
  return (
    <Box sx={{ minHeight: "78vh", marginLeft: 4, marginRight: 4 }}>
      <Typography variant="h1" fontFamily="Nunito" marginTop={15}>
        Hire the <span> </span>
        <span className="highlight">best</span>
        <br /> <span className="highlight">Freelancer</span> online
      </Typography>
      <img className="LandingPic" src={LandingPic} alt="3D model" />
      <Typography variant="h4" fontFamily="Nunito">
        Turn your ideas into <b>reality</b>
      </Typography>
      <GetStarted />
      
  
      
        <div>Popular:</div>
        <Button href="/WebDesign" variant='contained' sx={{marginRight:'20px',marginTop:'10px',"&:hover":{backgroundColor:"goldenrod"}}}>Web Design </Button>
        <Button variant='contained' sx={{marginRight:'20px',marginTop:'10px',"&:hover":{backgroundColor:"goldenrod"}}}>Web Press</Button>
        <Button variant='contained' sx={{marginRight:'20px',marginTop:'10px',"&:hover":{backgroundColor:"goldenrod"}}}>logo Design</Button>
        <Button variant='contained' sx={{marginRight:'20px',marginTop:'10px',"&:hover":{backgroundColor:"goldenrod"}}}>Video Editing</Button>
        <br/>
        <br/>
        <GridCategory/>
        
    </Box>
  );
};

export default Background;
