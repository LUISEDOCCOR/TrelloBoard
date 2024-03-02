import Board from "../pages/board";
import { getKey } from "./boards";

export const addColumns = (title, bgColor, boardKey) => {
    const column = {
        key: getKey(),
        boardKey: boardKey,
        title: title,
        bgColor: bgColor
    }
    const columns = JSON.parse(localStorage.getItem("columns")) || []
    columns.push(column)
    localStorage.setItem('columns', JSON.stringify(columns))

}
export const getColumns = (boardKey) => {
    const allColumns =  JSON.parse(localStorage.getItem('columns')) || []
    const columns = allColumns.filter(item => item.boardKey == boardKey) || []
    return columns
}
