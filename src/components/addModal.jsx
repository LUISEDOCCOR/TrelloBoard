import React from "react";
import ColorsCatWalk from "./colorCatwalk";
import { useState } from "react";
import colors from "../api/colors.json"

const ModalBoard = ({isHiddenModal, handleClickBoard}) => {

    const [valueTitleNewBoard, setTitleNewBoard] = useState("")
    const [valueColorNewBoard, setColorNewBoard] = useState(colors[0])

    return (
        <div className={`${!isHiddenModal ? "absolute" : "hidden"} w-72 h-32 rounded-sm shadow-sm bg-purple-300 px-8 py-4 space-y-2`}>
            <div className="flex flex-col">
                <input onChange={(e) => {setTitleNewBoard(e.target.value)}} value={valueTitleNewBoard} type="text" placeholder="Title" className="focus:outline-none px-4 py-1 rounded-sm shadow"/>
            </div>
            <ColorsCatWalk setColor={setColorNewBoard}/>
            <div>
                <button onClick={() => {handleClickBoard(valueTitleNewBoard, valueColorNewBoard, setTitleNewBoard)}} className="bg-purple-500 px-4 py-1 rounded-sm shadow float-right">Add</button>
            </div>
        </div>
    )
}


export default ModalBoard