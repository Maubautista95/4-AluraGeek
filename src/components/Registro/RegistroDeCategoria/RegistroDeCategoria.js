import React from "react";
import { useState } from "react";
import styled from "styled-components";
import InputComponent from "../../InputComponent/InputComponent";
import TextArea from "../../TextArea/TextArea";
import Button from "../../Button/Button";


const H2Estilizado = styled.h2`
    font-weight: 400;
    font-size: 4rem;
    text-align: center;

`

const FormPagina = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ButtonsDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 30px 0;
    gap: 8px;
    width: 81vw;
`


const RegistroDeCategoria = () => {
    
    //Hooks//

    const [nombreCategoria, actualizarNombreCategoria] = useState("");
    const [descripcionCategoria, actualizarDescripcionCategoria] = useState("");
    const [colorCategoria, actualizarColorCategoria] = useState("");
    const [codigoSeguridadCategoria, actualizarCodigoSeguridadCategoria] = useState("");

    //Función que manejará el envío

    const manejarEnvioCategoria = (evento) => {
        evento.preventDefault();
        console.log("Manejar el envio de la nueva categoría", evento);
    
        let datosAEnviarCategoria = {
          nombre: nombreCategoria,
          categoria: descripcionCategoria,
          color: colorCategoria,
          campoDeSeguridad: codigoSeguridadCategoria,
    
        }
        console.log(datosAEnviarCategoria)
      }

    const resetearHooksDeCategorias = ()=>{

        actualizarNombreCategoria("");
        actualizarDescripcionCategoria("");
        actualizarColorCategoria("");
        actualizarCodigoSeguridadCategoria(""); 
    }

    return (<>
        <FormPagina onSubmit={manejarEnvioCategoria}>
            <H2Estilizado>Nueva Categoría</H2Estilizado>
            <InputComponent placeholder="Nombre" value={nombreCategoria} onChange={(e)=>{actualizarNombreCategoria(e.target.value)}} />
            <TextArea placeholder="Descripción de la categoría" value={descripcionCategoria} onChange={(e)=>{actualizarDescripcionCategoria(e.target.value)}} />
            <InputComponent type="color" placeholder="Color" value={colorCategoria} onChange={(e)=>{actualizarColorCategoria(e.target.value)}} />
            <InputComponent placeholder="Código de seguridad" value={codigoSeguridadCategoria} onChange={(e)=>{actualizarCodigoSeguridadCategoria(e.target.value)}} />
            <ButtonsDiv>
                <Button nombre="Guardar" background_color="#2A7AE4" type="submit"/>
                <Button nombre="Limpiar" background_color="#9E9E9E" color="black" type="button" onClick={()=>{resetearHooksDeCategorias()}}/>
            </ButtonsDiv>
        </FormPagina>

    </>)


}


export default RegistroDeCategoria;