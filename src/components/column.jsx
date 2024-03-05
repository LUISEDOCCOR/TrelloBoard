import React  from "react";
import ModalColumn from "./modalColumn";
import { useState } from "react";
import Card from "./card";

const Column = ({title, bgColor}) => {

    const [isHiddenModal, setHiddenModal] = useState(true)

    const handleClickAddCard = (valueTitle, valueContent) => {

    }

    return(
        <div className="flex flex-col gap-3">
            <article style={{backgroundColor: bgColor}} className="w-72 rounded-sm shadow-sm px-2 py-1 space-y-3">
                <span className="text-lg font-semibold ">
                    {title}
                </span>
                <div className="flex flex-col gap-2">
                    <Card/>
                    <Card/>
                </div>
                <button onClick={() => {setHiddenModal(!isHiddenModal)}} className="bg-purple-300 w-full py-1 flex justify-center items-center gap-2 shadow-sm rounded-sm hover:bg-purple-400 transition-colors">
                    <span>Add Card</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </article>
        <ModalColumn isHiddenModal={isHiddenModal}/>
        </div>

    )
}


export default Column