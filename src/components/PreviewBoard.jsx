import React from "react";

const PreviewBoard = ({title, bgColor, id}) => {
    return (
        <a href={`/board/${id}`} style={{backgroundColor: bgColor}} className="w-32 h-32 rounded shadow-sm flex justify-center items-center text-xl font-semibold hover:scale-110 transition-transform cursor-pointer">
            <h3 className="text-lg text-center w-3/4 text-ellipsis overflow-hidden">{title}</h3>
        </a>
    )
}

export default PreviewBoard