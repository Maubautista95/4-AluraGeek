import React from "react";
import styled from "styled-components";
import Logo from "../../pictures/LogoMain.svg";



const FooterEstilizado = styled.footer`
    display: flex;
    justify-content: space-around;
    margin: 0 -2vw 0 -2vw;
    border-top: 3px solid #246cc6;
    padding-top: 1vw;

`


const Footer =  () =>{

    return <>
        <FooterEstilizado>
        <a href="#"><img src={Logo}></img></a>
        </FooterEstilizado>
    </>
}

export default Footer;