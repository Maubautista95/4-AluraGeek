import React from "react";
import styled from "styled-components";

const TablaEstilizada = styled.table`
    text-align: center;
    margin: 50px auto;
    width: 80vw;    
    color: white;
    font-size: 27px;
    border: 3px solid #2A7AE4;
    padding: 4px;
    border-collapse: collapse;
`

const TableHead = styled.thead`

    font-size: 35px;
    border: 3px solid #2A7AE4;
    border-collapse: collapse;
`

const Celda = styled.td`

    padding: 4px;
    border: 2px solid #9E9E9E;
    border-collapse: collapse;

`

const CategoryTable = ({ dataCategories, editarCategoriaTabla, eliminarCategoriaTabla }) => {


    

    return (<>

        <TablaEstilizada>
            <TableHead>
                <tr>
                    <Celda>Nombre</Celda>
                    <Celda>Descripcion</Celda>
                    <Celda>Editar</Celda>
                    <Celda>Remover</Celda>
                </tr>
            </TableHead>
            <tbody>
                {Object.keys(dataCategories).map(categoryKey => (
                    <tr key={categoryKey}>
                        <Celda>{dataCategories[categoryKey].section.titulo}</Celda>
                        <Celda>{dataCategories[categoryKey].section.descripcion}</Celda>
                        <Celda>
                            <button onClick={() => editarCategoriaTabla(categoryKey)}>Editar</button>
                        </Celda>
                        <Celda>
                            <button onClick={() => eliminarCategoriaTabla(categoryKey)}>Remover</button>
                        </Celda>
                    </tr>
                ))}
            </tbody>
        </TablaEstilizada>
    </>)
};

export default CategoryTable;