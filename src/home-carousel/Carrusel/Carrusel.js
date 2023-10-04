import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import VideoCard from "../VideoCard/VideoCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EstiloTitulos = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 14px;
    align-items: center;
`;

const EstiloH2 = styled.h2`
    background-color: ${(props) => props.color};
    padding: 5px;
    font-size: 35px;
    border: 3px solid ${(props) => props.color};
    border-radius: 4px;
`;

const EstiloH3 = styled.h3`
    font-size: 18px;
`;

const Carrusel = ({ titulo_carrusel, subtitulo_carrusel, color, datosVideos }) => {
    const configuraciones = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <>
            <EstiloTitulos>
                <EstiloH2 color={color}>{titulo_carrusel}</EstiloH2>
                <EstiloH3>{subtitulo_carrusel}</EstiloH3>
            </EstiloTitulos>

            <Slider {...configuraciones}>
                {Object.keys(datosVideos).map((key) => {
                    const video = datosVideos[key];
                    return (
                        <VideoCard
                            key={key}
                            video_url={video.video_url}
                            thumbnail_url={video.thumbnail_url}
                            color={color}
                        />
                    );
                })}
            </Slider>
        </>
    );
};

export default Carrusel;
