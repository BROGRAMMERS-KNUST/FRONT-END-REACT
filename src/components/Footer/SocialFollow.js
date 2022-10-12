import React from "react";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Stack } from "@mui/material";

export default function SocialFollow() {
  return (
    <Box marginRight={80}>
      <div class="social-container">
        <div class="social-container">
          <Stack direction="row" spacing={2}>
            <a
              href="https://wa.me/242764001"
              className="whatsApp icon"
              target="blank"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>

            <a
              href="https://www.youtube.com/"
              className="youtube social"
              target="blank"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>

            <a
              href="https://www.facebook.com/"
              className="facebook social"
              target="blank"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>

            <a
              href="https://www.twitter.com/"
              className="twitter social"
              target="blank"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>

            <a
              href="https://www.gmail.com/"
              className="google social"
              target="blank"
            >
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </a>

            <a
              href="https://www.instagram.com/"
              className="instagram social"
              target="blank"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://t.me/0242764001"
              className="telegram social"
              target="blank"
            >
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
          </Stack>
        </div>
      </div>
    </Box>
  );
}
