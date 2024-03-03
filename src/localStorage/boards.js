import { deleteColumns } from "./columns"

export const getKey = () => {
    return new Date().getTime()
}

//Boards
export const addBoard = (title, bgColor) => {
    const board = {
        key: getKey(),
        title: title,
        bgColor: bgColor
    }
    const boards = JSON.parse(localStorage.getItem("boards")) || []
    boards.push(board)
    localStorage.setItem('boards', JSON.stringify(boards))

}

export const getBoards = () => {
    return JSON.parse(localStorage.getItem("boards")) || []
}

export const getOnlyBoard = (key) => {
    const boards = JSON.parse(localStorage.getItem("boards")) || []
    const board =  boards.filter(item => item.key == key) || []
    return board
}

export const deleteBoard = (key) => {
    const allBoards = JSON.parse(localStorage.getItem("boards")) || []
    const boards =  allBoards.filter(item => item.key != key) || []
    localStorage.setItem('boards', JSON.stringify(boards))
    deleteColumns(key)
}