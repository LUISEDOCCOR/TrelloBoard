import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SideBar from "../components/SideBar";
import PreviewBoard from "../components/PreviewBoard";
import { addBoard } from "../localStorage/boards";
import ColorsCatWalk from "../components/colorCatwalk";
import { getBoards } from "../localStorage/boards";



const HomePage = () => {

    const [isHiddenModalAdd, setHiddenModalAdd] = useState(false)
    const [valueTitleNewBoard, setTitleNewBoard] = useState("")
    const [valueColor, setColor] = useState("")
    const [Boards, setBoards] = useState([])

    const handleClickAddBoard = () => {
        if(valueTitleNewBoard != ""){
            addBoard(valueTitleNewBoard, valueColor)
            setHiddenModalAdd(false)
            setTitleNewBoard("")
            setBoards(getBoards())

        }
    }

    useEffect(() => {
        setBoards(getBoards())
    },[])


    return (
        <div className="max-w-7xl mx-auto">
            <header className="mt-12 mb-8">
                <h1 className="text-4xl font-semibold">Welcome Back! 🖐</h1>
            </header>
            <main>
                <h2 className="mb-6 text-xl font-semibold">Your Boards ✨</h2>
                <div className="flex gap-6 flex-wrap">
                    <div className="space-y-6">
                        <div onClick={() => (setHiddenModalAdd(!isHiddenModalAdd))} className="w-32 h-32 rounded shadow-sm flex justify-center items-center text-xl font-semibold hover:scale-110 transition-transform cursor-pointer bg-purple-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <div className={`${isHiddenModalAdd ? "absolute" : "hidden"} w-72 h-32 rounded-sm shadow-sm bg-purple-300 px-8 py-4 space-y-2`}>
                            <div className="flex flex-col">
                                <input onChange={(e) => {setTitleNewBoard(e.target.value)}} value={valueTitleNewBoard} type="text" placeholder="Title" className="focus:outline-none px-4 py-1 rounded-sm shadow"/>
                            </div>
                            <ColorsCatWalk setColor={setColor}/>
                            <div>
                                <button onClick={handleClickAddBoard} className="bg-purple-500 px-4 py-1 rounded-sm shadow float-right">Add</button>
                            </div>
                        </div>
                    </div>
                    {
                        Boards.map((item) => (
                            <PreviewBoard key={item.key} title={item.title} bgColor={item.bgColor} id={item.key} />
                        ))
                    }
                </div>
            </main>
        </div>
    )
}


export default HomePage