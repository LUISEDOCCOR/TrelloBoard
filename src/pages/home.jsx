import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SideBar from "../components/SideBar";
import PreviewBoard from "../components/PreviewBoard";
import { addBoard } from "../localStorage/boards";
import { getBoards } from "../localStorage/boards";
import ModalBoard from "../components/addModal";
import { deleteBoard } from "../localStorage/boards";


const HomePage = () => {

    const [isHiddenModalAdd, setHiddenModalAdd] = useState(true)
    const [Boards, setBoards] = useState([])

    const handleClickAddBoard = (valueTitleNewBoard, valueColor, setTitleNewBoard) => {
        if(valueTitleNewBoard != ""){
            addBoard(valueTitleNewBoard, valueColor)
            setHiddenModalAdd(true)
            setBoards(getBoards())
            setTitleNewBoard("")

        }
    }

    const handleDeleteBoard = (key) => {
        deleteBoard(key)
        setBoards(getBoards())

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
                        <ModalBoard isHiddenModal={isHiddenModalAdd} handleClickBoard={handleClickAddBoard}/>
                    </div>
                    {
                        Boards.map((item) => (
                            <PreviewBoard handleDeleteBoard={handleDeleteBoard} key={item.key} title={item.title} bgColor={item.bgColor} id={item.key} />
                        ))
                    }
                </div>
            </main>
        </div>
    )
}


export default HomePage