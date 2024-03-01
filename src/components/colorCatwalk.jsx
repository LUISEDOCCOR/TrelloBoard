import React from "react";
import colors from "../api/colors.json"

const ColorsCatWalk = ({setColor}) => {
    console.log(colors)
    return (
        <div className="flex gap-2 justify-center">
            {
                colors.map((color, index) => (
                    <button onClick={() => {setColor(color)}} key={index} className={`bg-[${color}] rounded-full w-6 h-6 cursor-pointer ring-slate-400 focus:ring-1`}></button>
                ))
            }
        </div>
    )

}


export default ColorsCatWalk