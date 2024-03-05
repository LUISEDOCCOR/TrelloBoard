import React, { useState } from "react";
import colors from "../api/colors.json"

const ColorsCatWalk = ({setColor}) => {

    const [selectedColor, setSelectedColor] = useState("")

    const handleClick = (color) => {
        setSelectedColor(color)
        if(selectedColor !== ""){
            setColor(selectedColor)
        }else{
            setColor(colors[0])
        }
    }
    
    return (
        <div className="flex gap-2 justify-center">
            {
                colors.map((color, index) => (
                    <button onClick={() => {handleClick(color)}}key={index} style={{backgroundColor: color}} className={`rounded-full w-6 h-6 cursor-pointer ring-slate-400 focus:ring-1`}></button>
                ))
            }
        </div>
    )

}


export default ColorsCatWalk