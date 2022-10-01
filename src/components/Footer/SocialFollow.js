import React from "react";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialFollow() {
  return (
    <div class="social-container" >
      <div class="social-container">
        <a href="http://www.whatsapp.com/Brogrammers" 
         className="whatsApp icon">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a href="https://www.youtube.com/"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
       <a href="https://www.gmail.com/"
        className="google social">
       <FontAwesomeIcon icon={faGoogle} size='2x' />
      </a>
      <a href="https://www.instagram.com/"
        className="instagram social">
       <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
     
</div>
    </div>
  );
}