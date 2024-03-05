import React from "react";
import ColorsCatWalk from "./colorCatwalk";
import { useState } from "react";

const ModalColumn = ({isHiddenModal, handleClickAddCard}) => {

    const [valueTitle, setValueTitle] = useState("")
    const [valueContent, setValueContent] = useState("")
    const [valueColorNewBoard, setColorNewBoard] = useState("")


    return (
        <div className={`${!isHiddenModal ? "block" : "hidden"} w-72 h-44 space-y-3 rounded-sm bg-purple-600 py-2`}>
            <div className="flex flex-col items-center gap-2">
                <input value={valueTitle} onChange={(e) => {setValueTitle(e.target.value)}} className="w-3/4 rounded focus:outline-none px-2 py-1" type="text" placeholder="Title" />
                <input value={valueContent} onChange={(e) => {setValueContent(e.target.value)}} className="w-3/4 rounded focus:outline-none px-2 py-1" type="text" placeholder="Content"/>
                <ColorsCatWalk/>
            </div>
            <div className="pr-8">
                <button onClick={() => {handleClickAddCard(valueTitle, valueContent)}} className="bg-purple-300 px-2 py-1 rounded float-right hover:bg-purple-500 transition-colors">Done!</button>                
            </div>
        </div>
    )
}


export default ModalColumn