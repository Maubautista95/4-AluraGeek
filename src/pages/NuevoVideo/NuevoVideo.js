import React from "react";
import styled from "styled-components";
import RegistroDeVideo from "../../components/Registro/RegistroDeVideo/RegistroDeVideo";

const EstilosNuevoVideo = styled.div`
    display: block;
    margin: 30px 0;
`;



const NuevoVideo = ({ dataCategories }) => {
    
    return (
        <>
            <EstilosNuevoVideo>

                <RegistroDeVideo dataCategories={dataCategories}></RegistroDeVideo>

            </EstilosNuevoVideo >
        </>
    );
};

export default NuevoVideo;
