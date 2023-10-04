import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Logo from "../../pictures/LogoMain.svg";

const EstilosHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  border-bottom: 3px solid #257be5;
  padding: 0.7rem 2.5vw 0.7rem 2.5vw;
  margin: -1vw -2.5vw;
  align-items: flex-start;
  
`;

const Header = () =>{

    return <>
    <EstilosHeader>
    <a href="/"><img src={Logo}></img></a>
    
    <a href="/nuevo_video"><Button nombre={"Nuevo video"} color={"white"} background_color={"black"} border_color={"#F5F5F5"} /></a>
       
    </EstilosHeader>
    
    </>


}

export default Header;