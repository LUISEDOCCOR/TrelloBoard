import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOnlyBoard } from "../localStorage/boards";
import { useState } from "react";
import { Button } from "../components/buttons";
import { getColumns } from "../localStorage/columns";
import { addColumns } from "../localStorage/columns";
import Column from "../components/column";
import ModalBoard from "../components/addModal";

const Board = () => {
    
    const {key} = useParams()
    const [board, setBoard] = useState([])
    const [columns, setColumns] = useState([])
    const [isHiddenModalAdd, setHiddenModalAdd] = useState(true)


    useEffect(() => {
        if(getOnlyBoard(key).length == 0){
            location.href = "/"
        }else{
            setBoard(getOnlyBoard(key)[0])
            setColumns(getColumns(key))
        }
    },[])

    const handleClickAddColumn = (valueTitleNewColumns, valueColor, setTitleNewColumns) => {
        if(valueTitleNewColumns != ""){
            addColumns(valueTitleNewColumns, valueColor, key)
            setHiddenModalAdd(true)
            setColumns(getColumns(key))
            setTitleNewColumns("")

        }
    }

    return (
        <div className="max-w-7xl mx-auto ">
            <header className="my-12 flex justify-between">
                <h1 className="text-4xl font-semibold">{board.title}</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div style={{background: board.bgColor}} className="w-12 h-12 shadow-sm rounded-full"></div>
                        <Button callback={() => (location.href = "/")} type="close"></Button>
                        <Button callback={() => {setHiddenModalAdd(!isHiddenModalAdd)}} type="add"></Button>
                        <Button type="edit"></Button>  
                    </div>
                    <div className="flex  justify-center">
                        <ModalBoard isHiddenModal={isHiddenModalAdd} handleClickBoard={handleClickAddColumn}/>
                    </div>
                </div>
            </header>
            <main className="flex gap-5">
                {
                    columns.map((column) => (
                        <Column title={column.title} bgColor={column.bgColor} key={column.key}/>
                    ))
                }
            </main>
        </div>
    )
}


export default Board 