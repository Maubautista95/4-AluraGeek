import React from "react";
import RegistroDeCategoria from "../../components/Registro/RegistroDeCategoria/RegistroDeCategoria";

 
const NuevaCategoria = ({dataCategories, editarCategoriaTabla, eliminarCategoriaTabla})=>{

    
   

    return (<>

        <RegistroDeCategoria 
        dataCategories={dataCategories}
        editarCategoriaTabla={editarCategoriaTabla}
        eliminarCategoriaTabla={eliminarCategoriaTabla}>


        </RegistroDeCategoria>
   
    </>)  
}

export default NuevaCategoria;