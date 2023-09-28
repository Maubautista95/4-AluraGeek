import React from "react";
import imagenBanner from "../../pictures/fondo-banner.jpg"; 
import styled from "styled-components";

const ImagenEstilizada = styled.img`
    margin: 0 auto;
    width: 98vw;
`;

const BannerEstilizado =  styled.div`
    margin-top: 1vw;

`

const Banner = () => {

    return <BannerEstilizado> 
    
    <ImagenEstilizada src={imagenBanner} alt="Fondo del banner" />
    
    </BannerEstilizado>
}

export default Banner;
