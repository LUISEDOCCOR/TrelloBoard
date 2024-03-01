import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOnlyBoard } from "../localStorage/boards";
import { useState } from "react";
import { Button } from "../components/buttons";
import Column from "../components/column";

const Board = () => {
    const {key} = useParams()
    const [board, setBoard] = useState([])
    
    useEffect(() => {
        if(!localStorage.getItem(key)){
            location.href = "/"
        }else{
            setBoard(getOnlyBoard(key))
        }
    },[])



    return (
        <div className="max-w-7xl mx-auto">
            <header className="mt-12 mb-8 flex justify-between">
                <h1 className="text-4xl font-semibold">{board.title}</h1>
                <div className="flex items-center gap-2">
                    <div style={{background: board.bgColor}} className="w-12 h-12 shadow-sm rounded-full"></div>
                    <Button callback={() => (location.href = "/")} type="close"></Button>
                    <Button type="add"></Button>
                    <Button type="edit"></Button>   
                </div>
            </header>
            <main>
                <Column/>
            </main>
        </div>
    )
}


export default Board 