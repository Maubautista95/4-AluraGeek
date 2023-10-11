import { React, useState } from "react";
import styled from "styled-components";
import InputComponent from "../../InputComponent/InputComponent";
import SelectComponent from "../../Select/SelectComponent";
import { Input, MenuItem } from "@mui/material";
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
    width: 80vw;
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

  const resetearHooks = () => {
    actualizarTitulo('');
    actualizarLinkVideo('');
    actualizarLinkImgVideo('');
    actualizarCategoria('');
    actualizarDescripcion('');
    actualizarCampoDeSeguridad('');
  };


  return (<>
    <TituloH1>Nuevo Video</TituloH1>
    <FormNuevoVideo onSubmit={manejarEnvio}>
      <InputComponent placeholder={"Título"} type={"text"} onChange={(e) => actualizarTitulo(e.target.value)} value={titulo}/>
      <InputComponent placeholder={"Link del video"} type={"text"} onChange={(e) => actualizarLinkVideo(e.target.value)} value={linkVideo}/>
      <InputComponent placeholder={"Link imagen del video"} type={"text"} onChange={(e) => actualizarLinkImgVideo(e.target.value)} value={linkImgVideo}/>

      <SelectComponent
        label={"Selecciona una categoría"}
        value={categoría}
        onChange={(newValue) => actualizarCategoria(newValue)}
        data-categoria="selectCategoria"
      >
        {Object.keys(dataCategories).map((sectionKey) => (
          <MenuItem key={sectionKey} value={sectionKey}>
            {dataCategories[sectionKey].section.titulo}
          </MenuItem>
        ))}
      </SelectComponent>
      
      <TextArea 
      
      placeholder={"Descripción"} 
      label={"Descripcion"} 
      onChange={(e) => actualizarDescripcion(e.target.value)}
      value={descripcion}>
         
      </TextArea>

      <InputComponent placeholder={"Campo de seguridad"} type={"text"} onChange={(e) => actualizarCampoDeSeguridad(e.target.value)} value={campoDeSeguridad} />
      <DivBotones>
        <DivGuardarLimpiar>
          <Button type="submit" background_color="#2A7AE4" nombre="Nuevo video">Guardar</Button>
          <Button
            type="button"
            background_color="#9E9E9E"
            nombre="Limpiar"
            color="black"
            onClick={()=>{resetearHooks()}}
          >
            Limpiar
          </Button>

        </DivGuardarLimpiar>
        <div>
          <a href="/nueva_categoria"><Button type="button" nombre="Nueva categoría" background_color="#2A7AE4"></Button></a>
        </div>
      </DivBotones>


    </FormNuevoVideo>
  </>)

}

export default RegistroDeVideo;