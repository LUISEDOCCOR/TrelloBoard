import React from "react";
import { useState } from "react";

const PreviewBoard = ({title, bgColor, id, handleDeleteBoard}) => {

    const [isHover, setHover] = useState(false)

    return (
        <div
        onMouseEnter={() => {setHover(true)}}
        onMouseLeave={() => {setHover(false)}}
        style={{backgroundColor: bgColor}} 
        className="w-32 h-32 overflow-hidden rounded-sm shadow-sm hover:scale-110 transition-transform flex justify-center items-center"
        > 
            <div className="flex items-center justify-center p-2 w-32 h-32">
                <h3 className="text-lg font-sembold overflow-hidden text-ellipsis">{title}</h3>
            </div>
            <div className={`${isHover ? "block" : "hidden"} backdrop-blur-sm h-32 w-32 absolute flex justify-center items-center gap-3`}>
                <button onClick={() => handleDeleteBoard(id)} className="hover:scale-110 transition-transform cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
                <a href={`/board/${id}`} className="hover:scale-110 transition-transform cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default PreviewBoard


{/* <a href={`/board/${id}`} style={{backgroundColor: bgColor}} className="w-32 h-32 rounded shadow-sm flex justify-center py-3 items-center text-xl font-semibold hover:scale-110 transition-transform cursor-pointer">
            <div className="w-3/4 ">
                <h3 className="text-lg text-center text-ellipsis overflow-hidden">{title}</h3>
            </div>
            <div className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </div>
</a> */}