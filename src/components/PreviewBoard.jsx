import React from "react";

const PreviewBoard = ({title, bgColor}) => {
    return (
        <article className={`${bgColor} w-32 h-32 rounded shadow-sm flex justify-center items-center text-xl font-semibold hover:scale-105 transition-transform cursor-pointer`}>
            <h3 className="text-lg">{title}</h3>
        </article>
    )
}

export default PreviewBoard