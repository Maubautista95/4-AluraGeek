import React from "react";
import styled from "styled-components";

const EstilosVideoCard = styled.div`
    border: 3px solid ${(props) => props.color};
    width: 75%;
`

const ImagenVideoCard = styled.img`
    width: 100%;
`


const VideoCard = ({ video_url, thumbnail_url, color}) => {
    
    return (
      <EstilosVideoCard color={color}>
        <a href={video_url} target="_blank" rel="noopener noreferrer">
          <ImagenVideoCard src={thumbnail_url} alt="Video Thumbnail" />
        </a>
      </EstilosVideoCard>
    );
  }

export default VideoCard;