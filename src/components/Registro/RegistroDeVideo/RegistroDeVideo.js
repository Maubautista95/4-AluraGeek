import { React, useState } from "react";
import styled from "styled-components";
import CampoTexto from "../../CampoTexto/CampoTexto";
import SelectComponent from "../../Select/SelectComponent";
import { MenuItem } from "@mui/material";
import TextArea from "../../TextArea/TextArea";
import Button from "../../Button/Button";



const FormNuevoVideo = styled.form`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TituloH1 = styled.h1`
    text-align: center;
    font-size: 60px;
    font-weight: 400;
`;

const DivBotones = styled.div`
    margin: 15px;
    display: flex;
    width: 60vw;
    justify-content: space-between;
`

const DivGuardarLimpiar = styled.div`
    display: flex;
    gap: 6px;   
`

const RegistroDeVideo = ({ dataCategories }) => {

  /*Hooks
  Titulo
  link del video
  link de la imagen del video
  Seleccionar categoría
  Descripción
  Campo de seguridad
  
  */

  const [titulo, actualizarTitulo] = useState('');
  const [linkVideo, actualizarLinkVideo] = useState('');
  const [linkImgVideo, actualizarLinkImgVideo] = useState('');
  const [categoría, actualizarCategoria] = useState('');
  const [descripcion, actualizarDescripcion] = useState('');
  const [campoDeSeguridad, actualizarCampoDeSeguridad] = useState('');


  const manejarEnvio = (evento) => {
    evento.preventDefault();
    console.log("Manejar el envio", evento);

    let datosAEnviar = {
      titulo: titulo,
      linkVideo: linkVideo,
      linkImgVideo: linkImgVideo,
      categoría: categoría,
      descripcion: descripcion,
      campoDeSeguridad: campoDeSeguridad

    }
    console.log(datosAEnviar)
  }

  const resetearCampos = () => {
    actualizarTitulo="";
    actualizarLinkVideo('');
    actualizarLinkImgVideo('');
    actualizarCategoria('');
    actualizarDescripcion('');
    actualizarCampoDeSeguridad('');
  };


  return (<>
    <TituloH1>Nuevo Video</TituloH1>
    <FormNuevoVideo onSubmit={manejarEnvio}>
      <CampoTexto placeholder={"Título"} type={"text"} onChange={(e) => actualizarTitulo(e.target.value)} />
      <CampoTexto placeholder={"Link del video"} type={"text"} onChange={(e) => actualizarLinkVideo(e.target.value)} />
      <CampoTexto placeholder={"Link imagen del video"} type={"text"} onChange={(e) => actualizarLinkImgVideo(e.target.value)} />

      <SelectComponent
        label={"Selecciona una categoría"}
        value={categoría}
        onChange={(newValue) => actualizarCategoria(newValue)}
      >
        {Object.keys(dataCategories).map((sectionKey) => (
          <MenuItem key={sectionKey} value={sectionKey}>
            {dataCategories[sectionKey].section.titulo}
          </MenuItem>
        ))}
      </SelectComponent>
      <TextArea placeholder={"Descripción"} label={"Descripcion"} onChange={(e) => actualizarDescripcion(e.target.value)}
        value={descripcion}></TextArea>

      <CampoTexto placeholder={"Campo de seguridad"} type={"text"} onChange={(e) => actualizarCampoDeSeguridad(e.target.value)} />
      <DivBotones>
        <DivGuardarLimpiar>
          <Button type="submit" background_color="#2A7AE4" nombre="Nuevo video">Guardar</Button>
          <Button
            type="button"
            background_color="#9E9E9E"
            nombre="Limpiar"
            onClick={() => {
              console.log("limpiar")
            }}
          >
            Limpiar
          </Button>

        </DivGuardarLimpiar>
        <div>
          <Button nombre="Nueva categoría" background_color="#2A7AE4" ></Button>
        </div>
      </DivBotones>


    </FormNuevoVideo>
  </>)

}

export default RegistroDeVideo;