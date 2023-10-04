import React from "react";
import Banner from "../../components/Banner/Banner";
import Carrusel from "../../home-carousel/Carrusel/Carrusel";
import styled from "styled-components";
import VideoCard from "../../home-carousel/VideoCard/VideoCard";


const DivPrincipal = styled.div`
    
    position: relative;
    bottom: 750px;

    @media(max-width: 1440){

        bottom: 600px;

    }

    @media(max-width: 1024px){

        bottom: 400px;
    }


    @media(max-width: 830px){

        bottom: 350px;
    }

`
const DivIntroduccion = styled.div`

    display: flex;

`
const DivTextoPrincipal = styled.div`
    
    width: 48vw;

`
const DivH1Principal = styled.div`
    background-color: #6BD1FF;
    font-size: 2rem;
    width: 290px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: -10px 0;
`
const DivVideoPrincipal = styled.div`
    display: flex;
    justify-content: center;
    width: 50vw;
    padding: 1vw;
`

const Home = ({dataCategories}) => {

    const datosFrontEndSection = dataCategories.frontend.section;
    const datosFrontEndVideos = dataCategories.frontend.videos;

  
    const datosBackEndSection = dataCategories.backend.section;
    const datosBackEndVideos = dataCategories.backend.videos;

    

    console.log(datosBackEndVideos);

    return (<>

        <Banner></Banner>

        <DivPrincipal>
            <DivIntroduccion>
                <DivTextoPrincipal>
                    <DivH1Principal><h1>Front End</h1></DivH1Principal>
                    <h2>Challenge React</h2>
                    <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de
                        un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </DivTextoPrincipal>
                <DivVideoPrincipal>
                    <VideoCard          
                     color={datosFrontEndSection.color}
                    video_url={datosFrontEndVideos.video1.video_url}
                    thumbnail_url={datosFrontEndVideos.video1.thumbnail_url}>
                    </VideoCard>
                </DivVideoPrincipal>
            </DivIntroduccion>

            <Carrusel 

            titulo_carrusel={datosBackEndSection.titulo}
            subtitulo_carrusel={datosBackEndSection.subtitulo} 
            color={datosBackEndSection.color}
            datosVideos = {datosBackEndVideos}>
        
            </Carrusel>
        </DivPrincipal>


    </>
    );
}

export default Home;